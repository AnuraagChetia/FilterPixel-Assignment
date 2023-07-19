import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./s3.css";
import { useInView } from "react-intersection-observer";

const S3 = () => {
  const [images, setImages] = useState([]);
  const ref = useRef();
  // const { ref, inView } = useInView({
  //   triggerOnce: true, // Only trigger once when element enters the viewport
  //   threshold: 0, // Percentage of the element visible in the viewport
  // });

  useEffect(() => {
    const getS3 = async () => {
      const res = await axios.get(`http://localhost:3000/gallery/get-s3`);
      setImages(res.data);
    };
    getS3();
  }, []);

  return (
    <div className="row">
      {images.map((image) => (
        <div
          // className={`col ${inView ? "show" : ""}`}
          className="col"
          key={image.Key}
          ref={ref}
        >
          <img
            className="img"
            src={`https://s3-ap-south-1.amazonaws.com/testbucketfp/${image.Key}`}
          />
        </div>
      ))}
    </div>
  );
};

export default S3;
