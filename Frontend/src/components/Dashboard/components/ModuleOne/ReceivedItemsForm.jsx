import React, { useState } from 'react';

export default function ReceivedItemsForm() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-[500px] max-h-[500px] overflow-y-auto p-4">
      <h2 className="text-2xl font-semibold mb-6">Update Item Quantity</h2>
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
          <label htmlFor="item-sku" className="block text-sm font-medium text-gray-700">Item SKU/Barcode</label>
          <input
            type="text"
            id="item-sku"
            className="mt-1 h-10 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm transition duration-150 ease-in-out focus:ring-2 focus:ring-black focus:border-black"
          />
        </div>
        
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(0, quantity - 1))}
              className="relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 ease-in-out"
            >
              -
            </button>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="h-10 focus:ring-black focus:border-black flex-1 block w-full rounded-none text-sm border-gray-300 text-center"
            />
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 ease-in-out"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex justify-start space-x-3 pt-4">
          <button
            type="button"
            className="px-4 py-2 bg-black text-white rounded-md shadow-sm text-sm font-medium hover:bg-gray-800 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Cancel
          </button>
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
