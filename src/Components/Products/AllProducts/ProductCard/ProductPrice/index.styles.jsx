import styled from "styled-components";

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px;
`;

const OldPrice = styled.span`
  font-size: 0.8rem;
  text-decoration: line-through;
  color: var(--color-text-secondary);
`;

const Price = styled.span`
  font-size: 1.2rem;
`;

export { PriceContainer, OldPrice, Price };
