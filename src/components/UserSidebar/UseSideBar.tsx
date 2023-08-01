import "./index.css";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentIcon from "@mui/icons-material/Payment";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import RequestPageOutlinedIcon from "@mui/icons-material/RequestPageOutlined";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

interface propType {
  breadcrumb: Dispatch<SetStateAction<string>>;
}

export default function UserSidebar({ breadcrumb }: propType) {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const changeTab = (tabId: number, page: string) => {
    setActiveTab(tabId);
    breadcrumb(page);
    navigate("/User/" + page);
  };

  return (
    <div className="sideBar">
      {/* <div style={{color: 'black'}}>
          <img src={FooterLogo} alt="" style={{backgroundColor: 'black', width: "100%"}} />
        </div> */}

      <div className="sideBarButtonGrid robotoFont">
        <div
          className="sideBarButton"
          onClick={() => changeTab(0, "Dashboard")}
          style={{ backgroundColor: activeTab === 0 ? "white" : "transparent" }}
        >
          <DashboardIcon />
          <Typography style={{ fontSize: 15, fontWeight: "bold" }}>
            Dashboard
          </Typography>
        </div>

        <div
          className="sideBarButton"
          onClick={() => changeTab(1, "Bids")}
          style={{ backgroundColor: activeTab === 1 ? "white" : "transparent" }}
        >
          <RequestPageOutlinedIcon />
          <Typography style={{ fontSize: 15, fontWeight: "bold" }}>
            Bids
          </Typography>
        </div>

        <div
          className="sideBarButton"
          onClick={() => changeTab(2, "Postings")}
          style={{ backgroundColor: activeTab === 2 ? "white" : "transparent" }}
        >
          <ArticleOutlinedIcon />
          <Typography style={{ fontSize: 15, fontWeight: "bold" }}>
            Postings
          </Typography>
        </div>

        <div
          className="sideBarButton"
          onClick={() => changeTab(3, "AddBids")}
          style={{ backgroundColor: activeTab === 3 ? "white" : "transparent" }}
        >
          <NoteAddOutlinedIcon />
          <Typography style={{ fontSize: 15, fontWeight: "bold" }}>
            Add Bids
          </Typography>
        </div>

        <div
          className="sideBarButton"
          onClick={() => changeTab(4, "Payments")}
          style={{ backgroundColor: activeTab === 4 ? "white" : "transparent" }}
        >
          <PaymentIcon />
          <Typography style={{ fontSize: 15, fontWeight: "bold" }}>
            Payments
          </Typography>
        </div>

        <div>
          <hr />
        </div>

        <div
          className="sideBarButton"
          onClick={() => changeTab(4, "Logout")}
          style={{ backgroundColor: activeTab === 5 ? "white" : "transparent" }}
        >
          <LogoutOutlinedIcon />
          <Typography style={{ fontSize: 15, fontWeight: "bold" }}>
            Logout
          </Typography>
        </div>
      </div>
    </div>
  );
}
