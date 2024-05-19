import { ThemeProvider } from "styled-components";

const theme = {
  backgroundColor: {
    primary: "#4CAF50",
    secondary: "#214e23",
    danger: "red",
    white: "white",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
