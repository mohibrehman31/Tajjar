import React from "react";
import "./PetalImg.scss";

const PetalImg = ({ src, className }) => (
  <div className={`petal-img ${className}`}>
    <img src={src} alt="Petal" />
  </div>
);

export default PetalImg;
