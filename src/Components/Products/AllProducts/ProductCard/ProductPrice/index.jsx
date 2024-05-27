import PropTypes from "prop-types";
import { OldPrice, PriceContainer, Price } from "./index.styles";

function ProductPrice({ price, discountedPrice }) {
  if (discountedPrice === price) {
    return (
      <PriceContainer>
        <Price>{price}</Price>
      </PriceContainer>
    );
  } else {
    return (
      <PriceContainer>
        <OldPrice>Before {price}</OldPrice>
        <Price>Now {discountedPrice}</Price>
      </PriceContainer>
    );
  }
}

const propTypes = {
  price: PropTypes.number.isRequired,
  discountedPrice: PropTypes.number,
};

ProductPrice.propTypes = propTypes;

export default ProductPrice;
