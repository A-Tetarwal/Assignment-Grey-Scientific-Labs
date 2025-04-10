import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, LogOut, Home } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { useCartStore } from '../store/useCartStore';

export function Header() {
  const navigate = useNavigate();
  const logout = useAuthStore(state => state.logout);
  const cartItems = useCartStore(state => state.items);
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-gray-800 hover:text-gray-600">
              <Home className="h-6 w-6" />
              <span className="ml-2 font-medium">Home</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative text-gray-800 hover:text-gray-600">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-800 hover:text-gray-600"
            >
              <LogOut className="h-6 w-6" />
              <span className="ml-2 font-medium">Logout</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}