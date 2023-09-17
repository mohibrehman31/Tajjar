import { FooterLogo, login } from "src/assets/Images";

import { Button, Checkbox, Input } from "antd";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import axiosApi from "src/utils/axios";
const Signup = () => {
  const navigation = useNavigate();
  const handleSignup = () => {
    const res = axiosApi.post("http://localhost:1337/api/auth/local", {
      name: "Mohib",
      number: "03362539861",
    });
    console.log("🚀 ~ file: index.tsx:14 ~ handleSignup ~ res:", res);
  };
  const onChange = () => {
    console.log("Checked");
  };
  const handleForget = () => {
    console.log("forget clicked");
    navigation("/Forget");
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
        <div className="main-signup-container">
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
            <div className="main">
              <div className="heading-main">Get started for FREE.</div>
              <div className="input-container">
                <Input className="input-name" placeholder="Your Name" />
                <Input
                  className="input-email"
                  placeholder="Your Business Email"
                />
                <Input
                  className="input-number"
                  placeholder="Your Phone Number"
                  type="number"
                />
              </div>
              <div className="checkbox-container">
                <Checkbox onChange={onChange}>
                  <span className="checkbox-text">
                    I confirm that I work at a Freight Forwarding company
                  </span>
                </Checkbox>
              </div>
              <div className="login-button">
                <Button onClick={handleSignup}>
                  <span
                    style={{
                      color: "white",
                      fontFamily: "Poppins",
                      fontWeight: 500,
                    }}
                  >
                    Signup
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
