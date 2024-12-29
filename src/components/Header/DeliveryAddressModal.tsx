import React, { useState } from 'react';
import { X, MapPin } from 'lucide-react';

interface DeliveryAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeliveryAddressModal: React.FC<DeliveryAddressModalProps> = ({ isOpen, onClose }) => {
  const [address, setAddress] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Enter delivery address</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-4">Or else how will we know where to deliver?</p>
          
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter street and address number"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          
          <button 
            onClick={onClose}
            className="w-full mt-4 bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};