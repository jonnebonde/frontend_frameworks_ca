import { RiStarSFill, RiStarHalfFill } from "react-icons/ri";
import PropTypes from "prop-types";
import { RatingAndReviewsContainer } from "./index.styles";
import { v4 as uuidv4 } from "uuid";

function RatingStars({ rating }) {
  const ratingStars = Array(5).fill(0);

  return (
    <RatingAndReviewsContainer>
      {ratingStars.map((_, index) => {
        const key = uuidv4();
        if (index < Math.floor(rating)) {
          return <RiStarSFill key={key} style={{ color: "yellow" }} />;
        } else if (index === Math.floor(rating) && rating % 1 !== 0) {
          return <RiStarHalfFill key={key} style={{ color: "yellow" }} />;
        } else {
          return <RiStarSFill key={key} style={{ color: "gray" }} />;
        }
      })}
    </RatingAndReviewsContainer>
  );
}

const propTypes = {
  rating: PropTypes.number.isRequired,
};

RatingStars.propTypes = propTypes;

export default RatingStars;
