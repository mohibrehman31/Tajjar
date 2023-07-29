import "./Header.scss";
import { Logo } from "src/assets/Images";
import { RightArrow } from "src/assets/Icons";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  const login = false;
  const handlePortalNavigation = () => {
    login ? navigate("/User/Dashboard") : navigate("/Login");
  };
  return (
    <div className="header-container">
      <div className="inner-container">
        <div className="logo">
          <img src={Logo} alt="" onClick={() => navigate("/")} />
        </div>
        <div className="sections">
          <div className="section1" onClick={() => navigate("/")}>
            Home
          </div>
          <div className="section2" onClick={() => navigate("/AboutUs")}>
            About Us
          </div>
          <div className="section3" onClick={() => navigate("/ShipManagement")}>
            Ship Management
          </div>
          <div className="section4">Ship Agency</div>
        </div>
        <div className="portal-container" onClick={handlePortalNavigation}>
          Portal
          <img src={RightArrow} style={{ marginLeft: 10 }} />
        </div>
      </div>
    </div>
  );
};
