
import React from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  title: string;
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, products }) => {
  return (
    <section className="py-16 bg-brand-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center text-brand-teal mb-12">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
