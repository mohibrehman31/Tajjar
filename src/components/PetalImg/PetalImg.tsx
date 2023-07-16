import "./PetalImg.scss";

const PetalImg = ({ src, className }: any) => (
  <div className={`petal-img ${className}`}>
    <img src={src} alt="Petal" />
  </div>
);

export default PetalImg;
