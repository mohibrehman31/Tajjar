import { login } from "src/assets/Images";
import {
  InfoCircleOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  KeyOutlined,
} from "@ant-design/icons";
import { Button, Input, Tooltip } from "antd";
import "./index.scss";
const Login = () => {
  const handleLogin = () => {
    console.log("Login Clicked");
  };
  const handleForget = () => {
    console.log("forget clicked");
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
        <div className="main-container">
          <div className="container1"></div>
          <div className="container2">
            <div className="heading">
              <span>Don't Have An Account?</span>
              <div className="button">
                <span className="button-text">Get Started</span>
              </div>
            </div>
            <div className="main">
              <div className="heading-main">Good Evening, Welcome Back!</div>
              <div className="heading-main-2">
                Signin to your tajjar account here
              </div>
              <div className="input-container">
                <Input
                  className="input-user"
                  placeholder="Username"
                  prefix={<UserOutlined />}
                  suffix={
                    <Tooltip title="Extra information">
                      <InfoCircleOutlined
                        style={{ color: "rgba(0,0,0,.45)" }}
                      />
                    </Tooltip>
                  }
                />
                <Input.Password
                  className="input-password"
                  placeholder="Password"
                  prefix={<KeyOutlined style={{ objectFit: "contain" }} />}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </div>
              <div className="login-button">
                <Button onClick={handleLogin}>
                  <span style={{ color: "white" }}>Login</span>
                </Button>
              </div>
              <div className="forget">
                <span className="forget-text" onClick={handleForget}>
                  Forgot your Password?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
