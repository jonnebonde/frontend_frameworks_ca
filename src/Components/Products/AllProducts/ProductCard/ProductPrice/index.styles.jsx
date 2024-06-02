import styled from "styled-components";

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px;
`;

export const OldPrice = styled.span`
  font-size: 0.8rem;
  text-decoration: line-through;
  color: var(--color-text-secondary);
`;

export const Price = styled.span`
  font-size: 1.2rem;
`;
