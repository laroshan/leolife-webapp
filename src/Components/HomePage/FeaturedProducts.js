import React from "react";
import { ProductConsumer } from "../../context/context";
import Product from "../Product";
import TitleComponent from "../TitleComponent";
import { Link } from "react-router-dom";
// import CustomCard from "../MaterialProduct";

function FeaturedProducts() {
  return (
    <div className="py-3">
      <div className="container">
        <TitleComponent title={"Featured Products"} center={true} />
        <div className="row my-5">
          <ProductConsumer>
            {(value) => {
              const { storedProducts } = value;
              return storedProducts
                .filter((filterproduct) => filterproduct.sku === "hello")
                .map(
                  (product) => <Product key={product.id} product={product} />
                  // console.log(product);
                );

              // <CustomCard key={product.id} product={product} />
            }}
          </ProductConsumer>
        </div>
        <div className="row mt-5">
          <div className="col text-center my-5">
            <Link to="/products" className="main-link">
              More Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
