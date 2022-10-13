import React from "react";

function Avatar({ url, className }) {
  return (
    <img
      loading="lazy"
      className={`h-10 cursor-pointer rounded-full transition duration-150 transform hover:scale-110 ${className}`}
      src={url}
      alt="image url"
    />
  );
}

export default Avatar;
