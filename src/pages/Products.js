import React from "react";
import HeroSectionImg from "../Components/HerSectionImg";
import ProductBcg from "../images/cleaningheader.png";
import { ProductConsumer } from "../context/context";
import TitleComponent from "../Components/TitleComponent";
import styled from "styled-components";
import Product from "../Components/Product";

function Products() {
  return (
    <div>
      <HeroSectionImg img={ProductBcg} max={false} />
      <div className="container py-5">
        <TitleComponent title={"Our Products"} center={true} />
        <ProductConsumer>
          {(value) => {
            const { storedProducts } = value;
            return (
              <ProductsWrapper>
                <div className="row py-5">
                  {storedProducts.map((product) => {
                    return <Product key={product.id} product={product} />;
                  })}
                </div>
              </ProductsWrapper>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}

export default Products;

const ProductsWrapper = styled.div``;
