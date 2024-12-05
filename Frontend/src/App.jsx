import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from root to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
        {/* Dashboard route */}
        <Route path="/dashboard" element={<Dashboard />} />
        
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

