import styled from "styled-components";
import { AddToCartButton } from "../../Products/ProductDetails/index.styles";

const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const CartItemList = styled.ul`
  list-style-type: none;
  padding: 0;
`;
const CartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  width: 100%;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 468px) {
    flex-direction: column;
  }
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 30px;
    width: 100px;
    height: 100px;
  }


  @media (max-width: 468px) {
    margin-bottom: 20px;
`;
const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  object-fit: cover;
  margin-right: 20px;

  @media (max-width: 468px) {
    margin-bottom: 15px;
  }
`;

const ItemName = styled.h3`
  margin: 0;
`;

const ItemPrice = styled.p`
  margin: 0;
  font-weight: bold;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuantityButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const QuantityText = styled.p`
  margin: 0 10px;
`;

const RemoveButton = styled(AddToCartButton)`
  padding: 5px 10px;
  margin-left: 20px;
  margin-bottom: 0;
  background-color: var(--color-danger);
  &:hover {
    background-color: var(--color-white);
    color: var(--color-danger);
  }
`;

const TotalContainer = styled.div`
  margin-top: 20px;
  text-align: right;
  font-size: 1.2em;
  font-weight: bold;
`;

const CheckoutButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  a {
    text-decoration: none;
    color: var(--color-white);
    background-color: var(--color-button);
    padding: 10px 20px;
    font-size: 1.2em;
    font-weight: bold;
    margin-top: 30px;
  }

  a:hover {
    background-color: var(--color-button-hover);
  }

  @media (max-width: 468px) {
    a {
      width: 100%;
      text-align: center;
    }
  }
`;

export {
  CartContainer,
  CartItemList,
  CartItem,
  ItemDetails,
  ItemImage,
  ItemName,
  ItemPrice,
  QuantityControl,
  QuantityButton,
  QuantityText,
  RemoveButton,
  TotalContainer,
  CheckoutButtonContainer,
};
