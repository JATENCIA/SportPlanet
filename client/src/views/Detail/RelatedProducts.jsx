import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import "./styles/related.css";

export default function RelatedProducts({ products }) {
  return (
    <>
      <h2 class="related-products-title">Related Products</h2>
      <div className="related-products">
        {products.map((product, index) => {
          return (
            <div key={product._id} className="product-card">
              <Link to={`/detail/${product._id}`} className="link">
                <ProductCard
                  id={product._id}
                  name={product.name}
                  image={product.productConditionals[0].image[1]}
                  price={product.price}
                  brands={product.brands}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
