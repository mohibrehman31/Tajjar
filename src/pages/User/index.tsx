import UserSidebar from "../../components/UserSidebar/UseSideBar";
import "./index.css";
import { useState } from "react";
import { sidebar } from "src/assets/Images";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Bids from "./Bids";
import Payments from "./Payments";
import AddBids from "./AddBids";
import Postings from "./Postings";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import SubmitPosting from "./SubmitPosting";

export default function User() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [page, setPage] = useState("Dashboard");
  return (
    <div className="UserPage">
      <div className={`leftSide ${sidebarOpen ? "" : "hide"}`}>
        <UserSidebar breadcrumb={setPage} />
      </div>

      <div className="rightSide">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            onClick={() => setSidebarOpen(!sidebarOpen)}
            src={sidebar}
            className={`sideBarIcon ${sidebarOpen ? "" : "sideBarIconRotate"}`}
          />
          <Breadcrumb
            style={{ paddingLeft: 12 }}
            items={[
              {
                href: "/",
                title: <HomeOutlined />,
              },
              {
                href: "",
                title: (
                  <>
                    <UserOutlined />
                    <span>Portal</span>
                  </>
                ),
              },
              {
                title: page,
              },
            ]}
          />
        </div>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Bids" element={<Bids />} />
          <Route path="/Payments" element={<Payments />} />
          <Route path="/AddBids" element={<AddBids />} />
          <Route path="/Postings" element={<Postings />} />
          <Route path="/SubmitPosting" element={<SubmitPosting />} />
        </Routes>
      </div>
    </div>
  );
}
