import React, { useState } from 'react';

export default function CountReports() {
  const [reportParams, setReportParams] = useState({
    startDate: '',
    endDate: '',
    category: '',
  });
  const [generatedReport, setGeneratedReport] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReportParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateReport = (e) => {
    e.preventDefault();
    // In a real application, this would fetch data from an API
    const mockReport = {
      totalItems: 1000,
      itemsCounted: 950,
      discrepancies: 25,
      categories: {
        'Category A': { counted: 300, discrepancies: 10 },
        'Category B': { counted: 400, discrepancies: 8 },
        'Category C': { counted: 250, discrepancies: 7 },
      },
      topDiscrepancies: [
        { itemId: 'A001', itemName: 'Widget X', expected: 100, actual: 90 },
        { itemId: 'B023', itemName: 'Gadget Y', expected: 50, actual: 55 },
        { itemId: 'C105', itemName: 'Tool Z', expected: 75, actual: 70 },
      ]
    };
    setGeneratedReport(mockReport);
  };

  const exportReport = () => {
    // In a real application, this would generate and download a report file
    console.log('Exporting report:', generatedReport);
    alert('Report exported successfully!');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Generate Count Reports</h2>
        
        <form onSubmit={generateReport} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="startDate">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={reportParams.startDate}
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
                value={reportParams.endDate}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={reportParams.category}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 rounded"
              >
                <option value="">All Categories</option>
                <option value="A">Category A</option>
                <option value="B">Category B</option>
                <option value="C">Category C</option>
              </select>
            </div>
          </div>
          <button type="submit" className="px-6 py-2 bg-zinc-900 text-white rounded hover:bg-zinc-800">
            Generate Report
          </button>
        </form>

        {generatedReport && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Report Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 bg-gray-100 rounded">
                <p className="text-lg font-medium">Total Items</p>
                <p className="text-2xl font-bold">{generatedReport.totalItems}</p>
              </div>
              <div className="p-4 bg-gray-100 rounded">
                <p className="text-lg font-medium">Items Counted</p>
                <p className="text-2xl font-bold">{generatedReport.itemsCounted}</p>
              </div>
              <div className="p-4 bg-gray-100 rounded">
                <p className="text-lg font-medium">Discrepancies</p>
                <p className="text-2xl font-bold">{generatedReport.discrepancies}</p>
              </div>
            </div>

            <h4 className="text-lg font-semibold mb-2">Category Breakdown</h4>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2 bg-gray-50 text-left">Category</th>
                    <th className="border border-gray-300 p-2 bg-gray-50 text-left">Items Counted</th>
                    <th className="border border-gray-300 p-2 bg-gray-50 text-left">Discrepancies</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(generatedReport.categories).map(([category, data]) => (
                    <tr key={category}>
                      <td className="border border-gray-300 p-2">{category}</td>
                      <td className="border border-gray-300 p-2">{data.counted}</td>
                      <td className="border border-gray-300 p-2">{data.discrepancies}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h4 className="text-lg font-semibold mb-2">Top Discrepancies</h4>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2 bg-gray-50 text-left">Item ID</th>
                    <th className="border border-gray-300 p-2 bg-gray-50 text-left">Item Name</th>
                    <th className="border border-gray-300 p-2 bg-gray-50 text-left">Expected</th>
                    <th className="border border-gray-300 p-2 bg-gray-50 text-left">Actual</th>
                  </tr>
                </thead>
                <tbody>
                  {generatedReport.topDiscrepancies.map((item) => (
                    <tr key={item.itemId}>
                      <td className="border border-gray-300 p-2">{item.itemId}</td>
                      <td className="border border-gray-300 p-2">{item.itemName}</td>
                      <td className="border border-gray-300 p-2">{item.expected}</td>
                      <td className="border border-gray-300 p-2">{item.actual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button onClick={exportReport} className="px-6 py-2 bg-zinc-900 text-white rounded hover:bg-zinc-800">
              Export Report
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

