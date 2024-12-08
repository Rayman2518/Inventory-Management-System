import React from 'react';

export default function ItemsConfirmedPage() {
  const confirmedItems = [
    "Shoes",
    "Tee-Shirt",
    "Jacket",
    "Tie",
    "Sweat Shirt",
    "Socks",
  ];

  return (
    <div className="bg-white rounded-lg shadow max-w-4xl">
      <div className="p-12">
        <h1 className="text-2xl font-semibold mb-12">Items Confirmed for Packing</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> 
          {confirmedItems.map((item, index) => (
            <div
              key={index}
              className="bg-red-200 p-4 rounded-md text-center border-1 border-black" 
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
