import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HelpItemProps {
  title: string;
  description: string;
  onClick: () => void;
}

export const HelpItem: React.FC<HelpItemProps> = ({ title, description, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-4 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <ChevronRight className="text-gray-400" size={20} />
      </div>
    </button>
  );
};