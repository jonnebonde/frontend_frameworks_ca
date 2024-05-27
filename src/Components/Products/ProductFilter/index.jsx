import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductFilter({ products = [] }) {
  const [searchTerm, setSearchTerm] = useState("");

  // computed property
  const filterProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="">
      <input
        className=""
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value.trim())}
      />
      {filterProducts.length > 0 && searchTerm.length > 0 && (
        <ul className="">
          {filterProducts.map((product) => {
            return (
              <li key={product.id}>
                <Link to={`${product.id}`} className="">
                  {product.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

const propTypes = {
  products: PropTypes.array,
};

ProductFilter.propTypes = propTypes;

export default ProductFilter;
