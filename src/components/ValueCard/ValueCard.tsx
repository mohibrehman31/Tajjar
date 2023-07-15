import "./ValueCard.scss";

const ValueCard = ({ img, caption }: any) => {
  return (
    <div className="card">
      <div
        className="imagecontainer"
        style={{ "--image-url": `url(${img})` }}
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
