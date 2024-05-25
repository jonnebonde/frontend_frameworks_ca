import styled from "styled-components";

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  padding: 20px;
`;

const ProductCard = styled.div`
  background-color: var(--color-secondary);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  postion: relative;

  &:hover {
    text-decoration: none;
  }

  &:hover button {
    background-color: var(--color-button-hover);
  }

  @media (max-width: 360px) {
    width: 100%;
  }
`;

const ProductReviewAndRating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  right: 10px;
  background-color: var(--color-secondary);
  color: white;
  padding: 5px;
  border-radius: 50%;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;

  @media (max-width: 360px) {
    height: 200px;
  }
`;

const ProductInfo = styled.div`
  width: 100%;

  h2 {
    font-size: 1.5rem;
    margin: 0 0 10px;
  }

  p {
    font-size: 1rem;
    margin: 0 0 10px;
  }

  button {
    display: block;
    width: 100%;
    background-color: var(--color-button);
    color: white;
    text-decoration: none;
    border-radius: 0 0 4px 4px;
    border: none;
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: var(--color-button-hover);
      text-decoration: underline;
    }
  }
`;

export {
  ProductsContainer,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductReviewAndRating,
};
