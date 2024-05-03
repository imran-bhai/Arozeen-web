import React from "react";
import OrangeStart from "../iconSVG/OrangeStart";
import GrayStar from "../iconSVG/GrayStar";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <div className="" key={i}>
          <OrangeStart />
        </div>
      ); // Full star
    } else {
      stars.push(
        <div className="" key={i}>
          <GrayStar />
        </div>
      ); // Empty star
    }
  }
  return <div className="flex">{stars}</div>;
};

export default StarRating;
