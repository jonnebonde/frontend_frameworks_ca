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

function ProductsCard(products) {
  console.log(products);

  return (
    <ProductsContainer>
      {products.products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image.url} alt={product.name} />
          <ProductInfo>
            <ProductReviewAndRating>
              <RatingAndReviews
                reviews={product.reviews}
                rating={product.rating}
              />
            </ProductReviewAndRating>
            <h2>{product.title}</h2>
            <ProductPrice
              price={product.price}
              discountedPrice={product.discountedPrice}
            />
            <Link to={`/${product.id}`}>View Product</Link>
          </ProductInfo>
        </ProductCard>
      ))}
    </ProductsContainer>
  );
}

export default ProductsCard;
