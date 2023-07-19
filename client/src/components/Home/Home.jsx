import React, { useState } from "react";
import "./home.css";
import S3 from "../S3/S3";
import Gdrive from "../Gdrive/Gdrive";
const Home = () => {
  const [s3, setS3] = useState(true);
  const [gDrive, setIsGdrive] = useState(false);
  // click handlers for changing image source
  const s3clickHandler = () => {
    setS3(true);
    setIsGdrive(false);
  };
  const gDriveclickHandler = () => {
    setIsGdrive(true);
    setS3(false);
  };
  return (
    <>
      <div className="navs">
        <div
          to="/s3"
          className={`navLink ${s3 && "active"}`}
          onClick={s3clickHandler}
        >
          S3
        </div>
        <div
          to="/gdrive"
          className={`navLink ${gDrive && "active"}`}
          onClick={gDriveclickHandler}
        >
          Google Drive
        </div>
      </div>
      {s3 && <S3 />}
      {gDrive && <Gdrive />}
    </>
  );
};

export default Home;
