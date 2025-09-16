import React from 'react';
import { navLinks } from '../constants';
import { SearchIcon, UserIcon, ShoppingCartIcon } from './Icons';

interface HeaderProps {
  navigate: (href: string) => void;
}

const Header: React.FC<HeaderProps> = ({ navigate }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };
  
  return (
    <header className="bg-brand-cream sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" onClick={(e) => handleNavClick(e, '/')} className="text-2xl font-serif font-bold text-brand-teal cursor-pointer">
          Manna
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-brand-brown hover:text-brand-teal transition-colors duration-300 font-semibold"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-brand-brown hover:text-brand-teal transition-colors duration-300">
            <SearchIcon className="h-6 w-6" />
          </button>
          <button className="text-brand-brown hover:text-brand-teal transition-colors duration-300">
            <UserIcon className="h-6 w-6" />
          </button>
          <button className="text-brand-brown hover:text-brand-teal transition-colors duration-300">
            <ShoppingCartIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;