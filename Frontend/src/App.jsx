import Sidebar from "./components/Dashboard/sidebar";
import WeatherDashboard from "./components/Dashboard/Weather-dashboard";
import "./styles/weather-animations.css";

const App = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <WeatherDashboard />
    </div>
  );
};

export default App;
