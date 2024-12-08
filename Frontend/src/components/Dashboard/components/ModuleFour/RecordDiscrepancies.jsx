import React, { useState } from 'react';

export default function RecordDiscrepancies() {
  const [discrepancies, setDiscrepancies] = useState([]);
  const [newDiscrepancy, setNewDiscrepancy] = useState({
    itemId: '',
    itemName: '',
    expectedQuantity: '',
    actualQuantity: '',
    reason: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDiscrepancy(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addDiscrepancy = (e) => {
    e.preventDefault();
    setDiscrepancies(prev => [...prev, { ...newDiscrepancy, id: Date.now() }]);
    setNewDiscrepancy({
      itemId: '',
      itemName: '',
      expectedQuantity: '',
      actualQuantity: '',
      reason: ''
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Record Discrepancies</h2>
        
        <form onSubmit={addDiscrepancy} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="itemId">
                Item ID
              </label>
              <input
                type="text"
                id="itemId"
                name="itemId"
                value={newDiscrepancy.itemId}
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
                value={newDiscrepancy.itemName}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="expectedQuantity">
                Expected Quantity
              </label>
              <input
                type="number"
                id="expectedQuantity"
                name="expectedQuantity"
                value={newDiscrepancy.expectedQuantity}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="actualQuantity">
                Actual Quantity
              </label>
              <input
                type="number"
                id="actualQuantity"
                name="actualQuantity"
                value={newDiscrepancy.actualQuantity}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="reason">
              Reason for Discrepancy
            </label>
            <textarea
              id="reason"
              name="reason"
              value={newDiscrepancy.reason}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-200 rounded"
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" className="px-6 py-2 bg-zinc-900 text-white rounded hover:bg-zinc-800">
            Add Discrepancy
          </button>
        </form>

        <h3 className="text-xl font-semibold mb-4">Recorded Discrepancies</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Item ID</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Item Name</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Expected Quantity</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Actual Quantity</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Reason</th>
              </tr>
            </thead>
            <tbody>
              {discrepancies.map((discrepancy) => (
                <tr key={discrepancy.id}>
                  <td className="border border-gray-300 p-2">{discrepancy.itemId}</td>
                  <td className="border border-gray-300 p-2">{discrepancy.itemName}</td>
                  <td className="border border-gray-300 p-2">{discrepancy.expectedQuantity}</td>
                  <td className="border border-gray-300 p-2">{discrepancy.actualQuantity}</td>
                  <td className="border border-gray-300 p-2">{discrepancy.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

