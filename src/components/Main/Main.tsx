import { Container, Interactions, Time } from "src/assets/Images";
import type { TabsProps } from "antd";
import { Tabs } from "antd";
import "./Main.scss";
// import "./LandingPage.scss";
import PetalImg from "src/components/PetalImg/PetalImg";
import img1 from "src/assets/Images/img1.jpg";
import img2 from "src/assets/Images/img2.jpg";
import img3 from "src/assets/Images/img3.jpg";
import img4 from "src/assets/Images/img4.jpg";
import img5 from "src/assets/Images/img5.jpg";
import img6 from "src/assets/Images/img6.jpg";
import img7 from "src/assets/Images/img7.jpg";
import img8 from "src/assets/Images/img8.jpg";
import Swipeslider from "src/components/SwiperSlider/Swiper";
import TestimonialSlider from "src/components/TestimonialSlider/TestimonialSlider";
export const Main = () => {
  const ValuesContainer = () => {
    return (
      <div className="values-container">
        <div className="main-heading">
          <div className="subheading-container">
            <h1 className="subheading">Unveiling Our Core Principles</h1>
          </div>
          <div className="heading-container">
            <h1 className="heading-content">
              Discover Tajjar's Intrinsic Values That Drive Our Commitment to
              Success
            </h1>
          </div>
        </div>
        <div className="slider">
          <Swipeslider />
        </div>
      </div>
    );
  };

  const OurServicesContainer = () => {
    return (
      <div className="service-container">
        <div className="heading-container">
          <h1 className="heading-content">Our Services</h1>
        </div>
        <div className="subheading-container">
          <h1 className="subheading">
            Transform your logistic processes with Tajar!
          </h1>
        </div>
        <div className="images-container">
          <div className="row">
            <PetalImg src={img1} className="top-left-corner-zero" />
            <PetalImg src={img2} className="top-right-corner-zero" />
            <PetalImg src={img3} className="bottom-left-corner-zero" />
            <PetalImg src={img4} className="bottom-right-corner-zero" />
          </div>
          <div className="row">
            <PetalImg src={img5} className="top-left-corner-zero" />
            <PetalImg src={img6} className="top-right-corner-zero" />
            <PetalImg src={img7} className="bottom-left-corner-zero" />
            <PetalImg src={img8} className="bottom-right-corner-zero" />
          </div>
        </div>
      </div>
    );
  };

  const TestimonialsContainer = () => {
    return(
      <div className = "testimonials-container">
      <div className = "heading-container">
        <h1 className = "heading-content">
          Testimonials
        </h1>
      </div>
      <TestimonialSlider/>
    </div>
    )
  }

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Evolution of outdated logistics networks`,
    },
    {
      key: "2",
      label: `Find and be found by forwarders, but faster!`,
      children: (
        <div
          style={{
            width: "85vw",
            height: "75vh",
            display: "flex",
            flex: 1,
          }}
        >
          <div style={{ flex: 2 }}>
            <div
              style={{
                marginBlock: 20,
                marginInline: 20,
                width: 450,
                height: 90,
                fontSize: 20,
              }}
            >
              You need to develop more partnerships, and are tired of the
              outdated logistics network you see in the market?
            </div>
            <div
              style={{
                marginBlock: 10,
                marginInline: 20,
                width: 450,
                height: 140,
              }}
            >
              <div style={{ fontSize: 18, fontWeight: "bold" }}>
                We are not only a list of freight forwarders
              </div>
              <div style={{ fontSize: 17 }}>
                Our search algorithm ranks the best companies first, so you can
                be the first in your country and get quotations from all our
                members.
              </div>
            </div>
            <div
              style={{
                marginBlock: 10,
                marginInline: 20,
                width: 450,
                height: 140,
              }}
            >
              <div style={{ fontSize: 18, fontWeight: "bold" }}>
                Transparent validation system
              </div>
              <div style={{ fontSize: 17 }}>
                Have you ever wondered how your current logistics network
                validates their new members? In Parnity you can check all
                documents on the forwarder profile.
              </div>
            </div>
            <div
              style={{
                marginBlock: 10,
                marginInline: 20,
                width: 450,
                height: 140,
              }}
            >
              <div style={{ fontSize: 18, fontWeight: "bold" }}>
                Technological platform
              </div>
              <div style={{ fontSize: 17 }}>
                A platform built with the most modern technological concepts so
                you can spend less time finding the best partner for your
                forwarder.
              </div>
            </div>
          </div>
          <div style={{ flex: 3 }}></div>
        </div>
      ),
    },
    {
      key: "3",
      label: `Manage your forwarder partners`,
    },
  ];
  return (
    <>
      <div className="root-container">
        <div className="main-container">
          <div className="content-container">
            <div className="image-container">
              <img src={Interactions} />
            </div>
            <div className="front-container">
              <div className="heading">
                Seamless Logistics Solutions,
                <br /> Unmatched Worldwide
              </div>
              <div className="subheading">
                <div className="heading1">
                  <img src={Time} className="subtext-image" />
                  <div className="text">
                    Efficiency and Reliability: Ensuring Smooth Deliveries for
                    <br /> Every Shipment
                  </div>
                </div>
                <div className="heading2">
                  <img src={Container} className="subtext-image" />
                  <div className="text">
                    Tailored Logistics Services: Unlocking Your Success through
                    <br /> Customized Solutions
                  </div>
                </div>
              </div>
              <div className="footer-button-container">Know More</div>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="heading">About Tajjar</div>
          <span className="details">
            Established in 1966, Tajjar-ul-Bahr (Private) Limited is a leading
            logistics and freight forwarding company in Pakistan. With a
            headquarters in Karachi and branch offices in five major cities
            across the country, we boast a strong global network to provide
            comprehensive logistics services and cutting-edge solutions tailored
            to our customers' needs. At Tajjar-ul-Bahr, operational excellence
            is our foundation, as we continuously monitor performance and
            service delivery through well-documented standard operating
            procedures (SOPs). Our commitment to quality is reflected in our ISO
            9001:2015 certification and various esteemed national and
            international accreditations. Our dedicated and experienced teams
            are trained to deliver tailor-made logistics solutions, going above
            and beyond to exceed expectations. With in-depth product knowledge
            and extensive market experience, we strive to provide cost-effective
            freight solutions while maintaining the highest standards of service
            and quality.
          </span>
        </div>
      </div>
      <ValuesContainer />
      <OurServicesContainer />
      <div className="carousel">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
      <TestimonialsContainer/>
      <div className="partners-container"></div>
    </>
  );
};
