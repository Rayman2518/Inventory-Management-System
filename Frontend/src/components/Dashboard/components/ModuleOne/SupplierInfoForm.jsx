import React from 'react';

export default function SupplierInfoForm() {
  return (
    <div className="min-h-[500px]">
      <h2 className="text-2xl font-semibold mb-6">Supplier Information</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="supplier-id" className="block text-sm font-medium text-gray-700">Supplier ID</label>
            <input type="text" id="supplier-id" className="mt-1 h-10 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm transition duration-150 ease-in-out focus:ring-2 focus:ring-black focus:border-black" />
          </div>
          <div>
            <label htmlFor="item-category" className="block text-sm font-medium text-gray-700">Item category</label>
            <input type="text" id="item-category" className="mt-1 h-10 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm transition duration-150 ease-in-out focus:ring-2 focus:ring-black focus:border-black" />
          </div>
          <div>
            <label htmlFor="supplier-name" className="block text-sm font-medium text-gray-700">Supplier Name</label>
            <input type="text" id="supplier-name" className="mt-1 h-10 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm transition duration-150 ease-in-out focus:ring-2 focus:ring-black focus:border-black" />
          </div>
          <div>
            <label htmlFor="quantity-supplied" className="block text-sm font-medium text-gray-700">Quantity Supplied</label>
            <input type="number" id="quantity-supplied" className="mt-1 h-10 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm transition duration-150 ease-in-out focus:ring-2 focus:ring-black focus:border-black" />
          </div>
        </div>
        <div>
          <label htmlFor="supplier-address" className="block text-sm font-medium text-gray-700">Supplier Address</label>
          <textarea id="supplier-address" rows="3" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm transition duration-150 ease-in-out focus:ring-2 focus:ring-black focus:border-black"></textarea>
        </div>
        <div>
          <label htmlFor="items-supplied" className="block text-sm font-medium text-gray-700">Items Supplied</label>
          <input type="text" id="items-supplied" className="mt-1 h-10 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm transition duration-150 ease-in-out focus:ring-2 focus:ring-black focus:border-black" />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="px-6 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

