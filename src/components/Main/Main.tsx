import { Container, Interactions, Time, Image2 } from "src/assets/Images";
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
// import Testimonials from "src/components/Testimonials/Testimonials";
import TestimonialSlider from "src/components/TestimonialSlider/TestimonialSlider";
// import Testimonials from "src/components/Testimonials/Testimonials";
// import TabPreview from "../Tab/TabPreview/TabPreview";
import TabContainer from "../Tab/TabContainer/TabContainer";
import { Reveal } from "../Motion/Reveal";
import useFetch from "src/customHooks/useFetch";
export const Main = () => {
  const { loading, data, error } = useFetch(`http://localhost:1337/api/home`);
  console.log(loading, data, error);
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
    return (
      <div className="testimonials-container">
        <div className="heading-container">
          <h1 className="heading-content">Testimonials</h1>
        </div>
        <TestimonialSlider />
      </div>
    );
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Evolution of outdated logistics networks`,
      children: (
        <TabContainer
          heading="You need to develop more partnerships, and are tired of the
      outdated logistics network you see in the market?"
          t1="We are not only a list of freight forwarders"
          c1="Our search algorithm ranks the best companies first, so you can
      be the first in your country and get quotations from all our
      members."
          t2="Transparent validation system"
          c2="Have you ever wondered how your current logistics network
          validates their new members? In Parnity you can check all
          documents on the forwarder profile."
          t3="Technological platform"
          c3="A platform built with the most modern technological concepts so you 
          can spend less time finding the best partner for your forwarder."
          Image={Image2}
        />
      ),
    },
    {
      key: "2",
      label: `Find and be found by forwarders, but faster!`,
      children: (
        <TabContainer
          heading="Freight forwarders have an hectic schedule, the digital world came to help you to spend
          less time on simple tasks."
          t1="Human close support"
          c1="Get access to a key account manager to ask for help indications, or whatever you need to make 
          better partnerships."
          t2="Ultra simple system"
          c2="find your next partner in less than 3 clicks, find complete information about the partners,
          and get faster quotations."
          Image={Image2}
        />
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
            <Reveal motionType="Horizontal">
              <div className="image-container">
                <img src={Interactions} />
              </div>
            </Reveal>
            <div className="front-container">
              <div className="heading">{data?.Title}</div>
              <div className="subheading">
                <div className="heading1">
                  <img src={Time} className="subtext-image" />
                  <div className="text">{data?.SubTitle1}</div>
                </div>
                <div className="heading2">
                  <img src={Container} className="subtext-image" />
                  <div className="text">{data?.SubTitle2}</div>
                </div>
              </div>
              <div className="footer-button-container">Know More</div>
            </div>
          </div>
        </div>
        <Reveal motionType="Vertical">
          <div className="about">
            <div className="about-container">
              <div className="heading">About Tajjar</div>
              <span className="details">{data?.About}</span>
            </div>
          </div>
        </Reveal>
      </div>
      <ValuesContainer />
      <OurServicesContainer />
      <div className="carousel">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
      <TestimonialsContainer />
      <div className="partners-container">
        <div className="content"></div>
      </div>
    </>
  );
};
