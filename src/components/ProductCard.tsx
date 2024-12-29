import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold">₸{product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-red-600 transition-colors"
          >
            <Plus size={20} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};