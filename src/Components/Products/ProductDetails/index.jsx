import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { base_Url } from "../../../Constants/Api";
import { CartContext } from "../../../Hooks/CartHook";
import {
  Button,
  Container,
  Discount,
  ProductContext,
  ProductImage,
  Review,
  ReviewDescription,
  ReviewRating,
  ReviewUsername,
  ReviewsContainer,
} from "./index.styles";

import ProductPrice from "../AllProducts/ProductCard/ProductPrice";
import RatingStars from "../AllProducts/ProductCard/ProductRating";

async function FetchProductDetails(id) {
  const response = await fetch(`${base_Url}/${id}`);

  if (!response.ok) {
    throw new Error("There was an error fetching the product details");
  }

  return response.json();
}

function ProductDetails() {
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

  document.title = "WeGotIt | " + product.data.title;

  return (
    <Container>
      <h1>{product.data.title}</h1>
      <ProductImage src={product.data.image.url} alt={product.data.name} />
      <ProductContext>
        <p>{product.data.description}</p>
        <ProductPrice
          price={product.data.price}
          discountedPrice={product.data.discountedPrice}
        />
        <Discount>
          {product.data.price - product.data.discountedPrice === 0 ? null : (
            <p>
              This deal saves you{" "}
              {product.data.price - product.data.discountedPrice === 0
                ? ""
                : product.data.price - product.data.discountedPrice}
            </p>
          )}
        </Discount>
        <Button
          onClick={() => dispatch({ type: "addProduct", payload: product })}
        >
          Add to Cart
        </Button>
      </ProductContext>

      <ReviewsContainer>
        {product.data.reviews.map((review) => (
          <Review key={review.id}>
            <ReviewRating>
              Rating:
              <RatingStars rating={product.data.rating} />
            </ReviewRating>
            <ReviewUsername>{review.username}</ReviewUsername>
            <ReviewDescription>{review.description}</ReviewDescription>
          </Review>
        ))}
      </ReviewsContainer>
    </Container>
  );
}

export default ProductDetails;
