import styled from "styled-components";

const CartIconContainer = styled.div`
  position: relative;
`;

const CartIconText = styled.div`
  position: absolute;
  background-color: var(--color-button);
  padding: 2px;
  border-radius: 50%;
  top: 5px;
  right: 10px;
`;

export { CartIconContainer, CartIconText };
