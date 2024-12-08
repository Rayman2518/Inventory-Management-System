import React from 'react';

export default function NotifyManagerForm() {
  return (
    <div className="min-h-[500px] max-h-[500px] overflow-y-auto p-4">
      <h2 className="text-2xl font-semibold mb-6">Report Discrepancies to Manager</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="item-id" className="block text-sm font-medium text-gray-700">Item ID</label>
            <input type="text" id="item-id" className="mt-1 h-10 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm transition duration-150 ease-in-out focus:ring-2 focus:ring-black focus:border-black" />
          </div>
          <div>
            <label htmlFor="item-category" className="block text-sm font-medium text-gray-700">Item category</label>
            <input type="text" id="item-category" className="mt-1 h-10 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm transition duration-150 ease-in-out focus:ring-2 focus:ring-black focus:border-black" />
          </div>
          <div>
            <label htmlFor="item-name" className="block text-sm font-medium text-gray-700">Item name</label>
            <input type="text" id="item-name" className="mt-1 h-10 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm transition duration-150 ease-in-out focus:ring-2 focus:ring-black focus:border-black" />
          </div>
          <div>
            <label htmlFor="manager-name" className="block text-sm font-medium text-gray-700">Reporting Manager Name</label>
            <input type="text" id="manager-name" className="mt-1 h-10 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm transition duration-150 ease-in-out focus:ring-2 focus:ring-black focus:border-black" />
          </div>
        </div>
        <div>
          <label htmlFor="discrepancies" className="block text-sm font-medium text-gray-700">Discrepancies (if any)</label>
          <textarea id="discrepancies" rows="3" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm transition duration-150 ease-in-out focus:ring-2 focus:ring-black focus:border-black"></textarea>
        </div>
        <div className="flex justify-start">
          <button type="submit" className="px-6 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

