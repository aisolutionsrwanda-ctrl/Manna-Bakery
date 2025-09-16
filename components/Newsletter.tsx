
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${email}!`);
    setEmail('');
  };

  return (
    <section className="bg-brand-dark-teal py-16">
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-3xl font-serif font-bold mb-4">Join Our Sweet List</h2>
        <p className="max-w-xl mx-auto mb-8">
          Be the first to know about new seasonal items, special offers, and events at the bakery.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 rounded-l-md text-brand-brown focus:outline-none focus:ring-2 focus:ring-brand-peach"
            required
          />
          <button
            type="submit"
            className="bg-brand-peach text-brand-brown font-bold px-6 py-3 rounded-r-md hover:bg-opacity-90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
