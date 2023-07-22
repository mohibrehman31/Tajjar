import "./ValueCard.scss";

const ValueCard = ({ img, caption }: any) => {
  return (
    <div className="card">
      <img className="imagecontainer" src={img} alt="" />
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
