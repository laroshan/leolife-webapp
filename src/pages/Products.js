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
      <div className="container-fluid py-4 ">
        <TitleComponent title={"Our Products"} center={true} />

        <ProductConsumer>
          {(value) => {
            const { categories } = value;
            return (
              <ProductsWrapper className="py-3">
                {categories.map((category, index) => {
                  return (
                    <div
                      className="row py-5 "
                      style={{
                        background: index % 2 == 0 ? "#2b6777" : "#c8d8e4",
                      }}
                    >
                      <h2>{category.name}</h2>
                      {category.productsData.map((product) => {
                        return <Product key={product.id} product={product} />;
                      })}
                    </div>
                  );
                })}
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
