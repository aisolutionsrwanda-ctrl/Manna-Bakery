import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-cream border-t-2 border-brand-peach">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg text-brand-teal mb-4">Shop</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Cupcakes</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Cakes</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Cookies & Brownies</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Banana Pudding</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg text-brand-teal mb-4">About</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Our Story</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg text-brand-teal mb-4">Customer Service</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">FAQ</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Shipping Information</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Dietary & Allergy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg text-brand-teal mb-4">Follow Us</h4>
            {/* SVGs for social media icons could go here */}
            <div className="flex space-x-4">
                <a href="#" className="hover:opacity-75">FB</a>
                <a href="#" className="hover:opacity-75">IG</a>
                <a href="#" className="hover:opacity-75">TW</a>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-peach pt-8 text-center text-sm text-brand-brown">
          <p>&copy; {new Date().getFullYear()} Manna Bakery. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;