import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import NewProductOrder from './components/NewProductOrder';
import AboutSection from './components/AboutSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import GalleryPage from './components/GalleryPage';
import { featuredProducts, seasonalSpecial } from './constants';

const App: React.FC = () => {
  // Simple routing based on pathname
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Function to handle navigation clicks and prevent full page reload
  const navigate = (href: string) => {
    window.history.pushState({}, '', href);
    setPathname(href);
  };

  const renderContent = () => {
    switch (pathname) {
      case '/gallery':
        return <GalleryPage />;
      default:
        return (
          <>
            <Hero />
            <ProductGrid title="Our Beloved Classics" products={featuredProducts} />
            <NewProductOrder product={seasonalSpecial} />
            <AboutSection />
            <Newsletter />
          </>
        );
    }
  };

  return (
    <div className="bg-brand-cream text-brand-brown">
      <Header navigate={navigate} />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;