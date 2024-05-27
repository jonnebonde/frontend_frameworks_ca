import { useQuery } from "@tanstack/react-query";
import { base_Url } from "../../../Constants/Api";
import ProductCard from "./ProductCard";
import ProductFilter from "../ProductFilter";

async function FetchAllProducts() {
  const response = await fetch(base_Url);

  if (!response.ok) {
    throw new Error("There was an error fetching the listings");
  }

  return response.json();
}

function AllProducts() {
  const {
    isPending,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: FetchAllProducts,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isPending) return <div>Loading...</div>;

  if (error) return "An error has occurred:" + error.message;

  return (
    <>
      <ProductFilter products={products.data} />
      <ProductCard products={products.data} />
    </>
  );
}

export default AllProducts;
