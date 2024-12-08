import React, { useState } from 'react';

export default function ScheduleMaintenance() {
  const [maintenanceSchedule, setMaintenanceSchedule] = useState({
    equipmentId: '',
    equipmentType: '',
    maintenanceType: '',
    scheduledDate: '',
    assignedTechnician: '',
    estimatedDuration: '',
    notes: ''
  });

  const [scheduledMaintenance, setScheduledMaintenance] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMaintenanceSchedule(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSchedule = {
      ...maintenanceSchedule,
      id: Date.now(),
      status: 'Scheduled',
      scheduledAt: new Date().toLocaleString()
    };
    setScheduledMaintenance(prev => [newSchedule, ...prev]);
    setMaintenanceSchedule({
      equipmentId: '',
      equipmentType: '',
      maintenanceType: '',
      scheduledDate: '',
      assignedTechnician: '',
      estimatedDuration: '',
      notes: ''
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Schedule Maintenance</h2>
        
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
                value={maintenanceSchedule.equipmentId}
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
                value={maintenanceSchedule.equipmentType}
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
                value={maintenanceSchedule.maintenanceType}
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
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="scheduledDate">
                Scheduled Date
              </label>
              <input
                type="date"
                id="scheduledDate"
                name="scheduledDate"
                value={maintenanceSchedule.scheduledDate}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="assignedTechnician">
                Assigned Technician
              </label>
              <input
                type="text"
                id="assignedTechnician"
                name="assignedTechnician"
                value={maintenanceSchedule.assignedTechnician}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="estimatedDuration">
                Estimated Duration (hours)
              </label>
              <input
                type="number"
                id="estimatedDuration"
                name="estimatedDuration"
                value={maintenanceSchedule.estimatedDuration}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                min="0"
                step="0.5"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="notes">
                Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                value={maintenanceSchedule.notes}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                rows="3"
              ></textarea>
            </div>
          </div>
          <button type="submit" className="px-6 py-2 bg-zinc-900 text-white rounded hover:bg-zinc-800">
            Schedule Maintenance
          </button>
        </form>

        <h3 className="text-xl font-semibold mb-4">Scheduled Maintenance</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Equipment ID</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Type</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Maintenance Type</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Scheduled Date</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Assigned Technician</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Estimated Duration</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {scheduledMaintenance.map((schedule) => (
                <tr key={schedule.id}>
                  <td className="border border-gray-300 p-2">{schedule.equipmentId}</td>
                  <td className="border border-gray-300 p-2">{schedule.equipmentType}</td>
                  <td className="border border-gray-300 p-2">{schedule.maintenanceType}</td>
                  <td className="border border-gray-300 p-2">{schedule.scheduledDate}</td>
                  <td className="border border-gray-300 p-2">{schedule.assignedTechnician}</td>
                  <td className="border border-gray-300 p-2">{schedule.estimatedDuration} hours</td>
                  <td className="border border-gray-300 p-2">{schedule.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

