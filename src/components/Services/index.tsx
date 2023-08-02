import { Layout, Space } from "antd";
//@ts-ignore
import { Header } from "src/components/Header/Header";
//@ts-ignore
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
          {/* <Header /> */}
          <div className="services-page">
            <div className="services-header">
              {/* <Rotate> */}
              <img
                src={servicesLeftImg}
                style={{
                  objectFit: "contain",
                  position: "absolute",
                  transform: "translate(-44rem, -7rem)",
                  height: "25rem",
                  width: "25rem",
                }}
              />
              {/* </Rotate> */}
              {/* <Rotate> */}
              <img
                src={servicesRightImg}
                style={{
                  objectFit: "contain",
                  position: "absolute",
                  transform: "translate(48rem)",
                  height: "25rem",
                  width: "25rem",
                }}
              />
              {/* </Rotate> */}

              <text
                style={{
                  color: "#00DA9F",
                  fontSize: "4rem",
                  fontWeight: "600",
                  lineHeight: "6rem",
                }}
              >
                {data.h1}
              </text>
              <text
                style={{
                  color: "#201C1D",
                  fontSize: "6rem",
                  fontWeight: "600",
                  lineHeight: "1",
                  width: "110rem",
                  transform: "translate(0rem)",
                }}
              >
                {data.s1}
              </text>
              <p
                style={{
                  color: "#424242",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  lineHeight: "2rem",
                  width: "75rem",
                  transform: "translate(0rem)",
                  marginTop: "0.5rem",
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
                    fontSize: "4rem",
                    fontWeight: "400",
                    lineHeight: "2rem",
                  }}
                >
                  {data.h2}
                </text>
                <br />
                <text
                  style={{
                    color: "#000",
                    fontSize: "4rem",
                    fontWeight: "400",
                    lineHeight: "6rem",
                  }}
                >
                  {data.s2}
                </text>
                <p
                  style={{
                    color: "#424242",
                    fontSize: "1.6rem",
                    fontWeight: "400",
                    lineHeight: "2.5rem",
                  }}
                >
                  {data.d2}
                </p>
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </Layout>
    </Space>
  );
};