import styled from "styled-components";

const CartIconContainer = styled.div`
  position: relative;
`;

const CartIconText = styled.div`
  position: absolute;
  background-color: var(--color-button);
  opacity: 0.9;
  padding: 2px;
  border-radius: 50%;
  top: 5px;
  right: 8px;
  font-size: 1.1rem;
`;

export { CartIconContainer, CartIconText };
