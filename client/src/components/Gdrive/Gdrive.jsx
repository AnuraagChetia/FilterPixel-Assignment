import React from "react";
import "./gdrive.css";
import batman from "../../assets/superman.jpg";
const images = [
  {
    img: batman,
  },
  {
    img: batman,
  },
  {
    img: batman,
  },
  {
    img: batman,
  },
  {
    img: batman,
  },
  {
    img: batman,
  },
];
const Gdrive = () => {
  return (
    <div className="row">
      {images.map((image) => (
        <div className="col">
          <img src={image.img} />
        </div>
      ))}
    </div>
  );
};

export default Gdrive;
