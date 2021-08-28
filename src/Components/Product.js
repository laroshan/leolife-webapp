import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "../context/context";
function Product({ product }) {
  console.log(product);
  return (
    <ProductConsumer>
      {(value) => {
        const { setSingleProduct } = value;
        return (
          <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-3 my-3">
            <Link
              to={`/products/${product.id}`}
              onClick={() => {
                setSingleProduct(product.id);
              }}
            >
              <div className="card">
                <div className="img-container">
                  <img
                    src={product.image}
                    className="card-img-top p-5"
                    alt="product"
                    style={{ height: "300px" }}
                  />
                </div>

                <div className="card-body d-flex justify-content-between">
                  <p className="mb-0">{product.title}</p>
                  <p className="mb-0 text-main">{product.price}.Rs</p>
                </div>
              </div>
            </Link>
          </ProductWrapper>
        );
      }}
    </ProductConsumer>
  );
}

export default Product;

const ProductWrapper = styled.div`
  .card {
    background-color: #21262d;
    color: #c9d1d9;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    height: 100%;
  }

  .card:hover {
    box-shadow: 7px 10px 5px 0px #03dac5;
    cursor: pointer;
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
  }
  /* .icon {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    display: none;
  }
  .card:hover icon{
      font-size: 2.5rem;
      display: ;
  } */
`;
