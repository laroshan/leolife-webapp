import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  CardActionArea,
  Button,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import styled from "styled-components";
// import "./style.css";

const CustomCard = ({ product }) => {
  return (
    <CardWrapper className="col-9 mx-auto col-sm-7 col-md-5 col-lg-3 my-3">
      <Card className="custom-card">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            // height="5"
            // width="5"
            className="card-image"
            image={product.image}
            title="Contemplative Reptile"
          />
          <CardContent className="content">
            <Typography
              className="title"
              gutterBottom
              variant="h5"
              component="h2"
            >
              {product.title}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Typography
            className="basket-item-price"
            gutterBottom
            variant="h5"
            component="h2"
          >
            {product.price}
          </Typography>
        </CardActions>

        <CardActions className="actions-content">
          <>
            <Typography
              className="price"
              gutterBottom
              variant="h5"
              component="h2"
            >
              {product.price}
            </Typography>
            <Button
              size="large"
              className="custom-button"
              onClick={() => {
                // addProduct(product.id, 1);
              }}
            >
              <ShoppingCart /> Add to basket
            </Button>
          </>

          <>
            <Button
              size="small"
              color="secondary"
              variant="outlined"
              onClick={() => {
                // RemoveItemFromBasket(product.id);
              }}
            >
              Remove
            </Button>
            <>
              <Button
                size="small"
                variant="outlined"
                className="increase-product-quantity"
                onClick={() => {
                  //   updateProduct(product.id, product.quantity + 1);
                }}
              >
                +
              </Button>
              <Typography>&nbsp;{product.quantity}&nbsp;</Typography>
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                // onClick={() => {
                //   updateProduct(product.id, product.quantity - 1);
                // }}
              >
                -
              </Button>
            </>
          </>
        </CardActions>
      </Card>
    </CardWrapper>
  );
};

export default CustomCard;

const CardWrapper = styled.div`
  .MuiCard-root.custom-card {
    background-color: #21262d;
    color: #c9d1d9;
    transition: all 0.5s ease-in-out;
  }

  .MuiCard-root.custom-card:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px 5px #03dac5;
  }

  .custom-card .content {
    padding-bottom: 0;
  }

  .custom-card .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .custom-card .card-image {
    padding: 10px 10px 0 10px;
  }

  .custom-card p {
    color: #c9d1d9;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .custom-card .price {
    margin-top: 10px;
    color: #03dac5;
  }

  .custom-card .basket-item-price {
    color: #03dac5;
    margin-bottom: 0;
  }

  .actions-content {
    display: flex;
  }

  .actions-content h2 {
    flex-grow: 1;
  }

  .custom-card .custom-button {
    color: #03dac5;
  }

  .custom-card .custom-button:hover {
    background-color: #bb86fc;
    color: #c9d1d9;
  }

  .custom-card .custom-button svg {
    margin-right: 10px;
  }

  .custom-card .increase-product-quantity {
    color: #03dac5;
    border-color: #03dac5;
  }
`;
