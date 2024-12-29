import React from 'react';

export const Banner: React.FC = () => {
  return (
    <div className="relative h-[300px] w-full mb-8 rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1500"
        alt="KFC Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
        <div className="text-white p-8">
          <h2 className="text-4xl font-bold mb-4">Finger Lickin' Good</h2>
          <p className="text-xl mb-6">Discover our delicious menu</p>
          <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};