import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const FilterInput = styled.input`
  padding: 10px;
  width: 50%;
  border-radius: 0 0 5px 5px;
  border: none;
`;

export const FilteredProducts = styled.ul`
  list-style: none;
  padding: 0;
  position: absolute;
  z-index: 1;
  top: 100%;
`;

export const FilteredProduct = styled.li`
  padding: 5px 10px;
  background-color: var(--color-secondary);

  a {
    background-color: var(--color-button);
    padding: 5px 10px;

    &:hover {
      background-color: var(--color-button-hover);
    }
  }
`;
