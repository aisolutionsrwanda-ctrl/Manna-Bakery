import React from 'react';
import { galleryImages } from '../constants';

const GalleryPage: React.FC = () => {
  return (
    <section className="py-16 bg-brand-cream animate-fade-in">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center text-brand-teal mb-12">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
              />
            </div>
          ))}
        </div>
        <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
          }
        `}</style>
      </div>
    </section>
  );
};

export default GalleryPage;
