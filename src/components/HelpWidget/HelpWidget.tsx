import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { HelpContent } from './HelpContent';

export const HelpWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Help Content */}
      <div
        className={`absolute bottom-16 left-0 w-80 transform transition-all duration-300 ${
          isOpen
            ? 'translate-y-0 opacity-100'
            : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <HelpContent />
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        {isOpen ? (
          <X size={24} className="animate-in" />
        ) : (
          <MessageCircle size={24} className="animate-in" />
        )}
      </button>
    </div>
  );
};