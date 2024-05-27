import { Link } from "react-router-dom";
import {
  ProductsContainer,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductReviewAndRating,
} from "./index.styles";
import RatingAndReviews from "./RatingAndReviews";
import ProductPrice from "./ProductPrice";
import ProductDiscount from "../ProductCard/ProductDiscount";
import ProductTags from "./ProductTags";

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
            <ProductImage src={product.image.url} alt={product.name} />
            <ProductInfo>
              <h2>{product.title}</h2>

              <ProductReviewAndRating>
                <RatingAndReviews
                  reviews={product.reviews}
                  rating={product.rating}
                />
              </ProductReviewAndRating>
              <ProductTags tags={product.tags} />
              <ProductPrice
                price={product.price}
                discountedPrice={product.discountedPrice}
              />

              <button>View Product</button>
            </ProductInfo>
          </ProductCard>
        </Link>
      ))}
    </ProductsContainer>
  );
}

export default ProductsCard;
