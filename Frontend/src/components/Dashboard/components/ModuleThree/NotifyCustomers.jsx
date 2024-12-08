import React, { useState } from 'react';

export default function NotifyCustomers() {
  const [formData, setFormData] = useState({
    orderId: '',
    shipmentId: '',
    customerName: '',
    customerAddress: '',
    customerContact: '',
    itemName: '',
    quantity: '',
    dispatchDate: '',
    carrierName: '',
    carrierContact: '',
    receivingDate: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleSave = () => {
    console.log('Form saved:', formData);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Sending Notifications to Customers</h2>

        <div className="mb-6">
          <h3 className="text-lg mb-4">Shipment Information</h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Order ID
                </label>
                <input
                  type="text"
                  placeholder="Enter Order ID"
                  className="w-full p-2 bg-gray-200 rounded"
                  value={formData.orderId}
                  onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Shipment number/ID
                </label>
                <input
                  type="text"
                  placeholder="Enter Shipment ID"
                  className="w-full p-2 bg-gray-200 rounded"
                  value={formData.shipmentId}
                  onChange={(e) => setFormData({ ...formData, shipmentId: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Customer's Name"
                  className="w-full p-2 bg-gray-200 rounded"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Address
                </label>
                <input
                  type="text"
                  placeholder="Enter Customer's Address"
                  className="w-full p-2 bg-gray-200 rounded"
                  value={formData.customerAddress}
                  onChange={(e) => setFormData({ ...formData, customerAddress: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Contact No
                </label>
                <input
                  type="tel"
                  placeholder="Enter Customer's Contact No"
                  className="w-full p-2 bg-gray-200 rounded"
                  value={formData.customerContact}
                  onChange={(e) => setFormData({ ...formData, customerContact: e.target.value })}
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Item Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Item Name"
                  className="w-full p-2 bg-gray-200 rounded"
                  value={formData.itemName}
                  onChange={(e) => setFormData({ ...formData, itemName: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  placeholder="Enter Quantity"
                  className="w-full p-2 bg-gray-200 rounded"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Item Dispatch Date
                </label>
                <input
                  type="date"
                  placeholder="Select Dispatch Date"
                  className="w-full p-2 bg-gray-200 rounded"
                  value={formData.dispatchDate}
                  onChange={(e) => setFormData({ ...formData, dispatchDate: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Carrier Company Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Carrier's Company Name"
                  className="w-full p-2 bg-gray-200 rounded"
                  value={formData.carrierName}
                  onChange={(e) => setFormData({ ...formData, carrierName: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Carrier Company Contact Info
                </label>
                <input
                  type="tel"
                  placeholder="Enter Carrier's Contact Info"
                  className="w-full p-2 bg-gray-200 rounded"
                  value={formData.carrierContact}
                  onChange={(e) => setFormData({ ...formData, carrierContact: e.target.value })}
                />
              </div>
            </div>

            {/* Full Width Fields */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Receiving Date
                </label>
                <input
                  type="date"
                  placeholder="Select Receiving Date"
                  className="w-full p-2 bg-gray-200 rounded"
                  value={formData.receivingDate}
                  onChange={(e) => setFormData({ ...formData, receivingDate: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Write Sending Message to Customer
                </label>
                <textarea
                  className="w-full p-2 bg-gray-200 rounded"
                  rows="3"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="md:col-span-2 flex gap-4">
              <button
                type="button"
                onClick={handleSave}
                className="px-6 py-2 bg-zinc-900 text-white rounded hover:bg-zinc-800"
              >
                Save
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-zinc-900 text-white rounded hover:bg-zinc-800"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
