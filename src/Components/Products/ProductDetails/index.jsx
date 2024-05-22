import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { base_Url } from "../../../Constants/Api";

async function FetchProductDetails(id) {
  const response = await fetch(`${base_Url}/${id}`);

  if (!response.ok) {
    throw new Error("There was an error fetching the product details");
  }

  return response.json();
}

function ProductDetails() {
  const { id } = useParams();
  const {
    isPending,
    error,
    data: product,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => FetchProductDetails(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isPending) return <div>Loading...</div>;

  if (error) return "An error has occurred:" + error.message;

  console.log(product.data);

  return (
    <>
      <h2>{product.data.name}</h2>
      <p>{product.data.description}</p>
      <p>Old Price{product.data.price}</p>
      <p>New Price{product.data.discountedPrice}</p>
      <p>
        This deal saves you {product.data.price - product.data.discountedPrice}
      </p>
      <img src={product.data.image.url} alt={product.data.name} />
      <button>Add to Cart</button>
      <div>
        {product.data.reviews.map((review) => {
          return (
            <div key={review.id}>
              <h3>{review.username}</h3>
              <p>{review.description}</p>
              <p>{review.rating}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductDetails;
