import { useState } from "react";

export default function PickItems() {
  const [items, setItems] = useState([]);  // Remove the TypeScript type annotation here
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem.trim()]);
      setNewItem("");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow max-w-4xl ">
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6">Pick Items for Orders</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-medium text-gray-700 mb-2">Add Items</h2>
            <div className="flex gap-2">
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Enter item name here"
                className="flex-1 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
              <button
                onClick={addItem}
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Add
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {items.map((item, index) => (
              <div key={index} className="bg-red-200 p-3 rounded-md text-center">
                {item}
              </div>
            ))}
          </div>

          {items.length > 0 && (
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
