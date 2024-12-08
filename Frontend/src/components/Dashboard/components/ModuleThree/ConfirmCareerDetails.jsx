import React from 'react';

export default function ConfirmCarrierDetails() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">


      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Carrier Details</h2>
        
        <div className="mb-6">
          <h3 className="text-lg mb-4">Order's Information</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Shipment ID</th>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Shipment Date</th>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Carrier Name</th>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Carrier Contact</th>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Vehicle/Flight Details</th>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">12345</td>
                  <td className="border border-gray-300 p-2">2024-12-29</td>
                  <td className="border border-gray-300 p-2">TCS</td>
                  <td className="border border-gray-300 p-2">0300-6251617</td>
                  <td className="border border-gray-300 p-2">V-99021, From ISB to LHR</td>
                  <td className="border border-gray-300 p-2">Dispatched</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">12345</td>
                  <td className="border border-gray-300 p-2">2025-02-17</td>
                  <td className="border border-gray-300 p-2">Leapord</td>
                  <td className="border border-gray-300 p-2">0316-6251531</td>
                  <td className="border border-gray-300 p-2">F-99021, From ISB to LHR</td>
                  <td className="border border-gray-300 p-2">Dispatched</td>
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
