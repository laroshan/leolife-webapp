import React from "react";
import HeroSectionImg from "../Components/HerSectionImg";
import ProductBcg from "../images/cleaningheader.png";
import mobileBg from "../images/colorful-cleaning.jpg";
import { ProductConsumer } from "../context/context";
import TitleComponent from "../Components/TitleComponent";
import styled from "styled-components";
import Product from "../Components/Product";
import Spinner from "../Components/Spinner";
import FilterProduct from "../Components/FilterProduct";
function Products() {
  return (
    <div>
      <HeroSectionImg img={ProductBcg} max={false} mobImg={mobileBg} />

      <div className="container-fluid py-4 ">
        <FilterProduct />
        <TitleComponent title={"Our Products"} center={true} />

        <ProductConsumer>
          {(value) => {
            const { categories, filteredProducts } = value;
            if (!categories.length) return <Spinner />;
            return (
              <ProductsWrapper className="py-3">
                {filteredProducts.length <= 0
                  ? categories.map((category, index) => {
                      return (
                        <div
                          className="row py-2 "
                          style={{
                            background: index % 2 === 0 ? "#1e130c" : "#232526",
                            background:
                              index % 2 === 0
                                ? "-webkit-linear-gradient(to bottom, #9a8478, #1e130c)"
                                : "-webkit-linear-gradient(to bottom, #414345, #232526)",
                            background:
                              index % 2 === 0
                                ? "linear-gradient(to bottom, #9a8478, #1e130c)"
                                : "linear-gradient(to bottom, #414345, #232526)",
                          }}
                        >
                          <div className="row">
                            <h2
                              className="text-title"
                              style={{
                                color: index % 2 === 0 ? "#232526" : "#1e130c",
                              }}
                            >
                              {category.name}
                            </h2>
                          </div>

                          {category.productsData.map((product) => {
                            return (
                              <Product key={product.id} product={product} />
                            );
                          })}
                        </div>
                      );
                    })
                  : filteredProducts.map((category, index) => {
                      return (
                        <div
                          className="row py-2 "
                          style={{
                            background: index % 2 === 0 ? "#1e130c" : "#232526",
                            background:
                              index % 2 === 0
                                ? "-webkit-linear-gradient(to bottom, #9a8478, #1e130c)"
                                : "-webkit-linear-gradient(to bottom, #414345, #232526)",
                            background:
                              index % 2 === 0
                                ? "linear-gradient(to bottom, #9a8478, #1e130c)"
                                : "linear-gradient(to bottom, #414345, #232526)",
                          }}
                        >
                          <div className="row">
                            <h2
                              className="text-title"
                              style={{
                                color: index % 2 !== 0 ? "#232526" : "#1e130c",
                              }}
                            >
                              {category.name}
                            </h2>
                          </div>

                          {category.productsData.map((product) => {
                            return (
                              <Product key={product.id} product={product} />
                            );
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

const ProductsWrapper = styled.div`
  .text-title {
    margin-left: 30px;
    font-size: 450x;
  }
`;
