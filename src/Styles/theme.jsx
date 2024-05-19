import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    danger: "var(--color-danger)",
    white: "var(--color-white)",
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