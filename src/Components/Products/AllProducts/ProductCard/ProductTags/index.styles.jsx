import styled from "styled-components";

export const ProductTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-left: 5px;
`;

export const Tag = styled.span`
  background-color: var(--color-primary);
  color: white;
  font-size: 0.8rem;
  padding: 5px;
  border-radius: 5px;
`;
