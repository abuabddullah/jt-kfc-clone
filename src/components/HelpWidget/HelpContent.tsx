import React from 'react';
import { HelpItem } from './HelpItem';

export const HelpContent: React.FC = () => {
  const handleItemClick = () => {
    // Handle item click
    console.log('Help item clicked');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-xl font-semibold">How can we help you?</h2>
      </div>
      
      <div className="divide-y divide-gray-100">
        <HelpItem
          title="Payment and promo codes"
          description="Get help with cards, discounts, and order prices"
          onClick={handleItemClick}
        />
        <HelpItem
          title="Partnership"
          description="Become a courier or partner"
          onClick={handleItemClick}
        />
        <HelpItem
          title="Another question"
          description="We will also deal with it"
          onClick={handleItemClick}
        />
      </div>
    </div>
  );
};