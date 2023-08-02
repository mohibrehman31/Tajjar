import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import User from "./pages/User";
import "antd/dist/reset.css";
// import { MainLayout } from "./components/Layout/Layout";
import { ShipManagement } from "./pages/ShipManagement";
import { Services } from "./components/Services";
// import { AboutUs } from "./pages/About Us";
import crewingData from "./Data";
// import Insurance from "./pages/Insurance";
import ShipCertification from "./pages/Ship Certification";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/User/*" element={<User />} />
          <Route path="/" element={<ShipCertification />} />
          <Route path="/ShipManagement" element={<ShipManagement />} />
          <Route path="/Services" element={<Services data={crewingData} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
