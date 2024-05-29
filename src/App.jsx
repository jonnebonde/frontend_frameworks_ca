import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";
import CheckOutPage from "./Pages/CheckOutPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<CheckOutPage />} />
          <Route path="/:id" element={<ProductPage />} />
          <Route path="checkout" element={<h1>Checkout</h1>} />
          <Route path="contact" element={<h1>contact</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
