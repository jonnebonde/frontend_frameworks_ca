import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: cover;
`;

const ProductContext = styled.div`
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
  background-color: var(--color-secondary);
`;

const Price = styled.p`
  font-size: 1.2em;
  margin: 5px 0;
  color: ${(props) => (props.discount ? "red" : "black")};
`;

const Discount = styled.p`
  font-size: 1em;
  color: green;
`;

const AddToCartButton = styled.button`
  background-color: var(--color-button);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: var(--color-button-hover);
  }
`;

const ReviewsContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
`;

const Review = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ReviewUsername = styled.h3`
  font-size: 1.1em;
  margin: 0;
`;

const ReviewDescription = styled.p`
  margin: 5px 0;
`;

const ReviewRating = styled.p`
  color: gold;
`;

export {
  Container,
  ProductImage,
  ProductContext,
  Price,
  Discount,
  AddToCartButton,
  ReviewsContainer,
  Review,
  ReviewUsername,
  ReviewDescription,
  ReviewRating,
};
