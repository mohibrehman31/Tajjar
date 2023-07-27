import "./Testimonials.scss";

const Testimonials = ({
  heading,
  subheading,
  imageSrc,
  name,
  position,
  review,
  buttonText,
}: any) => {
  return (
    <div className="testimonials">
      <div className="testimonials-left">
        <div className="heading-container">
          <h1 className="heading-content">{heading}</h1>
        </div>
        <div className="subheading-container">
          <h2 className="subheading">{subheading}</h2>
        </div>
      </div>
      <div className="testimonials-right">
        <div className="container">
          <div className="image-container">
            <img className="image" src={imageSrc} alt="Image" />
          </div>
          <div className="text-container">
            <div className="name">{name}</div>
            <div className="position">{position}</div>
          </div>
        </div>
        <div className="review">{review}</div>
        <button className="custom-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default Testimonials;
