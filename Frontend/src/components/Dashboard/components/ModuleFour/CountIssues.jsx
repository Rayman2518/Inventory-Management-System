import React, { useState } from 'react';

export default function CountIssues() {
  const [unresolvedIssues, setUnresolvedIssues] = useState([
    { id: 1, itemId: 'A001', itemName: 'Widget X', expected: 100, actual: 90, status: 'Unresolved' },
    { id: 2, itemId: 'B023', itemName: 'Gadget Y', expected: 50, actual: 55, status: 'Unresolved' },
    { id: 3, itemId: 'C105', itemName: 'Tool Z', expected: 75, actual: 70, status: 'Unresolved' },
  ]);

  const [resolvedIssues, setResolvedIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [resolution, setResolution] = useState('');

  const selectIssue = (issue) => {
    setSelectedIssue(issue);
    setResolution('');
  };

  const handleResolutionChange = (e) => {
    setResolution(e.target.value);
  };

  const resolveIssue = () => {
    if (selectedIssue && resolution) {
      const updatedUnresolved = unresolvedIssues.filter(issue => issue.id !== selectedIssue.id);
      const resolvedIssue = { ...selectedIssue, status: 'Resolved', resolution, resolvedAt: new Date().toLocaleString() };
      
      setUnresolvedIssues(updatedUnresolved);
      setResolvedIssues([resolvedIssue, ...resolvedIssues]);
      setSelectedIssue(null);
      setResolution('');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Resolve Count Issues</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Unresolved Issues</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2 bg-gray-50 text-left">Item ID</th>
                    <th className="border border-gray-300 p-2 bg-gray-50 text-left">Item Name</th>
                    <th className="border border-gray-300 p-2 bg-gray-50 text-left">Expected</th>
                    <th className="border border-gray-300 p-2 bg-gray-50 text-left">Actual</th>
                    <th className="border border-gray-300 p-2 bg-gray-50 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {unresolvedIssues.map((issue) => (
                    <tr key={issue.id}>
                      <td className="border border-gray-300 p-2">{issue.itemId}</td>
                      <td className="border border-gray-300 p-2">{issue.itemName}</td>
                      <td className="border border-gray-300 p-2">{issue.expected}</td>
                      <td className="border border-gray-300 p-2">{issue.actual}</td>
                      <td className="border border-gray-300 p-2">
                        <button
                          onClick={() => selectIssue(issue)}
                          className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
                        >
                          Investigate
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Resolve Issue</h3>
            {selectedIssue ? (
              <div className="space-y-4">
                <p><strong>Item:</strong> {selectedIssue.itemName} ({selectedIssue.itemId})</p>
                <p><strong>Discrepancy:</strong> Expected {selectedIssue.expected}, Actual {selectedIssue.actual}</p>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="resolution">
                    Resolution
                  </label>
                  <textarea
                    id="resolution"
                    value={resolution}
                    onChange={handleResolutionChange}
                    className="w-full p-2 bg-gray-200 rounded"
                    rows="3"
                    placeholder="Explain the resolution..."
                  ></textarea>
                </div>
                <button
                  onClick={resolveIssue}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Resolve Issue
                </button>
              </div>
            ) : (
              <p>Select an issue to resolve</p>
            )}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Resolved Issues</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Item ID</th>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Item Name</th>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Discrepancy</th>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Resolution</th>
                  <th className="border border-gray-300 p-2 bg-gray-50 text-left">Resolved At</th>
                </tr>
              </thead>
              <tbody>
                {resolvedIssues.map((issue) => (
                  <tr key={issue.id}>
                    <td className="border border-gray-300 p-2">{issue.itemId}</td>
                    <td className="border border-gray-300 p-2">{issue.itemName}</td>
                    <td className="border border-gray-300 p-2">Expected: {issue.expected}, Actual: {issue.actual}</td>
                    <td className="border border-gray-300 p-2">{issue.resolution}</td>
                    <td className="border border-gray-300 p-2">{issue.resolvedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

