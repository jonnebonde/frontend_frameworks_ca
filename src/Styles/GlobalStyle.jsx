import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}


html {
  --color-primary: hsl(250, 21%, 11%);
  --color-secondary: #212529;
  --color-button: hsl(44, 40%, 08%);
  --color-button-hover: hsl(44, 50%, 16%);
  --color-danger: red;
  --color-success: hsl(152, 38%, 42%);
  --color-white: white;
  --color-border: black;
  --color-stars: yellow;
  --color-stars-empty: gray;
  --color-text: white;
  --color-text-secondary: gray;

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
  color: var(--color-white);
  text-decoration: none;
}

.wrapper {
  flex: 1 0 auto;
`;

export default GlobalStyle;
