import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage";
import UserManagementPage from "./Pages/User-Management/User-ManagementPage";
import ShowUsersPage from "./Pages/User-Management/Show-UsersPage";
import AddInventoryPage from "./Pages/Inventory-Management/Add-InventoryPage";
import AddLocationPage from "./Pages/Inventory-Management/Add-locationPage";
import ShowInventoryPage from "./Pages/Inventory-Management/Show-InventoryPage";
import InventoryLogsPage from "./pages/logs/Inventory-logsPage";
import SystemLogsPage from "./pages/logs/System-logsPage";
import AnalyticsPage from './Pages/AnalyticsPage'

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

        {/* Analytics route */}
        <Route path="/analytics" element={<AnalyticsPage />} />

        {/* 404 route - should be last */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
