import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import UserManagement from './Pages/User-Management';
import ShowUsers from './Pages/Show-Users'

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from root to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
        {/* Dashboard route */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Users route */}
        <Route path="/users" element={<ShowUsers />} />
        <Route path="/users/add" element={<UserManagement />} />
        
        {/* Add more routes as needed */}
        {/* <Route path="/users" element={<Users />} /> */}
        {/* <Route path="/inventory" element={<Inventory />} /> */}
        
        {/* 404 route - should be last */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

