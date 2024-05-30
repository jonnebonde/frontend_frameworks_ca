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
          <Route path="checkout" element={<CheckOutPage />} />
          <Route path="/:id" element={<ProductPage />} />
          <Route path="checkedout" element={<h1>Checkedout</h1>} />
          <Route path="contact" element={<h1>contact</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
