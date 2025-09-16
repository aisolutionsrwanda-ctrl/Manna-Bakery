
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="overflow-hidden">
        <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-brand-teal mb-2">{product.name}</h3>
        <p className="text-brand-brown text-sm mb-4 h-16">{product.description}</p>
        <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-brand-dark-teal">{product.price}</span>
            <button className="text-brand-teal font-semibold hover:underline">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
