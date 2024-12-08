import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaBox, FaTruck, FaClipboardList, FaWarehouse, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Menu Toggle Button */}
      <button 
        onClick={toggleSidebar}
        className="fixed top-4 left-5 z-50 bg-black p-2 rounded-lg transition-all duration-300 hover:bg-gray-800"
      >
        <FaBars className="w-6 h-6 text-white" />
      </button>

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-20 bg-white border-r border-gray-200 transition-transform duration-300 z-40 ${
          isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center h-full pt-16">
          {/* Navigation Links */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="p-2 hover:bg-gray-100 rounded-lg">
              <FaHome className="w-6 h-6 text-gray-600" />
            </Link>

            <Link to="/stock-received" className="p-2 hover:bg-gray-100 rounded-lg">
              <FaBox className="w-6 h-6 text-gray-600" />
            </Link>

            <Link to="/pickingandpacking" className="p-2 hover:bg-gray-100 rounded-lg">
              <FaTruck className="w-6 h-6 text-gray-600" />
            </Link>

            <Link to="/dispatch-management" className="p-2 hover:bg-gray-100 rounded-lg">
              <FaClipboardList className="w-6 h-6 text-gray-600" />
            </Link>

            <Link to="/inventory" className="p-2 hover:bg-gray-100 rounded-lg">
              <FaWarehouse className="w-6 h-6 text-gray-600" />
            </Link>

            <Link to="/equipment-management" className="p-2 hover:bg-gray-100 rounded-lg">
              <FaCog className="w-6 h-6 text-gray-600" />
            </Link>
          </div>

          {/* Logout */}
          <div className="mt-auto mb-8">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <FaSignOutAlt className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

