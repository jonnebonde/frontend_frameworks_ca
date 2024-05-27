import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  FilterContainer,
  FilterInput,
  FilteredProduct,
  FilteredProducts,
} from "./index.styles";

function ProductFilter({ products = [] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filterProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Added a filter that will only show the first 5 results
  // and show a message if no results are found.

  return (
    <FilterContainer>
      <FilterInput
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value.trim())}
        placeholder="Search for a product..."
      />
      {searchTerm.length > 0 && (
        <>
          {filterProducts.length > 0 ? (
            <FilteredProducts>
              {filterProducts.slice(0, 5).map((product) => (
                <FilteredProduct key={product.id}>
                  <Link to={`${product.id}`}>{product.title}</Link>
                </FilteredProduct>
              ))}
            </FilteredProducts>
          ) : (
            <FilteredProducts>
              <FilteredProduct>No results found</FilteredProduct>
            </FilteredProducts>
          )}
        </>
      )}
    </FilterContainer>
  );
}

const propTypes = {
  products: PropTypes.array,
};

ProductFilter.propTypes = propTypes;

export default ProductFilter;
