import React, { useState } from 'react';

export default function CycleCounts() {
  const [countSession, setCountSession] = useState(null);
  const [items, setItems] = useState([]);
  const [countedItems, setCountedItems] = useState({});

  const initiateCount = () => {
    // In a real application, this would fetch items from an API
    const mockItems = [
      { id: 1, name: 'Widget A', expectedQuantity: 100 },
      { id: 2, name: 'Gadget B', expectedQuantity: 50 },
      { id: 3, name: 'Tool C', expectedQuantity: 75 },
    ];
    setItems(mockItems);
    setCountSession(new Date().toISOString());
    setCountedItems({});
  };

  const handleCountChange = (itemId, count) => {
    setCountedItems(prev => ({
      ...prev,
      [itemId]: parseInt(count, 10)
    }));
  };

  const submitCount = () => {
    console.log('Count submitted:', { countSession, countedItems });
    // Here you would typically send this data to your backend
    setCountSession(null);
    setItems([]);
    setCountedItems({});
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Perform Cycle Counts</h2>
        
        {!countSession ? (
          <button
            onClick={initiateCount}
            className="px-6 py-2 bg-zinc-900 text-white rounded hover:bg-zinc-800"
          >
            Start New Cycle Count
          </button>
        ) : (
          <div>
            <h3 className="text-xl font-semibold mb-4">Current Count Session: {countSession}</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse mb-4">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2 bg-gray-50 text-left">Item Name</th>
                    <th className="border border-gray-300 p-2 bg-gray-50 text-left">Expected Quantity</th>
                    <th className="border border-gray-300 p-2 bg-gray-50 text-left">Counted Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => (
                    <tr key={item.id}>
                      <td className="border border-gray-300 p-2">{item.name}</td>
                      <td className="border border-gray-300 p-2">{item.expectedQuantity}</td>
                      <td className="border border-gray-300 p-2">
                        <input
                          type="number"
                          value={countedItems[item.id] || ''}
                          onChange={(e) => handleCountChange(item.id, e.target.value)}
                          className="w-full p-1 bg-gray-100 rounded"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              onClick={submitCount}
              className="px-6 py-2 bg-zinc-900 text-white rounded hover:bg-zinc-800"
            >
              Submit Count
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

