import React, { useState } from 'react';

export default function ReportDamages() {
  const [damageReport, setDamageReport] = useState({
    equipmentId: '',
    equipmentType: '',
    damageDescription: '',
    reporterName: '',
    reporterDepartment: '',
    dateObserved: '',
    severity: 'Low'
  });

  const [damageReports, setDamageReports] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDamageReport(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReport = {
      ...damageReport,
      id: Date.now(),
      reportedAt: new Date().toLocaleString(),
      status: 'Pending'
    };
    setDamageReports(prev => [newReport, ...prev]);
    setDamageReport({
      equipmentId: '',
      equipmentType: '',
      damageDescription: '',
      reporterName: '',
      reporterDepartment: '',
      dateObserved: '',
      severity: 'Low'
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">


      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Report Equipment Damages</h2>
        
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
                value={damageReport.equipmentId}
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
                value={damageReport.equipmentType}
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
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="damageDescription">
                Damage Description
              </label>
              <textarea
                id="damageDescription"
                name="damageDescription"
                value={damageReport.damageDescription}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                rows="3"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="reporterName">
                Reporter Name
              </label>
              <input
                type="text"
                id="reporterName"
                name="reporterName"
                value={damageReport.reporterName}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="reporterDepartment">
                Reporter Department
              </label>
              <input
                type="text"
                id="reporterDepartment"
                name="reporterDepartment"
                value={damageReport.reporterDepartment}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="dateObserved">
                Date Observed
              </label>
              <input
                type="date"
                id="dateObserved"
                name="dateObserved"
                value={damageReport.dateObserved}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="severity">
                Severity
              </label>
              <select
                id="severity"
                name="severity"
                value={damageReport.severity}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </select>
            </div>
          </div>
          <button type="submit" className="px-6 py-2 bg-zinc-900 text-white rounded hover:bg-zinc-800">
            Submit Damage Report
          </button>
        </form>

        <h3 className="text-xl font-semibold mb-4">Recent Damage Reports</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Equipment ID</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Type</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Damage Description</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Reporter</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Date Observed</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Severity</th>
                <th className="border border-gray-300 p-2 bg-gray-50 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {damageReports.map((report) => (
                <tr key={report.id}>
                  <td className="border border-gray-300 p-2">{report.equipmentId}</td>
                  <td className="border border-gray-300 p-2">{report.equipmentType}</td>
                  <td className="border border-gray-300 p-2">{report.damageDescription}</td>
                  <td className="border border-gray-300 p-2">{report.reporterName}</td>
                  <td className="border border-gray-300 p-2">{report.dateObserved}</td>
                  <td className="border border-gray-300 p-2">{report.severity}</td>
                  <td className="border border-gray-300 p-2">{report.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

