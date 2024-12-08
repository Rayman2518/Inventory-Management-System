import React, { useState } from 'react';

export default function ScheduleDispatches() {
  const [dispatchDate, setDispatchDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Schedule Shipments</h2>
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-4">Shipment Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="shipmentId">
                Shipment Number/ID
              </label>
              <input
                type="text"
                id="shipmentId"
                className="w-full p-2 bg-gray-200 rounded"
                placeholder="Enter shipment ID"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="recipientName">
                Recipient's Name/Company Name
              </label>
              <input
                type="text"
                id="recipientName"
                className="w-full p-2 bg-gray-200 rounded"
                placeholder="Enter recipient's name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="shipmentDate">
                Date of Shipment
              </label>
              <input
                type="date"
                id="shipmentDate"
                className="w-full p-2 bg-gray-200 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="recipientAddress">
                Recipient's Address
              </label>
              <input
                type="text"
                id="recipientAddress"
                className="w-full p-2 bg-gray-200 rounded"
                placeholder="Enter recipient's address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="senderName">
                Sender's Name/Company Name
              </label>
              <input
                type="text"
                id="senderName"
                className="w-full p-2 bg-gray-200 rounded"
                placeholder="Enter sender's name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="senderAddress">
                Sender's Address
              </label>
              <input
                type="text"
                id="senderAddress"
                className="w-full p-2 bg-gray-200 rounded"
                placeholder="Enter sender's address"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="dispatchDate">
              Select Dispatch Date
            </label>
            <input
              type="date"
              id="dispatchDate"
              className="w-full md:w-64 p-2 bg-gray-200 rounded"
              value={dispatchDate}
              onChange={(e) => setDispatchDate(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="mt-8 px-6 py-2 bg-zinc-900 text-white rounded hover:bg-zinc-800"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

