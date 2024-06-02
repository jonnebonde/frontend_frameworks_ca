import styled from "styled-components";

export const DiscountOverlay = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  background-color: var(--color-success);
  color: white;
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 0 5px 5px 0;

  @media (max-width: 360px) {
    font-size: 1rem;
  }
`;
