import PropTypes from "prop-types";
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

// PropTypes for the component Theme so that eslint would not show any error
Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
