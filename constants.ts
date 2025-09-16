import { Product, GalleryImage } from './types';

export const navLinks = [
  { name: 'Shop', href: '/shop' },
  { name: 'Our Menu', href: '/menu' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About Us', href: '/about' },
  { name: 'Corporate Gifting', href: '/gifting' },
  { name: 'Locations', href: '/locations' },
];

export const featuredProducts: Product[] = [
  {
    name: 'Classic Vanilla Cupcake',
    description: 'A light and fluffy vanilla bean cupcake with a swirl of rich buttercream frosting.',
    price: '$4.50',
    imageUrl: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c8b7?q=80&w=400&h=400&fit=crop',
  },
  {
    name: 'Decadent Chocolate Cake',
    description: 'Layers of moist chocolate cake and fudge frosting, a true chocolate lover\'s dream.',
    price: '$55.00',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&h=400&fit=crop',
  },
  {
    name: 'Chewy Oatmeal Raisin Cookie',
    description: 'A timeless classic, perfectly spiced with cinnamon and packed with plump raisins.',
    price: '$3.00',
    imageUrl: 'https://images.unsplash.com/photo-1596562235941-094183086988?q=80&w=400&h=400&fit=crop',
  },
  {
    name: 'Signature Banana Pudding',
    description: 'Our world-famous creamy pudding with fresh bananas and vanilla wafers.',
    price: '$6.50',
    imageUrl: 'https://images.unsplash.com/photo-1624922759239-130d6e23293e?q=80&w=400&h=400&fit=crop',
  },
];

export const seasonalSpecial: Product = {
  name: 'Peach & Lavender Tart',
  description: 'Experience summer with our new Peach & Lavender Tart. A buttery crust filled with luscious peach compote and infused with a delicate hint of lavender, topped with toasted almonds. Available for a limited time only!',
  price: '$8.50 / slice',
  imageUrl: 'https://images.unsplash.com/photo-1626980998811-45a68a529947?q=80&w=800&h=600&fit=crop',
};

export const galleryImages: GalleryImage[] = [
    { src: 'https://images.unsplash.com/photo-1587383620527-33272616215a?q=80&w=600&h=800&fit=crop', alt: 'Elegant multi-tiered wedding cake with floral decorations' },
    { src: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=800&h=600&fit=crop', alt: 'Colorful assortment of French macarons' },
    { src: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&h=600&fit=crop', alt: 'Bakery display case filled with various pastries' },
    { src: 'https://images.unsplash.com/photo-1568488993806-9c4d92a01d21?q=80&w=800&h=600&fit=crop', alt: 'Freshly baked, flaky croissants on a tray' },
    { src: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=600&h=800&fit=crop', alt: 'A delicious slice of layered chocolate cake' },
    { src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f81?q=80&w=600&h=800&fit=crop', alt: 'A warm pastry served alongside a cup of coffee' },
    { src: 'https://images.unsplash.com/photo-1533931602115-f5e21a221293?q=80&w=800&h=600&fit=crop', alt: 'Artisanal loaf of crusty bread' },
    { src: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=800&h=600&fit=crop', alt: 'A beautiful spread of decorated cupcakes' },
    { src: 'https://images.unsplash.com/photo-1581332244243-d021cfa5a26c?q=80&w=800&h=600&fit=crop', alt: 'The warm and inviting interior of a bakery' },
];