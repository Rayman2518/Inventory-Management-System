import React from 'react';

export default function DelieveryStatus() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">


      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Delievery Status of Dispatched Orders</h2>
        
        <div className="mb-6">
          <h3 className="text-lg mb-4">Order's Information</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Order ID</th>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Customer Name</th>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Items</th>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Quantity</th>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Dispatch Date</th>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Update Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">12345</td>
                  <td className="border border-gray-300 p-2">Khizar Shahid</td>
                  <td className="border border-gray-300 p-2">Laptop</td>
                  <td className="border border-gray-300 p-2">2</td>
                  <td className="border border-gray-300 p-2">2024-11-23</td>
                  <td className="border border-gray-300 p-2">Status</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">12345</td>
                  <td className="border border-gray-300 p-2">Zaid Shahid</td>
                  <td className="border border-gray-300 p-2">Phone</td>
                  <td className="border border-gray-300 p-2">4</td>
                  <td className="border border-gray-300 p-2">2024-11-25</td>
                  <td className="border border-gray-300 p-2">Status</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <button className="px-6 py-2 bg-zinc-900 text-white rounded hover:bg-zinc-800">
          Save
        </button>
      </div>
    </div>
  );
}

