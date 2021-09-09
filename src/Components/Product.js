import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "../context/context";
function Product({ product }) {
  return (
    <ProductConsumer>
      {(value) => {
        const { setSingleProduct } = value;
        return (
          <ProductWrapper
            className="col-6 mx-auto col-sm-8 col-md-6 col-lg-3 my-3"
            style={{ textDecoration: "none" }}
          >
            <div className="card">
              <Link
                to={`/products/${product.id}`}
                onClick={() => {
                  setSingleProduct(product.id);
                }}
              >
                <div className="img-container">
                  <img
                    src={product.assets[0].url}
                    className="card-img-top"
                    alt="product"
                    // style={{ height: "300px" }}
                  />
                </div>
              </Link>
              <div className="card-body d-flex justify-content-center">
                {/* <p className="mb-0"> */}
                {product.name}
                {/* </p> */}
                {/* <p className="mb-0 price">{product.price.formatted}</p> */}
              </div>
            </div>
          </ProductWrapper>
        );
      }}
    </ProductConsumer>
  );
}

export default Product;

const ProductWrapper = styled.div`
  .card {
    background: #ece9e6;
    background: -webkit-linear-gradient(to bottom, #ffffff, #ece9e6);
    background: linear-gradient(to bottom, #ffffff, #ece9e6);
    color: #7f8879;
    font-weight: bold;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    height: 100%;
    border: none;
  }

  .card:hover {
    box-shadow: 7px 10px 5px 0px var(--Lightgrey);
  }

  .card-img-top {
    transition: var(--mainTransition);
  }

  .card:hover .card-img-top {
    transform: scale(1.15);
    opacity: 0.2;
  }

  .img-container {
    position: relative;
    height: 300px;
  }

  .img-container:hover {
    cursor: pointer;
  }
  .text-title {
    text-decoration: none;
    border: none;
  }

  img {
    height: 100%;
    padding: 20px;
  }
  @media screen and (max-width: 960px) {
    .img-container {
      height: 190px;
    }

    img {
      height: 100%;
      padding: 5px;
    }

    .card-body {
      font-size: 14px;
    }
    .price {
      font-size: 11px;
    }
  }
`;
