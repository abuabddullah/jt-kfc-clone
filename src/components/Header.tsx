import React, { useState } from 'react';
import { Search, ShoppingCart, MapPin } from 'lucide-react';
import Cookies from 'js-cookie';
import { LanguageSelector } from './Header/LanguageSelector';
import { DeliveryAddressModal } from './Header/DeliveryAddressModal';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const cartCount = Cookies.get('cartCount') || '0';

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">KFC Clone</h1>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search menu items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
              <button
                onClick={() => setIsAddressModalOpen(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-full text-sm font-medium"
              >
                <MapPin size={18} />
                <span>Enter delivery address</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-6">
              <LanguageSelector />
              
              <button className="text-gray-700 hover:text-gray-900 font-medium">
                Log in
              </button>
              
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                {Number(cartCount) > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <DeliveryAddressModal 
        isOpen={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
      />
    </>
  );
};