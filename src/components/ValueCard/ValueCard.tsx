import "./ValueCard.scss";
interface Props {
  img: any;
  caption: any;
}
const ValueCard = ({ img, caption }: Props) => {
  return (
    <div className="card">
      <div
        className="imagecontainer"
        // @ts-ignore
        style={{ "--image-url": `url(${img}) ` }}
      ></div>
      <div className="captionContainer">
        <div className="caption">{caption}</div>
      </div>
      <a href="#" className="readMoreLink">
        Read More
      </a>
    </div>
  );
};

export default ValueCard;
