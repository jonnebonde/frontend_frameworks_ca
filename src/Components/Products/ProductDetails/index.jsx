import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { base_Url } from "../../../Constants/Api";
import { useContext } from "react";
import { CartContext } from "../../../Hooks/CartHook/CartContext";
import {
  Container,
  ProductImage,
  ProductDetails,
  Discount,
  AddToCartButton,
  ReviewsContainer,
  Review,
  ReviewUsername,
  ReviewDescription,
  ReviewRating,
} from "./index.styles";

import ProductPrice from "../AllProducts/ProductCard/ProductPrice";

async function FetchProductDetails(id) {
  const response = await fetch(`${base_Url}/${id}`);

  if (!response.ok) {
    throw new Error("There was an error fetching the product details");
  }

  return response.json();
}

function ProductContext() {
  const { dispatch } = useContext(CartContext);

  const { id } = useParams();
  const {
    isPending,
    error,
    data: product,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => FetchProductDetails(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isPending) return <div>Loading...</div>;

  if (error) return "An error has occurred:" + error.message;

  return (
    <Container>
      <ProductImage src={product.data.image.url} alt={product.data.name} />
      <ProductDetails>
        <h2>{product.data.name}</h2>
        <p>{product.data.description}</p>
        <ProductPrice
          price={product.data.price}
          discountedPrice={product.data.discountedPrice}
        />
        <Discount>
          This deal saves you $
          {product.data.price - product.data.discountedPrice}
        </Discount>
      </ProductDetails>
      <AddToCartButton
        onClick={() => dispatch({ type: "addProduct", payload: product })}
      >
        Add to Cart
      </AddToCartButton>
      <ReviewsContainer>
        {product.data.reviews.map((review) => (
          <Review key={review.id}>
            <ReviewUsername>{review.username}</ReviewUsername>
            <ReviewDescription>{review.description}</ReviewDescription>
            <ReviewRating>Rating: {review.rating}</ReviewRating>
          </Review>
        ))}
      </ReviewsContainer>
    </Container>
  );
}

export default ProductContext;
