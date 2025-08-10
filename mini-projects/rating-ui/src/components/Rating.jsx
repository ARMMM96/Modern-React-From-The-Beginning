import { useState } from "react";
import Star from "./Star";

const Rating = ({
  heading = "Rate Your Experince",
  color = "gold",
  feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excelint"],
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="rating-container">
      <h2>Rate your Eperince</h2>
      <div className="stars">
        {stars.map((star) => (
          <Star
            key={star}
            star={star}
            rating={rating}
            color={color}
            ratingClick={setRating}
            hoverEnter={setHover}
            hoverLeave={() => setHover(null)}
          />
        ))}
      </div>
      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
    </div>
  );
};

export default Rating;
