import "./Footer.scss";
import { FooterLogo } from "src/assets/Images";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="main-container">
        <div className="footer-first-container">
          <div className="footer-inner-container">
            <div className="footer-title-container">
              Unleashing Logistics Excellence
            </div>
            <div className="footer-button-container">Discover</div>
          </div>
        </div>
        <hr className="hairline" />
        <div className="footer-second-container">
          <div className="logo-container">
            <img src={FooterLogo} />
          </div>
          <div className="detail parnity-container">
            <div className="content">
              <div className="header">Parnity</div>
              <div className="inner-content">
                <div className="home">Home</div>
                <div className="about-us">About Us</div>
                <div className="shipmgmt">Ship Management</div>
                <div className="agency">Ship Agency</div>
                <div className="portal">Portal</div>
              </div>
            </div>
            <div className="detail parnity-container">
              <div className="content">
                <div className="header">Support</div>
                <div className="inner-content">
                  <div className="home">Help Center</div>
                  <div className="about-us">Blog</div>
                </div>
              </div>
            </div>
            <div className="detail parnity-container">
              <div className="content">
                <div className="header">Follow us</div>
                <div className="inner-content">
                  <div className="home">Facebook</div>
                  <div className="about-us">Instagram</div>
                  <div className="shipmgmt">Linkedin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-container">© Tajjar Ul Bahr 2023</div>
      </div>
    </div>
  );
};
