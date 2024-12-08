import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard';
import StockReceived from './pages/StockReceived';
import PickingAndPacking from './pages/PickingAndPacking';
import DispatchManagement from './pages/DispatchManagement';
import Inventory from './pages/Inventory';
import EquipmentManagement from './pages/EquipmentManagement';

function App() {
  const location = useLocation();
  const isDashboard = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <SideBar />
      
      {/* Main Content */}
      <div className={`flex-1 ${isDashboard ? '' : 'p-2 sm:ml-16 md:ml-20'}`}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stock-received" element={<StockReceived />} />
          <Route path="/pickingandpacking" element={<PickingAndPacking />} />
          <Route path="/dispatch-management" element={<DispatchManagement />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/equipment-management" element={<EquipmentManagement />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

