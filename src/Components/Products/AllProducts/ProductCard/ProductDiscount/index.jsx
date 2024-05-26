import PropTypes from "prop-types";
import { DiscountOverlay } from "./index.styles";

function ProductDiscount({ price, discountedPrice }) {
  console.log(price, discountedPrice);

  if (discountedPrice === price) {
    return null;
  } else {
    const percentage = Math.floor((discountedPrice / price) * 100);

    return (
      <DiscountOverlay>
        {Math.random() < 0.5
          ? `${percentage - 100}%`
          : `Save ${Math.floor(price - discountedPrice)}`}
      </DiscountOverlay>
    );
  }
}

const propTypes = {
  price: PropTypes.number.isRequired,
  discountedPrice: PropTypes.number,
};

ProductDiscount.propTypes = propTypes;

export default ProductDiscount;
