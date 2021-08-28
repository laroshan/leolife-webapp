import React from "react";
import { ProductConsumer } from "../context/context";
import styled from "styled-components";

function SingleProductPage() {
  return (
    <SingleProductWrapper>
      <ProductConsumer>
        {(value) => {
          const { singleProduct } = value;

          return <h1>{singleProduct.title}</h1>;

          // return <h1>{SingleProduct.title}</h1>;
        }}
      </ProductConsumer>
    </SingleProductWrapper>
  );
}

export default SingleProductPage;

const SingleProductWrapper = styled.div``;
