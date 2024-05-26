import styled from "styled-components";

const ProductTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-left: 5px;
`;

const Tag = styled.span`
  background-color: var(--color-primary);
  color: white;
  font-size: 0.8rem;
  padding: 5px;
  border-radius: 5px;
`;

export { ProductTagsContainer, Tag };
