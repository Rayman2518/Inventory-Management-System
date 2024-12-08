import React, { useState } from 'react';
import ConfirmCareerDetails from '../components/ModuleThree/ConfirmCareerDetails';
import DelieveryStatus from '../components/ModuleThree/DelieveryStatus';
import NotifyCustomers from '../components/ModuleThree/NotifyCustomers';
import RecordShipments from '../components/ModuleThree/RecordShipments';
import ScheduleDispatches from '../components/ModuleThree/ScheduleDispatches';

function DispatchManagement() {
    const [selectedForm, setSelectedForm] = useState('schedule'); // Default to 'confirm'

    return (
        <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
            {/* Navigation Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">

            <button
                    onClick={() => setSelectedForm('schedule')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
                        selectedForm === 'schedule'
                            ? 'bg-black text-white'
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                >
                    Schedule Dispatches
                </button>

                <button
                    onClick={() => setSelectedForm('confirm')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
                        selectedForm === 'confirm'
                            ? 'bg-black text-white'
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                >
                Career Details
                </button>


                <button
                    onClick={() => setSelectedForm('record')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
                        selectedForm === 'record'
                            ? 'bg-black text-white'
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                >
                    Record Shipments
                </button>


                <button
                    onClick={() => setSelectedForm('status')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
                        selectedForm === 'status'
                            ? 'bg-black text-white'
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                >
                    Delivery Status
                </button>
                <button
                    onClick={() => setSelectedForm('notify')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
                        selectedForm === 'notify'
                            ? 'bg-black text-white'
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                >
                    Notify Customers
                </button>
 

            </div>

            {/* Forms */}
            {selectedForm === 'confirm' && <ConfirmCareerDetails />}
            {selectedForm === 'status' && <DelieveryStatus />}
            {selectedForm === 'notify' && <NotifyCustomers />}
            {selectedForm === 'record' && <RecordShipments />}
            {selectedForm === 'schedule' && <ScheduleDispatches />}
        </div>
    );
}

export default DispatchManagement;
