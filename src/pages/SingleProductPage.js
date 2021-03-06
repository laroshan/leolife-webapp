import React from "react";
import { ProductConsumer } from "../context/context";
import styled from "styled-components";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function SingleProductPage() {
  return (
    <SingleProductWrapper>
      <ProductConsumer>
        {(value) => {
          let singleProduct;
          if (localStorage.getItem("product")) {
            singleProduct = JSON.parse(localStorage.getItem("product"));
          } else {
            singleProduct = [];
          }
          // const { getSingleProduct } = value;
          // const singleProduct = getSingleProduct();
          // console.log(singleProduct);
          const imagesArray = singleProduct.assets.map((images) => images.url);
          let variants = [];
          if (singleProduct.variant_groups.length > 0) {
            variants = singleProduct.variant_groups[0].options.map(
              (variant) => variant
            );
          }

          // console.log(variants);
          return (
            <div className="container-fluid">
              <div className="row">
                <div className="col-10 mx-auto col-sm-8 col-md-6 pt-5  img-window">
                  <Carousel
                    dynamicHeight={true}
                    // width="400px"
                    centerMode={true}
                  >
                    {imagesArray.map((image) => (
                      <div>
                        <img src={image} className="img-fluid" alt="images" />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <div className="col-10 mx-auto col-sm-8 col-md-6 my-1 col-text">
                  <h5 className="text-title mb-4  product-name">
                    Product : {singleProduct.name}
                  </h5>
                  <h5 className="text-title mb-4 text-cls">
                    Category : {singleProduct.categories[0].name}
                  </h5>
                  <h5 className="text-capitalize mb-4 text-cls">
                    Company : {singleProduct.seo.title}
                  </h5>
                  {/* <h5 className="text-main text-capitalize mb-4 text-cls">
                    price: {singleProduct.price.formatted}Rs
                  </h5> */}
                  <p className="text-capitalize text-title mt-2 abt-info">
                    Description:
                  </p>
                  <p className="text-main description">
                    {singleProduct.description.replace(/<[^>]+>/g, "")}
                  </p>

                  <div className="container">
                    <div className="row ">
                      {variants.map((variant) => (
                        <div className="col-8 mx-auto col-sm-8 col-md-6 col-lg-6 my-2 py-1 variants">
                          <h5 className="text-main text-capitalize mb-1 d-flex justify-content-center variant-txt">
                            {variant.name}
                          </h5>
                          {/* <h5 className="text-main text-capitalize mb-1 d-flex justify-content-center variant-txt">
                            {variant.price.formatted} Rs
                          </h5> */}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/products"
                    className="main-link d-flex justify-content-center "
                    style={{ margin: "0.75rem" }}
                  >
                    Back To Products
                  </Link>
                </div>
              </div>
            </div>
          );

          // return <h1>{SingleProduct.title}</h1>;
        }}
      </ProductConsumer>
    </SingleProductWrapper>
  );
}

export default SingleProductPage;

const SingleProductWrapper = styled.div`
  background: #d1913c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #ffd194,
    #d1913c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #ffd194,
    #d1913c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  img {
    height: 100%;
    /* object-fit: cover; */
  }
  .img-window {
    /* background: var(--sideBg); */
    background: #ece9e6; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to bottom,
      #ffffff,
      #ece9e6
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to bottom,
      #ffffff,
      #ece9e6
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .product-name {
    font-size: 40px;
    color: var(--Goldenwheat);
    font-weight: bolder;
  }

  .col-text {
    padding: 50px;
  }
  .text-cls {
    font-size: 25px;
    color: var(--Goldenwheat);
  }

  .abt-info {
    font-size: 35px;
    color: var(--Goldenwheat);
    font-weight: 700;
  }
  .description {
    font-size: 30px;
    color: var(--SoftWheat);
  }

  .variants {
    border: 5px solid var(--SoftWheat);
    color: var(--Whitish);
    border-radius: 10%;
  }

  .variant-txt {
    font-weight: 500;
    font-size: 30px;
  }

  @media screen and (max-width: 960px) {
    img {
      height: 100%;
      /* object-fit: cover; */
    }
    .img-window {
      background: transparent;
      /* background: -webkit-linear-gradient(to bottom, #ffd194, #d1913c);
      background: linear-gradient(to bottom, #ffd194, #d1913c); */
    }

    .product-name {
      font-size: 30px;
      color: var(--Goldenwheat);
      font-weight: bolder;
    }

    .text-cls {
      font-size: 15px;
      color: var(--Goldenwheat);
    }

    .abt-info {
      font-size: 20px;
      color: var(--Goldenwheat);
      font-weight: 700;
    }
    .description {
      font-size: 17px;
      color: var(--SoftWheat);
    }
    .col-text {
      padding: 0px;
    }

    .variants {
      border: 5px solid var(--SoftWheat);
      border-radius: 10%;
    }

    .variant-txt {
      font-weight: 500;
      color: var(--Whitish);
      font-size: 15px;
    }

    .main-link {
      font-size: 18px;
    }
  }
`;
