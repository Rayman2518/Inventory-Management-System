import React, { useState } from 'react';

export default function ReplaceFaultyEquipment() {
  const [replacementRecord, setReplacementRecord] = useState({
    oldEquipmentId: '',
    oldEquipmentType: '',
    newEquipmentId: '',
    newEquipmentType: '',
    replacementDate: '',
    replacementReason: '',
    replacedBy: '',
    cost: ''
  });

  const [replacementRecords, setReplacementRecords] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReplacementRecord(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      ...replacementRecord,
      id: Date.now(),
      recordedAt: new Date().toLocaleString()
    };
    setReplacementRecords(prev => [newRecord, ...prev]);
    setReplacementRecord({
      oldEquipmentId: '',
      oldEquipmentType: '',
      newEquipmentId: '',
      newEquipmentType: '',
      replacementDate: '',
      replacementReason: '',
      replacedBy: '',
      cost: ''
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Replace Faulty Equipment</h2>
        
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="oldEquipmentId">
                Old Equipment ID
              </label>
              <input
                type="text"
                id="oldEquipmentId"
                name="oldEquipmentId"
                value={replacementRecord.oldEquipmentId}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="oldEquipmentType">
                Old Equipment Type
              </label>
              <select
                id="oldEquipmentType"
                name="oldEquipmentType"
                value={replacementRecord.oldEquipmentType}
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
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="newEquipmentId">
                New Equipment ID
              </label>
              <input
                type="text"
                id="newEquipmentId"
                name="newEquipmentId"
                value={replacementRecord.newEquipmentId}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="newEquipmentType">
                New Equipment Type
              </label>
              <select
                id="newEquipmentType"
                name="newEquipmentType"
                value={replacementRecord.newEquipmentType}
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
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="replacementDate">
                Replacement Date
              </label>
              <input
                type="date"
                id="replacementDate"
                name="replacementDate"
                value={replacementRecord.replacementDate}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="replacedBy">
                Replaced By
              </label>
              <input
                type="text"
                id="replacedBy"
                name="replacedBy"
                value={replacementRecord.replacedBy}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="cost">
                Replacement Cost
              </label>
              <input
                type="number"
                id="cost"
                name="cost"
                value={replacementRecord.cost}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                step="0.01"
                min="0"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="replacementReason">
                Replacement Reason
              </label>
              <textarea
                id="replacementReason"
                name="replacementReason"
                value={replacementRecord.replacementReason}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                rows="3"
                required
              ></textarea>
            </div>
          </div>
          <button type="submit" className="px-6 py-2 bg-zinc-900 text-white rounded hover:bg-zinc-800">
            Record Replacement
          </button>
        </form>

        <h3 className="text-xl font-semibold mb-4">Recent Equipment Replacements</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Old Equipment ID</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">New Equipment ID</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Equipment Type</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Replacement Date</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Replaced By</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Cost</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Recorded At</th>
              </tr>
            </thead>
            <tbody>
              {replacementRecords.map((record) => (
                <tr key={record.id}>
                  <td className="border border-gray-300 p-2">{record.oldEquipmentId}</td>
                  <td className="border border-gray-300 p-2">{record.newEquipmentId}</td>
                  <td className="border border-gray-300 p-2">{record.newEquipmentType}</td>
                  <td className="border border-gray-300 p-2">{record.replacementDate}</td>
                  <td className="border border-gray-300 p-2">{record.replacedBy}</td>
                  <td className="border border-gray-300 p-2">${parseFloat(record.cost).toFixed(2)}</td>
                  <td className="border border-gray-300 p-2">{record.recordedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

