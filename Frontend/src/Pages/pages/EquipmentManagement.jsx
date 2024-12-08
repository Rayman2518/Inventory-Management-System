import React, { useState } from 'react';
import LogEquipmentUse from '../components/ModuleFive/LogEquipmentUse';
import ReplaceFaultyEquipment from '../components/ModuleFive/ReplaceFaultyEquipment';
import ReportDamages from '../components/ModuleFive/ReportDamages';
import ScheduleMaintenance from '../components/ModuleFive/ScheduleMaintenance';
import TrackMaintenanceLogs from '../components/ModuleFive/TrackMaintenanceLogs';

function EquipmentManagement() {
  const [selectedForm, setSelectedForm] = useState('log-equipment'); // Default to 'cycle-count'

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      {/* Navigation Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => setSelectedForm('log-equipment')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
            selectedForm === 'log-equipment'
              ? 'bg-black text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Log Equipment Use
        </button>

        <button
            onClick={() => setSelectedForm('replace-faulty')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
                selectedForm === 'replace-faulty'
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
        >
            Replace Faulty Equipment
        </button>

        <button 
            onClick={() => setSelectedForm('report-damages')} 
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
                selectedForm === 'report-damages' 
                    ? 'bg-black text-white' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
        >
            Report Damages
        </button>

        <button
            onClick={() => setSelectedForm('schedule-maintenance')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
                selectedForm === 'schedule-maintenance'
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
        >
            Schedule Maintenance
        </button>

        <button
            onClick={() => setSelectedForm('track-maintenance-logs')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
                selectedForm === 'track-maintenance-logs'
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
        >
            Track Maintenance Logs

        </button>


      </div>

      {/* Form Section */}
      <div className="mt-6">
        {selectedForm === 'log-equipment' && <LogEquipmentUse />}
        {selectedForm === 'replace-faulty' && <ReplaceFaultyEquipment />}
        {selectedForm === 'report-damages' && <ReportDamages />}
        {selectedForm === 'schedule-maintenance' && <ScheduleMaintenance />}
        {selectedForm === 'track-maintenance-logs' && <TrackMaintenanceLogs />}
        
      
      </div>
    </div>
  );
}

export default EquipmentManagement;
