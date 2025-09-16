
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-4xl font-serif font-bold text-brand-teal mb-6">Our Sweet Story</h2>
        <p className="text-lg text-brand-brown mb-8 leading-relaxed">
          Founded in a small kitchen with a big dream, Manna Bakery has been crafting delightful moments since 2010. We believe in the magic of simple, high-quality ingredients and the joy that a freshly baked treat can bring. Every item on our menu is a piece of our heart, made for you to share and savor.
        </p>
        <a 
          href="#"
          className="bg-brand-teal text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-brand-dark-teal transition-colors duration-300"
        >
          Learn More About Us
        </a>
      </div>
    </section>
  );
};

export default AboutSection;