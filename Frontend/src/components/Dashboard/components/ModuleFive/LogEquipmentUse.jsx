import React, { useState } from 'react';

export default function LogEquipmentUse() {
  const [equipmentUse, setEquipmentUse] = useState({
    equipmentId: '',
    equipmentType: '',
    operator: '',
    startTime: '',
    endTime: '',
    purpose: ''
  });

  const [usageLogs, setUsageLogs] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEquipmentUse(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLog = {
      ...equipmentUse,
      id: Date.now(),
      loggedAt: new Date().toLocaleString()
    };
    setUsageLogs(prev => [newLog, ...prev]);
    setEquipmentUse({
      equipmentId: '',
      equipmentType: '',
      operator: '',
      startTime: '',
      endTime: '',
      purpose: ''
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">


      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Log Equipment Use</h2>
        
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="equipmentId">
                Equipment ID
              </label>
              <input
                type="text"
                id="equipmentId"
                name="equipmentId"
                value={equipmentUse.equipmentId}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="equipmentType">
                Equipment Type
              </label>
              <select
                id="equipmentType"
                name="equipmentType"
                value={equipmentUse.equipmentType}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              >
                <option value="">Select Equipment Type</option>
                <option value="Forklift">Forklift</option>
                <option value="Scanner">Scanner</option>
                <option value="Pallet Jack">Pallet Jack</option>
                <option value="Conveyor Belt">Conveyor Belt</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="operator">
                Operator Name
              </label>
              <input
                type="text"
                id="operator"
                name="operator"
                value={equipmentUse.operator}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="startTime">
                Start Time
              </label>
              <input
                type="datetime-local"
                id="startTime"
                name="startTime"
                value={equipmentUse.startTime}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="endTime">
                End Time
              </label>
              <input
                type="datetime-local"
                id="endTime"
                name="endTime"
                value={equipmentUse.endTime}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="purpose">
                Purpose of Use
              </label>
              <input
                type="text"
                id="purpose"
                name="purpose"
                value={equipmentUse.purpose}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
          </div>
          <button type="submit" className="px-6 py-2 bg-zinc-900 text-white rounded hover:bg-zinc-800">
            Log Equipment Use
          </button>
        </form>

        <h3 className="text-xl font-semibold mb-4">Recent Equipment Usage Logs</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Equipment ID</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Type</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Operator</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Start Time</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">End Time</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Purpose</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Logged At</th>
              </tr>
            </thead>
            <tbody>
              {usageLogs.map((log) => (
                <tr key={log.id}>
                  <td className="border border-gray-300 p-2">{log.equipmentId}</td>
                  <td className="border border-gray-300 p-2">{log.equipmentType}</td>
                  <td className="border border-gray-300 p-2">{log.operator}</td>
                  <td className="border border-gray-300 p-2">{new Date(log.startTime).toLocaleString()}</td>
                  <td className="border border-gray-300 p-2">{new Date(log.endTime).toLocaleString()}</td>
                  <td className="border border-gray-300 p-2">{log.purpose}</td>
                  <td className="border border-gray-300 p-2">{log.loggedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

