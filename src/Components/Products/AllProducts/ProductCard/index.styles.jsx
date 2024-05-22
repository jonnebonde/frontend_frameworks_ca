import styled from "styled-components";

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  padding: 20px;
`;

const ProductCard = styled.div`
  background-color: #fff;
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

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductInfo = styled.div`
  padding: 20px;

  h2 {
    font-size: 1.5rem;
    margin: 0 0 10px;
  }

  p {
    font-size: 1rem;
    margin: 0 0 10px;
  }

  a {
    display: inline-block;
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export { ProductsContainer, ProductCard, ProductImage, ProductInfo };
