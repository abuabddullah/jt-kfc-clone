import React from 'react';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types';

interface ProductSectionProps {
  category: string;
  products: Product[];
  onAddToCart: (product: Product) => void;
  isActive: boolean;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  category,
  products,
  onAddToCart,
  isActive,
}) => {
  return (
    <div 
      id={category} 
      className={`transition-all duration-500 ${
        isActive 
          ? 'opacity-100 transform translate-x-0' 
          : 'opacity-50 transform -translate-x-4'
      }`}
    >
      <h2 className="text-2xl font-bold mb-6">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};