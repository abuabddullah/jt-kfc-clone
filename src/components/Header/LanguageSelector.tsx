import React, { useState } from 'react';
import { Globe } from 'lucide-react';

export const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
      >
        <Globe size={20} />
        <span className="text-sm">English</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
          <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100">English</button>
          <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100">Русский</button>
          <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100">Қазақша</button>
        </div>
      )}
    </div>
  );
};