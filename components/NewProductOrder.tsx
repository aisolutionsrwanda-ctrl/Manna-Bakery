
import React, { useState } from 'react';
import type { Product } from '../types';

interface NewProductOrderProps {
  product: Product;
}

const NewProductOrder: React.FC<NewProductOrderProps> = ({ product }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(name && email && quantity > 0) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 bg-brand-peach">
      <div className="container mx-auto px-6">
        <div className="bg-brand-cream rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img src={product.imageUrl} alt={product.name} className="w-full h-64 lg:h-full object-cover"/>
          </div>
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-serif font-bold text-brand-teal mb-2">New Seasonal Special!</h2>
            <h3 className="text-2xl font-serif text-brand-dark-teal mb-4">{product.name}</h3>
            <p className="text-brand-brown mb-6">{product.description}</p>
            <span className="text-2xl font-bold text-brand-dark-teal mb-6">{product.price}</span>
            
            {submitted ? (
              <div className="bg-brand-teal text-white p-6 rounded-lg text-center">
                <h4 className="text-2xl font-bold mb-2">Thank you, {name}!</h4>
                <p>Your order for {quantity} {product.name.toLowerCase()}(s) has been received. A confirmation will be sent to {email}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-brand-brown mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-brand-peach rounded-md focus:ring-2 focus:ring-brand-teal focus:outline-none"
                    placeholder="Jane Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-brand-brown mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-brand-peach rounded-md focus:ring-2 focus:ring-brand-teal focus:outline-none"
                    placeholder="jane.doe@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-bold text-brand-brown mb-1">Quantity</label>
                  <input 
                    type="number" 
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                    min="1"
                    className="w-full px-4 py-2 border border-brand-peach rounded-md focus:ring-2 focus:ring-brand-teal focus:outline-none"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-brand-teal text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-dark-teal transition-colors duration-300 transform hover:scale-105"
                >
                  Order Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProductOrder;
