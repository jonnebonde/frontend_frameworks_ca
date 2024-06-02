import AllProducts from "../../Components/Products/AllProducts";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "WeGotIt | Home";
  }, []);

  return (
    <div>
      <AllProducts />
    </div>
  );
}

export default Home;
