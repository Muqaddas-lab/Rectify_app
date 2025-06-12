import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Brand Name */}
        <div className="text-2xl font-bold tracking-wide">
          🛍️ MyShop
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-lg">
          <Link href="/" className="hover:text-yellow-300 transition duration-200">Main</Link>
          <Link href="/home" className="hover:text-yellow-300 transition duration-200">Home</Link>
          <Link href="/shopping-cart" className="hover:text-yellow-300 transition duration-200">Shopping Cart</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
