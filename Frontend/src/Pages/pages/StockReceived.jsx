import React, { useState } from 'react';
import ReceivedItemsForm from '../components/ModuleOne/ReceivedItemsForm';
import NotifyManagerForm from '../components/ModuleOne/NotifyManagerForm';
import UpdateStockForm from '../components/ModuleOne/UpdateStockForm';
import SupplierInfoForm from '../components/ModuleOne/SupplierInfoForm';
import BarCodeScanner from '../components/ModuleOne/BarCodeScanner';

export default function StockReceived() {
  const [selectedForm, setSelectedForm] = useState('scan'); // Default to scan

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      {/* Navigation Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button 
          onClick={() => setSelectedForm('scan')} 
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
            selectedForm === 'scan' 
              ? 'bg-black text-white' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Scan Barcode
        </button>
        <button 
          onClick={() => setSelectedForm('received')} 
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
            selectedForm === 'received' 
              ? 'bg-black text-white' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Received Items
        </button>
        <button 
          onClick={() => setSelectedForm('supplier')} 
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
            selectedForm === 'supplier' 
              ? 'bg-black text-white' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Supplier Info
        </button>
        <button 
          onClick={() => setSelectedForm('update')} 
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
            selectedForm === 'update' 
              ? 'bg-black text-white' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Update Stock Level
        </button>
        <button 
          onClick={() => setSelectedForm('notify')} 
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ease-in-out ${
            selectedForm === 'notify' 
              ? 'bg-black text-white' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Notify Manager
        </button>
      </div>

      {/* Render selected form */}
      <div className="max-w-5xl bg-white rounded-lg shadow-md p-6 md:p-8">
        {selectedForm === 'scan' && <BarCodeScanner />}
        {selectedForm === 'received' && <ReceivedItemsForm />}
        {selectedForm === 'supplier' && <SupplierInfoForm />}
        {selectedForm === 'update' && <UpdateStockForm />}
        {selectedForm === 'notify' && <NotifyManagerForm />}
      </div>
    </div>
  );
}
