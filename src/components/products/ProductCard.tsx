
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Trash2 } from 'lucide-react';
import { Product } from '@/data/mockData';

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onEdit, onDelete }) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="h-48 overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
          </div>
          <div className="text-lg font-bold">${product.price.toFixed(2)}</div>
        </div>
        <p className="text-sm mt-2 line-clamp-2">{product.description}</p>
        <div className="mt-2">
          <span className={`text-sm font-medium ${product.stock > 10 ? 'text-green-600' : product.stock > 0 ? 'text-yellow-600' : 'text-red-600'}`}>
            {product.stock === 0 
              ? 'Out of stock' 
              : product.stock < 10 
                ? `Low stock: ${product.stock} left`
                : `In stock: ${product.stock}`
            }
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onEdit(product)}
          className="flex items-center gap-1"
        >
          <Edit className="h-4 w-4" /> Edit
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onDelete(product.id)}
          className="flex items-center gap-1 text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" /> Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
