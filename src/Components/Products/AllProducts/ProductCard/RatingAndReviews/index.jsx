import { RiStarSFill, RiStarHalfFill } from "react-icons/ri";
import PropTypes from "prop-types";
import { RatingAndReviewsContainer } from "./index.styles";

function RatingAndReviews({ reviews, rating }) {
  const ratingStars = Array(5).fill(0);

  return (
    <RatingAndReviewsContainer>
      {ratingStars.map((_, index) => {
        if (index < Math.floor(rating)) {
          return <RiStarSFill key={index} style={{ color: "yellow" }} />;
        } else if (index === Math.floor(rating) && rating % 1 !== 0) {
          return <RiStarHalfFill key={index} style={{ color: "yellow" }} />;
        } else {
          return <RiStarSFill key={index} style={{ color: "gray" }} />;
        }
      })}
      <p>({reviews.length})</p>
    </RatingAndReviewsContainer>
  );
}

const propTypes = {
  reviews: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
};

RatingAndReviews.propTypes = propTypes;

export default RatingAndReviews;
