import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About KFC</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-red-500">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-500">History</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-500">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-red-500">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-500">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-500">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-red-500">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-500">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-500">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-red-500">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-500">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-500">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-500">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} KFC Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};