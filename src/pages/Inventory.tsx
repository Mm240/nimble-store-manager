
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, AlertTriangle, Check } from 'lucide-react';
import { products as mockProducts, Product } from '@/data/mockData';
import { useToast } from '@/components/ui/use-toast';

const Inventory: React.FC = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUpdateStock = (productId: string, newStock: number) => {
    setProducts(products.map(product => 
      product.id === productId 
        ? { ...product, stock: Math.max(0, newStock) } 
        : product
    ));

    toast({
      title: "Stock updated",
      description: "Inventory has been updated successfully",
    });
  };

  const getStockStatus = (stock: number) => {
    if (stock === 0) {
      return <div className="flex items-center gap-1 text-red-600"><AlertTriangle className="h-4 w-4" /> Out of stock</div>;
    } else if (stock < 10) {
      return <div className="flex items-center gap-1 text-yellow-600"><AlertTriangle className="h-4 w-4" /> Low stock</div>;
    } else {
      return <div className="flex items-center gap-1 text-green-600"><Check className="h-4 w-4" /> In stock</div>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Inventory</h1>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by product name or category..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Stock Levels</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Current Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-4 text-muted-foreground">
                      No products found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>${product.price.toFixed(2)}</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>{getStockStatus(product.stock)}</TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleUpdateStock(product.id, product.stock + 1)}
                        >
                          + Add
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleUpdateStock(product.id, product.stock - 1)}
                          disabled={product.stock <= 0}
                        >
                          - Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Inventory;
