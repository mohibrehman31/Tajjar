import "./PetalImg.scss";

interface Props {
  src: any;
  className: any;
}
const PetalImg = ({ src, className }: Props) => (
  <div className={`petal-img ${className}`}>
    <img src={src} alt="Petal" />
  </div>
);

export default PetalImg;
