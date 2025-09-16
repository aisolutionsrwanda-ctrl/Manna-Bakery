
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509308677618-8f5348126b8b?q=80&w=1600&h=900&fit=crop')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 drop-shadow-lg">Baked with Love, Just for You</h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow-md">Discover artisanal pastries, cakes, and cookies made from the finest ingredients.</p>
        <a 
          href="#"
          className="bg-brand-peach text-brand-brown font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300"
        >
          Explore Our Menu
        </a>
      </div>
    </div>
  );
};

export default Hero;