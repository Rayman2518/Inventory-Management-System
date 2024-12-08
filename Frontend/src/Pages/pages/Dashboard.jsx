import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import StockReceived from './StockReceived'; 
import PickingAndPacking from './PickingAndPacking';
import DispatchManagement from './DispatchManagement';
import Inventory from './Inventory';
import EquipmentManagement from './EquipmentManagement';

export default function Dashboard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).toLowerCase();
  };

  return (
    <div className="flex w-full h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <div className="relative w-full h-full">
                {/* Background Image */}
                <img
                  src="/Images/1.jpg"
                  alt="Cold Sky"
                  className="absolute w-full h-full object-cover z-0"
                />
                {/* Overlay and Content */}
                <div className="absolute inset-0 bg-black/30 z-10" />
                <div className="relative z-20 h-full flex flex-col items-center justify-center text-white">
                  <h1 className="text-4xl md:text-8xl font-light mb-4">{formatTime(time)}</h1>
                  <p className="text-lg md:text-xl">15°C | Islamabad, Pakistan</p>
                </div>
              </div>
            }
          />

          {/* Module 1 */}
          <Route path="/stock-received" element={<StockReceived />} />
          <Route path="/pickingandpacking" element={<PickingAndPacking />} />
          <Route path="/dispatch-management" element={<DispatchManagement />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path ="/equipment-management" element={<EquipmentManagement />} />
        </Routes>
      </div>
    </div>
  );
}
