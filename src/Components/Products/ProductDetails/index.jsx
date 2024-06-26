import { useQuery } from "@tanstack/react-query";
import { useContext, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { base_Url } from "../../../Constants/Api";
import { CartContext } from "../../../Hooks/CartContext";
import {
  Button,
  CartConfirmation,
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
  const [addedToCart, setAddedToCart] = useState(false);
  const timeoutRef = useRef(null);

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

  if (error) return <div>An error has occurred: {error.message}</div>;

  if (product) {
    document.title = "WeGotIt | " + product.data.title;
  } else {
    document.title = "WeGotIt | Product Details";
  }

  const handleAddToCart = () => {
    dispatch({ type: "addProduct", payload: product });
    setAddedToCart(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear existing timeout
    }
    timeoutRef.current = setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  // Needed to add toFixed(2) to the product.data.price - product.data.discountedPrice to make sure the number is always displayed with 2 decimal places even if it's a whole number

  return (
    <Container>
      {addedToCart && (
        <CartConfirmation>{product.data.title} added to cart!</CartConfirmation>
      )}
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
                : (product.data.price - product.data.discountedPrice).toFixed(
                    2,
                  )}
            </p>
          )}
        </Discount>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </ProductContext>

      <ReviewsContainer>
        {product.data.reviews.length > 0 ? (
          product.data.reviews.map((review) => (
            <Review key={review.id}>
              <ReviewRating>
                Rating:
                <RatingStars rating={review.rating} />
              </ReviewRating>
              <ReviewUsername>{review.username}</ReviewUsername>
              <ReviewDescription>{review.description}</ReviewDescription>
            </Review>
          ))
        ) : (
          <Review>No reviews available for this product.</Review>
        )}
      </ReviewsContainer>
    </Container>
  );
}

export default ProductDetails;
