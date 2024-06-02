import styled from "styled-components";
import { Container } from "../Products/ProductDetails/index.styles";

export const CheckedOutContainer = styled(Container)`
  h1 {
    margin: 40px 0;
  }

  a {
    padding: 10px 20px;
    background-color: var(--color-button);

    &:hover {
      background-color: var(--color-button-hover);
    }
  }
`;
