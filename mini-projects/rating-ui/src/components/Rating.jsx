import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  const clicked = (index) => console.log("cliked", index);

  return (
    <div className="rating-container">
      <h2>Rate your Eperince</h2>
      <div className="stars">
        {stars.map((star) => (
          <span
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className="star"
            key={star}
          >
            {"\u2605"}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
