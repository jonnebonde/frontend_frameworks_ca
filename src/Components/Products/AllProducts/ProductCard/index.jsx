import { Link } from "react-router-dom";
import {
  ProductsContainer,
  ProductCard,
  ProductImage,
  ProductInfo,
} from "./index.styles";

function ProductsCard(products) {
  console.log(products);

  return (
    <ProductsContainer>
      {products.products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image.url} alt={product.name} />
          <ProductInfo>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <Link to={`/${product.id}`}>View Product</Link>
          </ProductInfo>
        </ProductCard>
      ))}
    </ProductsContainer>
  );
}

export default ProductsCard;
