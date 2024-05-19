import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}


html {
  --color-primary: black;
  --color-secondary: #214e23;
  --color-danger: red;
  --color-white: white;

  background-color: var(--color-primary);

}


html,
body {
  height: 100%;
  color: var(--color-white);
}

#root {
  display: flex;
  flex-direction: column;
  height: 100%;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: var(--color-white);

  &:hover {
    text-decoration: underline;
  }
}
`;

export default GlobalStyle;
