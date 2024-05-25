import PropTypes from "prop-types";

function ProductPrice({ price, discountedPrice }) {
  if (discountedPrice === price) {
    return (
      <div>
        <span>{price}</span>
      </div>
    );
  } else {
    return (
      <div>
        <span>Before: {price}</span>
        <span>Now: {discountedPrice}</span>
      </div>
    );
  }
}

const propTypes = {
  price: PropTypes.number.isRequired,
  discountedPrice: PropTypes.number,
};

ProductPrice.propTypes = propTypes;

export default ProductPrice;
