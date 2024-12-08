import React, { useState } from 'react';
import ItemsConfirmed from '../components/ModuleTwo/ItemsConfirmed';
import PickItems from '../components/ModuleTwo/PickItems';
import MarkOrders from '../components/ModuleTwo/MarkOrders';
import PackingErrors from '../components/ModuleTwo/PackingErrors';
import PrintSlips from '../components/ModuleTwo/PrintSlips';

function PickingAndPacking() {
    const [selectedForm, setSelectedForm] = useState('confirm'); // Default to 'scan'

    return (
        <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
            {/* Navigation Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">

            <button 
                    onClick={() => setSelectedForm('pick')} 
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
                        selectedForm === 'pick' 
                            ? 'bg-black text-white' 
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                >
                    Pick Items
                </button>

                <button 
                    onClick={() => setSelectedForm('confirm')} 
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
                        selectedForm === 'confirm' 
                            ? 'bg-black text-white' 
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                >
                    Confirm Items
                </button>

                <button 
                    onClick={() => setSelectedForm('mark')} 
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
                        selectedForm === 'mark' 
                            ? 'bg-black text-white' 
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                >
                    Mark Orders
                </button>
                <button 
                    onClick={() => setSelectedForm('errors')} 
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
                        selectedForm === 'errors' 
                            ? 'bg-black text-white' 
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                >
                    Packing Errors
                </button>
                <button 
                    onClick={() => setSelectedForm('print')} 
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
                        selectedForm === 'print' 
                            ? 'bg-black text-white' 
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                >
                    Print Slips
                </button>
            </div>

            {/* Form */}
            {selectedForm === 'confirm' && <ItemsConfirmed />}
            {selectedForm === 'pick' && <PickItems />}
            {selectedForm === 'mark' && <MarkOrders />}
            {selectedForm === 'errors' && <PackingErrors />}
            {selectedForm === 'print' && <PrintSlips />}
        </div>
    );
}

export default PickingAndPacking;
