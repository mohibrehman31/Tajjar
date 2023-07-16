import "./Header.scss";
import { Logo } from "src/assets/Images";
import { RightArrow } from "src/assets/Icons";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <div className="inner-container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="sections">
          <div className="section1">Home</div>
          <div className="section2">About Us</div>
          <div className="section3">Ship Management</div>
          <div className="section4">Ship Agency</div>
        </div>
        <div
          className="portal-container"
          onClick={() => navigate("/User/Dashboard")}
        >
          Portal
          <img src={RightArrow} style={{ marginLeft: 10 }} />
        </div>
      </div>
    </div>
  );
};
