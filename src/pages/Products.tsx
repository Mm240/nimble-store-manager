
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import ProductForm from '@/components/products/ProductForm';
import { Product, products as mockProducts } from '@/data/mockData';

const Products: React.FC = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [formOpen, setFormOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | undefined>(undefined);

  const handleAddProduct = () => {
    setCurrentProduct(undefined);
    setFormOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setCurrentProduct(product);
    setFormOpen(true);
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts(products.filter(product => product.id !== productId));
    toast({
      title: "Product deleted",
      description: "The product has been removed successfully",
    });
  };

  const handleSaveProduct = (productData: Omit<Product, 'id'> & { id?: string }) => {
    if (productData.id) {
      // Edit existing product
      setProducts(products.map(p => 
        p.id === productData.id ? { ...productData, id: p.id } as Product : p
      ));
      toast({
        title: "Product updated",
        description: "The product has been updated successfully",
      });
    } else {
      // Add new product
      const newProduct = {
        ...productData,
        id: (products.length + 1).toString(),
      } as Product;
      
      setProducts([...products, newProduct]);
      toast({
        title: "Product added",
        description: "The new product has been added successfully",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <Button onClick={handleAddProduct} className="flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Product
        </Button>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>

      <ProductForm 
        open={formOpen} 
        onOpenChange={setFormOpen}
        product={currentProduct}
        onSave={handleSaveProduct}
      />
    </div>
  );
};

export default Products;
