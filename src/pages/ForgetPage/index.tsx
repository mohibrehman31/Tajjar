import { FooterLogo, login } from "src/assets/Images";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Input, Tooltip } from "antd";
import "./index.scss";
import { useNavigate } from "react-router-dom";
const Forget = () => {
  const navigation = useNavigate();
  const handleLogin = () => {
    console.log("Login Clicked");
  };
  const handleBack = () => {
    navigation("/");
  };
  return (
    <div
      style={{
        backgroundImage: `url(${login})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="main-forget-container">
          <div className="container1">
            <div className="image-container">
              <img
                src={FooterLogo}
                style={{ width: 300, height: 400, objectFit: "none" }}
              />
              <span className="text">
                Start using technology as your best partner
              </span>
              <div className="button">Signup Free</div>
            </div>
          </div>
          <div className="container2">
            <div className="heading">
              <span style={{ marginTop: 4 }}>Don't Have An Account?</span>
              <div className="button">
                <span className="button-text">Get Started</span>
              </div>
            </div>
            <div className="main">
              <div className="heading-main">Reset your password</div>
              <div className="heading-main-2">
                Put your email below to receive the instructions and get
                <b />a new password:
              </div>
              <div className="input-container">
                <Input className="input-user" placeholder="Business Email" />
              </div>
              <div className="login-button">
                <Button onClick={handleLogin}>
                  <span
                    style={{
                      color: "white",
                      fontFamily: "Poppins",
                      fontWeight: 500,
                    }}
                  >
                    Reset Password
                  </span>
                </Button>
              </div>
              <div className="forget">
                <span className="forget-text" onClick={handleBack}>
                  Back To Home
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forget;
