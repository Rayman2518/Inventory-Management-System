import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage";
import UserManagementPage from "./Pages/User-ManagementPage";
import ShowUsersPage from "./Pages/Show-UsersPage";
import AddInventoryPage from "./Pages/Add-InventoryPage";
import AddLocationPage from "./Pages/add-locationPage";
import ShowInventoryPage from "./Pages/Show-InventoryPage";
import InventoryLogsPage from "./pages/logs/Inventory-logsPage";
import SystemLogsPage from "./pages/logs/System-logsPage";
function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from root to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Dashboard route */}
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Users route */}
        <Route path="/users" element={<ShowUsersPage />} />
        <Route path="/users/add" element={<UserManagementPage />} />

        {/* Inentory Management Route */}
        <Route path="/inventory" element={<ShowInventoryPage />} />
        <Route path="/inventory/add" element={<AddInventoryPage />} />
        <Route path="/inventory/location/add" element={<AddLocationPage />} />

        {/* Logs routes */}
        <Route path="/logs/inventory" element={<InventoryLogsPage />} />
        <Route path="/logs/system" element={<SystemLogsPage />} />

        {/* 404 route - should be last */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
