import React, { useState } from 'react';

export default function RecordShipments() {
  const [shipments, setShipments] = useState([]);
  const [currentShipment, setCurrentShipment] = useState({
    shipmentId: '',
    itemName: '',
    quantity: '',
    destination: '',
    dispatchDate: '',
    carrierName: '',
    trackingNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentShipment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShipments((prev) => [...prev, currentShipment]);
    setCurrentShipment({
      shipmentId: '',
      itemName: '',
      quantity: '',
      destination: '',
      dispatchDate: '',
      carrierName: '',
      trackingNumber: ''
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Record Outgoing Shipments</h2>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="shipmentId">
                Shipment ID
              </label>
              <input
                type="text"
                id="shipmentId"
                name="shipmentId"
                placeholder="Enter shipment ID"
                value={currentShipment.shipmentId}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="itemName">
                Item Name
              </label>
              <input
                type="text"
                id="itemName"
                name="itemName"
                placeholder="Enter item name"
                value={currentShipment.itemName}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="quantity">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="Enter quantity"
                value={currentShipment.quantity}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="destination">
                Destination
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                placeholder="Enter destination address"
                value={currentShipment.destination}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="dispatchDate">
                Dispatch Date
              </label>
              <input
                type="date"
                id="dispatchDate"
                name="dispatchDate"
                placeholder="Select dispatch date"
                value={currentShipment.dispatchDate}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="carrierName">
                Carrier Name
              </label>
              <input
                type="text"
                id="carrierName"
                name="carrierName"
                placeholder="Enter carrier company name"
                value={currentShipment.carrierName}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="trackingNumber">
                Tracking Number
              </label>
              <input
                type="text"
                id="trackingNumber"
                name="trackingNumber"
                placeholder="Enter tracking number"
                value={currentShipment.trackingNumber}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
          </div>
          <button type="submit" className="px-6 py-2 bg-zinc-900 text-white rounded hover:bg-zinc-800">
            Record Shipment
          </button>
        </form>

        <h3 className="text-xl font-semibold mb-4">Recorded Shipments</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Shipment ID</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Item Name</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Quantity</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Destination</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Dispatch Date</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Carrier Name</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Tracking Number</th>
              </tr>
            </thead>
            <tbody>
              {shipments.map((shipment, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{shipment.shipmentId}</td>
                  <td className="border border-gray-300 p-2">{shipment.itemName}</td>
                  <td className="border border-gray-300 p-2">{shipment.quantity}</td>
                  <td className="border border-gray-300 p-2">{shipment.destination}</td>
                  <td className="border border-gray-300 p-2">{shipment.dispatchDate}</td>
                  <td className="border border-gray-300 p-2">{shipment.carrierName}</td>
                  <td className="border border-gray-300 p-2">{shipment.trackingNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
