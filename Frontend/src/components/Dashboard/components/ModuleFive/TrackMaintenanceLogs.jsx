import React, { useState } from 'react';

export default function TrackMaintenanceLogs() {
  const [maintenanceLog, setMaintenanceLog] = useState({
    equipmentId: '',
    equipmentType: '',
    maintenanceType: '',
    technicianName: '',
    description: '',
    startDate: '',
    endDate: '',
    cost: ''
  });

  const [maintenanceLogs, setMaintenanceLogs] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMaintenanceLog(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLog = {
      ...maintenanceLog,
      id: Date.now(),
      loggedAt: new Date().toLocaleString()
    };
    setMaintenanceLogs(prev => [newLog, ...prev]);
    setMaintenanceLog({
      equipmentId: '',
      equipmentType: '',
      maintenanceType: '',
      technicianName: '',
      description: '',
      startDate: '',
      endDate: '',
      cost: ''
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">


      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Track Maintenance Logs</h2>
        
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
                value={maintenanceLog.equipmentId}
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
                value={maintenanceLog.equipmentType}
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
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="maintenanceType">
                Maintenance Type
              </label>
              <select
                id="maintenanceType"
                name="maintenanceType"
                value={maintenanceLog.maintenanceType}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              >
                <option value="">Select Maintenance Type</option>
                <option value="Routine">Routine</option>
                <option value="Preventive">Preventive</option>
                <option value="Corrective">Corrective</option>
                <option value="Emergency">Emergency</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="technicianName">
                Technician Name
              </label>
              <input
                type="text"
                id="technicianName"
                name="technicianName"
                value={maintenanceLog.technicianName}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="description">
                Maintenance Description
              </label>
              <textarea
                id="description"
                name="description"
                value={maintenanceLog.description}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                rows="3"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="startDate">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={maintenanceLog.startDate}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="endDate">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={maintenanceLog.endDate}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="cost">
                Maintenance Cost
              </label>
              <input
                type="number"
                id="cost"
                name="cost"
                value={maintenanceLog.cost}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                step="0.01"
                min="0"
                required
              />
            </div>
          </div>
          <button type="submit" className="px-6 py-2 bg-zinc-900 text-white rounded hover:bg-zinc-800">
            Log Maintenance
          </button>
        </form>

        <h3 className="text-xl font-semibold mb-4">Recent Maintenance Logs</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Equipment ID</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Type</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Maintenance Type</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Technician</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Start Date</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">End Date</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Cost</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Logged At</th>
              </tr>
            </thead>
            <tbody>
              {maintenanceLogs.map((log) => (
                <tr key={log.id}>
                  <td className="border border-gray-300 p-2">{log.equipmentId}</td>
                  <td className="border border-gray-300 p-2">{log.equipmentType}</td>
                  <td className="border border-gray-300 p-2">{log.maintenanceType}</td>
                  <td className="border border-gray-300 p-2">{log.technicianName}</td>
                  <td className="border border-gray-300 p-2">{log.startDate}</td>
                  <td className="border border-gray-300 p-2">{log.endDate}</td>
                  <td className="border border-gray-300 p-2">${parseFloat(log.cost).toFixed(2)}</td>
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

