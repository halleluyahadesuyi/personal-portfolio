import React, { useEffect, useState } from "react";
import "./ProgressiveImage.css";

const ProgressiveImage = ({ src, placeholderSrc, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setLoading(false);
    };
  }, [src]);

  return (
    <img
      src={loading ? placeholderSrc : imgSrc}
      alt={alt}
      className={`${className} ${loading ? "loading" : "loaded"}`}
    />
  );
};

export default ProgressiveImage;
