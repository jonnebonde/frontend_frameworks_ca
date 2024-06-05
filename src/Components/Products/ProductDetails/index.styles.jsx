import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: cover;
`;

export const ProductContext = styled.div`
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
  background-color: var(--color-secondary);
`;

export const Discount = styled.div`
  p {
    font-size: 1em;
    color: green;
  }
`;

export const Button = styled.button`
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

export const ReviewsContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
`;

export const Review = styled.div`
  background-color: var(--color-secondary);
  padding: 10px;
  margin-bottom: 10px;
`;

export const ReviewUsername = styled.h3`
  font-size: 1.1em;
  margin: 0;
`;

export const ReviewDescription = styled.p`
  margin: 5px 0;
`;

export const ReviewRating = styled.div`
  display: flex;
  align-items: center;
  color: gold;
`;

export const CartConfirmation = styled.div`
  background-color: var(--color-success);
  color: white;
  padding: 10px;
  margin-top: 20px;
  position: fixed;
  top: 5%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
