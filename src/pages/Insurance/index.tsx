import Testimonials from "src/components/Testimonials/Testimonials";
import { Services } from "../../components/Services";
import "./index.scss";

const InsuranceData = {
    h1: "Insurance",
    s1: "Protecting Your Assets with Comprehensive Marine Insurance",
    d1: "Prioritize safety and protect assets with our comprehensive marine insurance solutions for vessels and cargo. Navigate confidently with us.",
    img: "insurance-image.png",
    h2: "Expert Insurance Services:",
    s2: "Safeguarding Your Vessel with Precision and Care",
    d2: "At our ship management services, we go above and beyond to ensure the comprehensive protection of your vessel through a range of insurance solutions. We liaise closely with the Principal to secure Hull & Machinery (H. & M.) and Protection & Indemnity (P. & I.) Club coverage, along with Loss of Hire (LOH), War Risk (WR), Kidnap & Ransom (K & R), and other refund covers. Our dedicated team diligently administers all necessary surveys and inspections to obtain cover notes and maintain policies in line with the vessel's trading requirements.In the event of claims, our priority remains firmly focused on the best interests of the Principal. We conduct thorough investigations, coordinate essential surveys and inspections, and meticulously document all relevant details to present a compelling claim. With us by your side, you can rest assured that your vessel's insurance matters are handled with precision, care, and utmost professionalism. Trust in our expertise to navigate through insurance complexities and protect your valuable maritime assets effectively."
}

const Insurance = () => {
    return (
        <div>
        <Services data={InsuranceData} />
        <div className="review-container">
            <Testimonials
            imageSrc="https://i0.wp.com/thatrandomagency.com/wp-content/uploads/2022/10/lauren_headshot2022.png?resize=640%2C640&ssl=1"
            name="Sarah Johnson"
            position=" MV Seafarer's Pride"
            review="Choosing Tajjar Ul Bahr’s Ship Management for our fleet's insurance needs was a game-changer. Their expertise in securing comprehensive War Risk and Kidnap & Ransom covers for our vessels gave us peace of mind during challenging voyages. Their team's support and personalized solutions have been invaluable to our business."
            />
            <Testimonials
            imageSrc="https://media.istockphoto.com/id/1362347349/photo/ship-captain-with-elegant-uniform.jpg?s=612x612&w=0&k=20&c=3nHBvipEAsOITfG6KXFuy16QFonwFNdhF-sOxd4ujdQ="
            name="Captain Michael Roberts"
            position=" MV Ocean Voyager"
            review="Tajjar Ul Bahr’s Ship Management's insurance services have been exceptional. They ensured we had top-notch Loss of Hire and other refund covers tailored to our vessel's trading requirements. When faced with a claim, their thorough investigations and prompt action made all the difference. It's a pleasure to have them as our insurance partners!"
            />
        </div>
    </div>
    );
}

export default Insurance;
