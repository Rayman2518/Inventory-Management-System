import React from 'react'

export default function MarkOrders() {
  return (
    
    <div className="p-6 bg-gray-100 min-h-screen">


      <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Orders Ready for Dispatch</h2>
      <div className="mb-6">
      <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr >
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Order ID</th>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Customer Name</th>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Items</th>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Quantity</th>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Dispatch Date</th>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Status</th>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Last Login</th>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr >
                  <td className="border border-gray-300 p-2">12345</td>
                  <td className="border border-gray-300 p-2">Khizar Shahid</td>
                  <td className="border border-gray-300 p-2">Laptop</td>
                  <td className="border border-gray-300 p-2">2</td>
                  <td className="border border-gray-300 p-2">2024-11-23</td>
                  <td className="border border-gray-300 p-2">Ready for Dispatch</td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2">
                  <button className="text-black hover:text-gray-800">
                  Print Slip
                    </button>
                  </td>
                </tr>
                <tr >
                  <td className="border border-gray-300 p-2">3467</td>
                  <td className="border border-gray-300 p-2">Zaid Shahid</td>
                  <td className="border border-gray-300 p-2">Phone</td>
                  <td className="border border-gray-300 p-2">3</td>
                  <td className="border border-gray-300 p-2">2024-09-12</td>
                  <td className="border border-gray-300 p-2">Ready for Dispatch</td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2">
                    <button className="text-black hover:text-gray-800">
                      Print Slip
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

