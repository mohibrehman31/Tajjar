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
      {heading && subheading && (
        <div className="testimonials-left">
          <div className="heading-container">
            <h1 className="heading-content">{heading}</h1>
          </div>
          <div className="subheading-container">
            <h2 className="subheading">{subheading}</h2>
          </div>
        </div>
      )}
      {imageSrc && name && position && (
        <div className="testimonials-right">
          <div className="container">
            {imageSrc && (
              <div className="image-container">
                <img className="image" src={imageSrc} alt="Image" />
              </div>
            )}
            {name && position && (
              <div className="text-container">
                {name && <div className="name">{name}</div>}
                {position && <div className="position">{position}</div>}
              </div>
            )}
          </div>
          {review && <div className="review">{review}</div>}
          {buttonText && <button className="custom-button">{buttonText}</button>}
        </div>
      )}
    </div>
  );
};

export default Testimonials;
