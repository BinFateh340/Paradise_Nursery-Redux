import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';
import logo from '../assets/logo.webp';

export default function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <img
              src={logo}
              alt="Paradise Nursery Logo"
              className="w-6 h-6"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">Paradise Nursery</h1>
            <p className="text-xs">Where Green Meets Serenity</p>
          </div>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link to="/products" className="hover:text-green-100">
            Plants
          </Link>
          <Link to="/cart" className="relative hover:text-green-100">
            <ShoppingCart className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

