import { Layout, Space } from "antd";
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { Header } from "src/components/Header/Header";
import Images from "src/assets/Images/Images.svg"
import Top from "src/assets/Images/Top.svg";
import ContactBg from "src/assets/Images/ContactBg.svg";
import "./index.scss";
import { Footer } from "src/components/Footer/Footer";
import TeamMemberCard from "src/components/TeamMember";

const text = (
    <p style={{ paddingLeft: 24 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
    </p>
);

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Why do our clients choose us?',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'How do we deliver?',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'Do we provide shipping insurance?',
    children: <p>{text}</p>,
  },
  {
    key: '4',
    label: 'How do we calculate expenses?',
    children: <p>{text}</p>,
  },
];

const teamMembers = [
    {
      imageSrc: "src/assets/Images/Founder.jpg",
      name: "John Doe",
      position: "Founder",
    },
    {
      imageSrc: "src/assets/Images/ceo.jpg",
      name: "Jane Smith",
      position: "CEO",
    },
    {
      imageSrc: "src/assets/Images/vp.jpg",
      name: "Michael Johnson",
      position: "Vice President",
    },
    {
      imageSrc: "src/assets/Images/CTO.jpg",
      name: "Emily Williams",
      position: "CTO",
    },
    {
      imageSrc: "src/assets/Images/CFO.jpg",
      name: "David Brown",
      position: "CFO",
    },
    {
      imageSrc: "src/assets/Images/CSO.jpg",
      name: "Sophia Lee",
      position: "CSO",
    },
  ];

export const AboutUs = () => (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout
        style={{
          backgroundImage: `url(${Top})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div>
          <Header />
          <div className="main-heading">
            <div className="heading">About Us </div>
              <p className="part1">Tajjar-ul-Bahr</p>
              <p className="part2">Your Trusted Freight Transport Partner</p>
            <div className="subheading">Delivering Excellence in Logistics Solutions since 1966, with Global Reach and Unmatched Ocean Consolidation Services</div>
          </div>
          <div className="image-container">
            <img src={Images} alt="Sample" />
          </div>
          <div className="section">
            <div className="leftside">
            <div className="heading"> Our History</div>
            <div className="subheading">Building a Legacy of Excellence since 1966</div>
            </div>
            <div className="content">
            Since our inception in 1966, Tajjar-ul-Bahr (Private) Limited has been diligently crafting a legacy of excellence in the logistics and freight forwarding industry in Pakistan. With a strong focus on operational excellence, safety, and customer satisfaction, we have established ourselves as one of the top logistics companies in the country. Over the years, our diverse Ship Management Services and comprehensive logistics solutions have navigated countless maritime ventures, ensuring smooth sailing for our valued customers. Our commitment to quality, certifications, and a global network has allowed us to build a reputation of reliability and trust in the industry, making us a preferred choice for tailored logistics needs.            </div>
          </div>
          <div className="section">
            <div className="leftside">
            <div className="heading"> Mission & Vision</div>
            <div className="subheading">Our Purpose and Aspiration</div>
            </div>
            <div className="content">
            Tajjar-ul-Bahr (Private) Limited aims to be Pakistan's leading integrated logistics and freight forwarding provider. Established in 1966, we boast operational excellence and reliability. With offices in major cities, we offer tailored logistics solutions backed by skilled professionals. Our ISO 9001:2015 certification and global accreditations showcase our commitment to quality. We aspire to expand our global network, offering seamless and cost-effective freight solutions while exceeding customer expectations. Our unmatched Ocean Consolidation services and proactive approach further enhance our position as a top logistics company in Pakistan.            </div>
          </div>
          <div className="team-section">
            <div className="leftside">
            <div className="heading"> Our Team</div>
            <div className="subheading">The Driving Force Behind Our Success</div>
            </div>
            {teamMembers.slice(0, 2).map((member) => (
              <TeamMemberCard
                key={member.name}
                imageSrc={member.imageSrc}
                name={member.name}
                position={member.position}
              />
            ))}
          </div>
          <div className="team-row">
          {teamMembers.slice(2).map((member) => (
            <TeamMemberCard
              key={member.name}
              imageSrc={member.imageSrc}
              name={member.name}
              position={member.position}
            />
          ))}
          </div>
          <div className="contact-section">
            <div className="leftside">
            <div className="heading"> Contact Us</div>
            <div className="subheading">Let Us Help You to Find a Solution That Meets Your Needs!</div>
            <div className="content">We're here to assist you in finding the perfect solution that meets your needs. Please take a moment to provide us with some information so that we can better understand how we can help you.</div>
            </div>
            <div className="rightside">
            <div className="contactimage">
            <img src={ContactBg} alt="Sample" />
          </div>
          <div className="form-card">
                <div className="form">
                    <div className="formheading">Contact Us</div>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="submit" value="Submit" />
                    </div>
            </div>
            </div>
            </div>
            <div className="faq-section">
                <div className="leftside">
                <div className="heading">FAQs</div>
                <div className="subheading">Frequently Asked Questions</div>
                </div>
                <Collapse
                size="large"
                items={items}
                bordered={false}
                defaultActiveKey={['1']}
                style={{ width: 750 }}
                />
            </div>
          <Footer />
        </div>
      </Layout>
    </Space>
  );
  