import { Services } from "../../components/Services";
import "./index.scss";

const CertificationData = {
    h1: "Ship Certificaion",
    s1: "Ensuring Compliance and Quality with Ships Certification",
    d1: "Tajjar Ul Bahr takes ship certification seriously to ensure your vessel operates at the highest standards of compliance and quality. Our dedicated team meticulously handles all aspects, from meeting regulatory requirements to administering surveys and inspections. With our expert guidance, your vessel remains fully certified, ready to sail with confidence and efficiency. Trust us to navigate the complexities of ship certification, leaving no room for compromise when it comes to your maritime success.",
    img: "insurance-image.png",
    h2: "Ship Certification Services:",
    s2: "Setting Course for Safety and Excellence",
    d2: "At Tajjar Ul Bahr, we prioritize ship certification to guarantee that your vessel operates at the pinnacle of compliance and quality. Our dedicated team leaves no stone unturned, handling all aspects of certification with meticulous care. We maintain compliance with international, regional, and national regulations, ensuring all certificates, licenses, and documentation remain valid and in order.Our streamlined process makes it easy and convenient to arrange necessary surveys, inspections, and audits, ensuring your ship's certificates and documents stay up-to-date and valid. Safety is paramount, and we conduct regular inspections to ensure your vessel is in optimal condition, fully adhering to IMO, Class, ISPS, MLC, and other regulatory requirements. With our expert guidance, your vessel remains fully certified and ready to sail with confidence and efficiency. We liaise with Class, Flag, and Shipping Authorities, handling all matters relating to ship certification and documentation. Trust us to navigate the complexities of ship certification, ensuring a reliable and high-performing vessel, leaving no room for compromise when it comes to your maritime success."
}

const ShipCertification = () => {
    return (
        <div>
        <Services data={CertificationData} />
    </div>
    );
}

export default ShipCertification;
