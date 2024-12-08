import React, { useState } from 'react';
import CountIssues from '../components/ModuleFour/CountIssues';
import CountReports from '../components/ModuleFour/CountReports';
import CycleCounts from '../components/ModuleFour/CycleCounts';
import UpdateStockRecords from '../components/ModuleFour/UpdateStockRecords';
import RecordDiscrepancies from '../components/ModuleFour/RecordDiscrepancies';

function Inventory() {
  const [selectedForm, setSelectedForm] = useState('cycle-count'); // Default to 'cycle-count'

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      {/* Navigation Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => setSelectedForm('cycle-count')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
            selectedForm === 'cycle-count'
              ? 'bg-black text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Perform Cycle Counts
        </button>

        <button
          onClick={() => setSelectedForm('record-discrepancies')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
            selectedForm === 'record-discrepancies'
              ? 'bg-black text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Record Discrepancies
        </button>

        <button
          onClick={() => setSelectedForm('update-stock-records')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
            selectedForm === 'update-stock-records'
              ? 'bg-black text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Update Stock Records
        </button>

  
        <button
          onClick={() => setSelectedForm('count-reports')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
            selectedForm === 'count-reports'
              ? 'bg-black text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Count Reports
        </button>

        <button
          onClick={() => setSelectedForm('count-issues')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
            selectedForm === 'count-issues'
              ? 'bg-black text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Count Issues
        </button>

      </div>

      {/* Form Section */}
      <div className="mt-6">
        {selectedForm === 'cycle-count' && <CycleCounts />}
        {selectedForm === 'record-discrepancies' && <RecordDiscrepancies />}
        {selectedForm === 'update-stock-records' && <UpdateStockRecords />}
        {selectedForm === 'count-reports' && <CountReports />}
        {selectedForm === 'count-issues' && <CountIssues />}
        
      
      </div>
    </div>
  );
}

export default Inventory;
