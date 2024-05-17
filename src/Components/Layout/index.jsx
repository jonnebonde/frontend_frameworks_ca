import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Wrapper } from "./index.styles";

function Layout() {
  return (
    <>
      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  );
}

export default Layout;
