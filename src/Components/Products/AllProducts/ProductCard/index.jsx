import { Link } from "react-router-dom";
import ProductDiscount from "../ProductCard/ProductDiscount";
import ProductPrice from "./ProductPrice";
import RatingAndReviews from "./ProductRating";
import ProductTags from "./ProductTags";
import {
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductReviewAndRating,
  ProductsContainer,
} from "./index.styles";

function ProductsCard(products) {
  return (
    <ProductsContainer>
      {products.products.map((product) => (
        <Link to={`/${product.id}`} key={product.id}>
          <ProductCard key={product.id}>
            <ProductDiscount
              price={product.price}
              discountedPrice={product.discountedPrice}
            />
            <ProductImage src={product.image.url} alt={product.title} />
            <ProductInfo>
              <h2>{product.title}</h2>
              <ProductReviewAndRating>
                <RatingAndReviews rating={product.rating} />
              </ProductReviewAndRating>
              <ProductTags tags={product.tags} />
              <ProductPrice
                price={product.price}
                discountedPrice={product.discountedPrice}
              />
              <button tabIndex={-1}>View Product</button>
            </ProductInfo>
          </ProductCard>
        </Link>
      ))}
    </ProductsContainer>
  );
}

export default ProductsCard;
