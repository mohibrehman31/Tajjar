import { Layout, Space } from "antd";
import { Header } from "src/components/Header/Header";
import { Footer } from "src/components/Footer/Footer";
import { HomeCurve } from "src/assets/Images";
import "./index.css";
import { shipManagement } from "src/assets/Images";
import ShipManagementCard from "src/components/ShipManagementCard";
import cards from "./gridData";

export const ShipManagement = () => (
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

        <div className="ship-management-content">
          <div className="ship-management-head">
            <div>
              <div className="column-1">
                <text
                  style={{
                    color: "#242A43",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "60px",
                  }}
                >
                  Ship Management
                </text>
                <br />
                <span
                  style={{
                    color: "#00DA9F",
                    fontSize: "40px",
                    lineHeight: "50px",
                  }}
                >
                  Navigating{" "}
                </span>
                <text
                  style={{
                    color: "#2D3194",
                    fontSize: "40px",
                    lineHeight: "50px",
                  }}
                >
                  Excellence:
                </text>
                <br />
                <text
                  style={{
                    color: "#242A43",
                    fontSize: "40px",
                    fontWeight: "300",
                    lineHeight: "50px",
                  }}
                >
                  Explore Exceptional Ship
                </text>
                <br />
                <text
                  style={{
                    color: "#242A43",
                    fontSize: "40px",
                    fontWeight: "300",
                    lineHeight: "50px",
                  }}
                >
                  Management Services
                </text>
                <p
                  style={{
                    color: "#424242",
                    fontSize: "15px",
                    fontWeight: "300",
                    marginTop: "10px",
                    lineHeight: "20px",
                  }}
                >
                  TAJJAR-UL-BAHR's primary focus is to deliver cost-effective
                  and top-notch ship management services, ensuring exceptional
                  performance while adhering to Class rules and shipping
                  regulations. The company works closely with the Principal to
                  fulfill their specific needs, employing efficient performance
                  monitoring and cost management. The utmost priority is given
                  to the Principal's interests, all while maintaining compliance
                  with the Management Agreement.
                </p>
              </div>
            </div>

            <div>
              <img
                src={shipManagement}
                className="ship-management-head-image"
              />
            </div>
          </div>

          <div className="ship-management-body">
            <div className="row-1">
              <div style={{ width: "50%", alignItems: "start" }}>
                <text
                  style={{
                    color: "#0340AD",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "60px",
                  }}
                >
                  What's Included?
                </text>
                <br />
                <text
                  style={{
                    color: "black",
                    fontSize: "35px",
                    fontWeight: "400",
                    lineHeight: "45px",
                  }}
                >
                  Unleashing Our Full Ship Management Services!
                </text>
              </div>

              <div style={{ width: "70%" }}>
                <p
                  style={{
                    color: "#424242",
                    fontSize: "15px",
                    fontWeight: "300",
                    lineHeight: "20px",
                  }}
                >
                  Embark on a journey of operational excellence with our diverse
                  Ship Management Services. From skilled crewing and streamlined
                  maintenance to efficient communication and marine consultancy,
                  we offer comprehensive solutions tailored to your logistics
                  needs. With a focus on safety, certifications, and offshore
                  support, we navigate the seas of success together, ensuring
                  smooth sailing for your maritime ventures
                </p>
              </div>
            </div>

            <div className="row-2-1">
              {cards
                .slice(0, 8)
                .map(
                  (
                    card: { img: string; title: string; description: string },
                    index: number
                  ) => (
                    <div key={index}>
                      <ShipManagementCard
                        data={{
                          img: card.img,
                          title: card.title,
                          description: card.description,
                        }}
                      />
                    </div>
                  )
                )}
            </div>
            <div className="row-2-2">
              {cards
                .slice(-3)
                .map(
                  (
                    card: { img: string; title: string; description: string },
                    index: number
                  ) => (
                    <div key={index}>
                      <ShipManagementCard
                        data={{
                          img: card.img,
                          title: card.title,
                          description: card.description,
                        }}
                      />
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  </Space>
);
