import { Layout, Space } from "antd";
import { Header } from "src/components/Header/Header";
import { Footer } from "src/components/Footer/Footer";
import { servicesLeftImg, servicesRightImg } from "src/assets/Images";
import { HomeCurve } from "src/assets/Images";
import "./index.css";
// import { Reveal } from "../Motion/Reveal";
// import { Rotate } from "../Motion/Rotate";

interface propType {
  data: {
    h1: string;
    s1: string;
    d1: string;
    img: string;
    h2: string;
    s2: string;
    d2: string;
  };
}
export const Services = ({ data }: propType) => {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout>
        <div
          style={{
            backgroundImage: `url(${HomeCurve})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <Header />
          <div className="services-page">
            <div className="services-header">
              {/* <Rotate> */}
              <img
                src={servicesLeftImg}
                style={{
                  objectFit: "contain",
                  position: "absolute",
                  transform: "translate(-440px, -70px)",
                }}
              />
              {/* </Rotate> */}
              {/* <Rotate> */}
              <img
                src={servicesRightImg}
                style={{
                  objectFit: "contain",
                  position: "absolute",
                  transform: "translate(480px)",
                }}
              />
              {/* </Rotate> */}

              <text
                style={{
                  color: "#00DA9F",
                  fontSize: "40px",
                  fontWeight: "600",
                  lineHeight: "60px",
                }}
              >
                {data.h1}
              </text>
              <text
                style={{
                  color: "#201C1D",
                  fontSize: "65px",
                  fontWeight: "600",
                  lineHeight: "73px",
                  width: "1100px",
                  transform: "translate(0px)",
                }}
              >
                {data.s1}
              </text>
              <p
                style={{
                  color: "#424242",
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "20px",
                  width: "750px",
                  transform: "translate(0px)",
                  marginTop: "5px",
                }}
              >
                {data.d1}
              </p>
            </div>
            <div className="services-image-container">
              <img
                src={`/src/assets/Images/${data.img}`}
                style={{ maxWidth: "50%" }}
              />
            </div>

            <div className="services-footer">
              <div className="footer-text">
                <text
                  style={{
                    color: "#0083E0",
                    fontSize: "40px",
                    fontWeight: "400",
                    lineHeight: "20px",
                  }}
                >
                  {data.h2}
                </text>
                <br />
                <text
                  style={{
                    color: "#000",
                    fontSize: "40px",
                    fontWeight: "400",
                    lineHeight: "60px",
                  }}
                >
                  {data.s2}
                </text>
                <p
                  style={{
                    color: "#424242",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "25px",
                  }}
                >
                  {data.d2}
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Layout>
    </Space>
  );
};
