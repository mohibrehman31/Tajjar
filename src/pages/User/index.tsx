import UserSidebar from "../../components/UserSidebar";
import "./index.css";
import { useState } from "react";
import sidebar from "src/assets/sidebar.png";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Bids from "./Bids";

export default function User() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="UserPage">
      <div className={`leftSide ${sidebarOpen ? "" : "hide"}`}>
        <UserSidebar />
      </div>

      <div className="rightSide">
        <img
          onClick={() => setSidebarOpen(!sidebarOpen)}
          src={sidebar}
          className={`sideBarIcon ${sidebarOpen ? "" : "sideBarIconRotate"}`}
        />
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Bids" element={<Bids />} />
        </Routes>
      </div>
    </div>
  );
}
