import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import "./styles/related.css";

export default function RelatedProducts({ products }) {
    return (
        <>
            <h2 class="related-products-title">Related Products</h2>
            <div className="card-container">
                {products.map((product, index) => {
                        return (
                            <Link to={`/detail/${product._id}`} className="link">
                                <ProductCard
                                    id={product._id}
                                    name={product.name}
                                    image={product.productConditionals[0].image[1]}
                                    price={product.price}
                                    brands={product.brands}
                                />
                            </Link>
                        );
                    })}
            </div>
        </>
    );
}
