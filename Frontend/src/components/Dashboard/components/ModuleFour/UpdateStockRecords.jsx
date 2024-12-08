import React, { useState } from 'react';

export default function UpdateStockRecords() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [newQuantity, setNewQuantity] = useState('');
  const [recentUpdates, setRecentUpdates] = useState([]);

  // Mock inventory data
  const inventory = [
    { id: 1, name: 'Widget A', currentQuantity: 100 },
    { id: 2, name: 'Gadget B', currentQuantity: 50 },
    { id: 3, name: 'Tool C', currentQuantity: 75 },
  ];

  const searchItem = () => {
    const item = inventory.find(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toString() === searchTerm
    );
    setSelectedItem(item || null);
    setNewQuantity('');
  };

  const updateStock = () => {
    if (selectedItem && newQuantity !== '') {
      const updatedQuantity = parseInt(newQuantity, 10);
      const update = {
        id: selectedItem.id,
        name: selectedItem.name,
        oldQuantity: selectedItem.currentQuantity,
        newQuantity: updatedQuantity,
        timestamp: new Date().toLocaleString()
      };
      setRecentUpdates(prev => [update, ...prev]);
      setSelectedItem(prev => ({ ...prev, currentQuantity: updatedQuantity }));
      setNewQuantity('');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Update Stock Records</h2>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="searchTerm">
            Search Item (by ID or Name)
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="searchTerm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow p-2 bg-gray-200 rounded"
            />
            <button 
              onClick={searchItem}
              className="px-4 py-2 bg-zinc-900 text-white rounded hover:bg-zinc-800">
              Search
            </button>
          </div>
        </div>

        {selectedItem && (
          <div className="mb-6 p-4 border border-gray-300 rounded">
            <h3 className="text-lg font-semibold mb-2">Selected Item</h3>
            <p>ID: {selectedItem.id}</p>
            <p>Name: {selectedItem.name}</p>
            <p>Current Quantity: {selectedItem.currentQuantity}</p>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="newQuantity">
                New Quantity
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  id="newQuantity"
                  value={newQuantity}
                  onChange={(e) => setNewQuantity(e.target.value)}
                  className="flex-grow p-2 bg-gray-200 rounded"
                />
                <button 
                  onClick={updateStock}
                  className="px-4 py-2 bg-zinc-900 text-white rounded hover:bg-zinc-800"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}

        <h3 className="text-xl font-semibold mb-4">Recent Stock Updates</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Item ID</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Item Name</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Old Quantity</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">New Quantity</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {recentUpdates.map((update, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{update.id}</td>
                  <td className="border border-gray-300 p-2">{update.name}</td>
                  <td className="border border-gray-300 p-2">{update.oldQuantity}</td>
                  <td className="border border-gray-300 p-2">{update.newQuantity}</td>
                  <td className="border border-gray-300 p-2">{update.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

