import React from 'react';

export default function BarCodeScanner() {
  return (
    <div className="min-h-[500px] max-h-[500px] overflow-y-auto p-4">
      <h2 className="text-2xl font-semibold mb-2">BarCode Scanner</h2>
      <p className="text-gray-600 mb-6">Item's Information</p>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="item-name" className="block text-sm font-medium text-gray-700">Item Name</label>
          <input
            type="text"
            id="item-name"
            className="mt-1 h-10 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm transition duration-150 ease-in-out focus:ring-2 focus:ring-black focus:border-black"
          />
        </div>
        
        <div>
          <label htmlFor="item-category" className="block text-sm font-medium text-gray-700">Item Category</label>
          <input
            type="text"
            id="item-category"
            className="mt-1 h-10 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm transition duration-150 ease-in-out focus:ring-2 focus:ring-black focus:border-black"
          />
        </div>
        
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            id="quantity"
            className="mt-1 h-10 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm transition duration-150 ease-in-out focus:ring-2 focus:ring-black focus:border-black"
          />
        </div>

        <div className="flex justify-start pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

