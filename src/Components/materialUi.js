import React from "react";
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import styled from "styled-components";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";

function Banner(props) {
  //   if (props.newProp) console.log(props.newProp);
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : "left";
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={12 / totalItems} key="content">
      <CardContent className="Content">
        <Typography className="Title">{props.item.Name}</Typography>

        <Typography className="Caption">{props.item.Caption}</Typography>
        {/* 
        <Button variant="outlined" className="ViewButton">
          View Now
        </Button> */}
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={12 / totalItems} key={item.Name}>
        <CardMedia className="Media" image={item.Image} title={item.Name}>
          <Typography className="MediaCaption">{item.Name}</Typography>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
}

const items = [
  {
    Name: "Safety Essentials",
    Caption:
      "COVID-19 is spreading in our community, Stay safe by taking some simple precautions, such as physical distancing, wearing a mask, keeping rooms well ventilated, avoiding crowds, cleaning your hands, and coughing into a bent elbow or tissue.",
    contentPosition: "left",
    Items: [
      {
        Name: "Wear Mask",
        Image: "https://source.unsplash.com/featured/?Protective mask",
      },
      {
        Name: "Be Hygiene",
        Image: "https://source.unsplash.com/featured/?sanitizer",
      },
    ],
  },
  {
    Name: "Kitchen Appliances & Accessories",
    Caption:
      "Every kind of kitchen appliances and accessories to make your kitchen a better place and also the cleaning stuffs also available at us. ",
    contentPosition: "middle",
    Items: [
      {
        Name: "Kitchen is a",
        Image:
          "https://images.unsplash.com/photo-1594394490667-0c1b4405a945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
      },
      {
        Name: "Heart at Home",
        Image:
          "https://images.unsplash.com/photo-1580929753603-10519c6e480a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      },
    ],
  },
  {
    Name: "Home Care Products",
    Caption:
      "We’re reimagining the future of cleaning. From what goes into our cleaning and laundry products, to give people high-performing, affordable products that are kinder to them and the planet. Clean home. Clean planet. Clean Future.",
    contentPosition: "right",
    Items: [
      {
        Name: "Clean Home is a",
        Image:
          "https://images.unsplash.com/photo-1493953659556-556b14bdaca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80",
      },
      {
        Name: "Happy Home",
        Image:
          "https://images.unsplash.com/photo-1550963295-019d8a8a61c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
      },
    ],
  },
];

class BannerExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: true,
      animation: "fade",
      indicators: true,
      timeout: 500,
      navButtonsAlwaysVisible: false,
      navButtonsAlwaysInvisible: false,
      cycleNavigation: true,
    };

    autoBind(this);
  }

  render() {
    return (
      <BannerWrapper>
        <div style={{ color: "#494949" }}>
          <Carousel
            className="Example"
            autoPlay={this.state.autoPlay}
            animation={this.state.animation}
            indicators={this.state.indicators}
            timeout={this.state.timeout}
            cycleNavigation={this.state.cycleNavigation}
            navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
            navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
            // next={(now, previous) =>
            //   console.log(
            //     `Next User Callback: Now displaying child${now}. Previously displayed child${previous}`
            //   )
            // }
            // prev={(now, previous) =>
            //   console.log(
            //     `Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`
            //   )
            // }
            // onChange={(now, previous) =>
            //   console.log(
            //     `OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`
            //   )
            // }
            //   fullHeightHover={false}
            //   navButtonsProps={{
            //     style: { backgroundColor: "cornflowerblue", borderRadius: 0 },
            //   }}
            //   navButtonsWrapperProps={{ style: { bottom: "0", top: "unset" } }}
            //   indicatorContainerProps={{ style: { margin: "20px" } }}
            //   NextIcon="next"
          >
            {items.map((item, index) => {
              return (
                <Banner
                  item={item}
                  key={index}
                  contentPosition={item.contentPosition}
                />
              );
            })}
          </Carousel>
        </div>
      </BannerWrapper>
    );
  }
}

export default BannerExample;

const BannerWrapper = styled.div`
  .Banner {
    height: 400px;
    position: relative;

    .Media {
      background-color: var(--GoldenWheat);
      height: 100%;
      overflow: hidden;

      position: relative;

      .MediaCaption {
        text-overflow: ellipsis;

        position: absolute;
        bottom: 0;

        padding: 15px;
        color: var(--Whitish);
        background-color: black;

        opacity: 0.6;

        width: 100%;
        height: 10%;

        font: {
          size: $header-font-size;
          weight: 200;
        }

        transition: 300ms;
        /* cursor: pointer;
        &:hover {
          opacity: 0.8;
        } */
      }

      transition: 300ms;
      /* cursor: pointer; */
      &:hover {
        filter: brightness(115%);
      }
    }

    .BannerGrid {
      height: 100%;
      position: relative;
    }

    .Content {
      background: #000000; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to bottom,
        #434343,
        #000000
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to bottom,
        #434343,
        #000000
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      height: 100%;

      position: relative;

      /* cursor: pointer; */

      padding: 30px;

      transition: 300ms;

      &:hover,
      &:active {
        background-color: rgb(87, 17, 17);
      }

      .Title {
        font-size: 40px;
        font-weight: 500;
      }

      .Caption {
        margin-top: 10px;
        font-size: 21px;
        background: #e6dada; /* fallback for old browsers */
        background: -webkit-linear-gradient(
          to bottom,
          #274046,
          #e6dada
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
          to bottom,
          #274046,
          #e6dada
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .ViewButton {
        margin-top: 40px;
        color: white;

        font-size: 25px;
        border: 3px solid white;
        text-transform: capitalize;

        transition: 200ms;
      }
    }
  }
`;

// $blue: rgb(72, 109, 209);
// $blue-hover: rgb(63, 97, 189);
// $white-blue: rgb(90, 123, 212);
// $whiter-blue: rgb(109, 136, 216);
// $grey-blue: #557a95;

// $mui-primary: #3f51b5;
// $mui-secondary: #f50057;

// $orange: orange;

// $red: rgb(196, 37, 37);
// $red-dim: rgb(207, 71, 71);
// $red-hover: rgb(177, 33, 33);
// $red-active: rgb(158, 29, 29);

// $dark-red: rgb(119, 24, 24);
// $dark-red-hover: rgb(104, 20, 20);
// $dark-red-active: rgb(87, 17, 17);

// $green: #159c2b;

// $not-white: rgb(250, 250, 250);
// $almost-white: rgb(241, 241, 241);
// $basically-white: rgb(235, 235, 235);
// $less-white: rgb(230, 230, 230);
// $lesser-white: rgb(216, 216, 216);
// $grey: rgb(175, 175, 175);
// $graphite-hover: rgb(87, 87, 87);
// $graphite: rgb(73, 73, 73);

// $font: Ubuntu, Helvetica, Arial, sans-serif;

// $smaller-font-size: 12px;
// $small-font-size: 15px;
// $normal-font-size: 18px;
// $bigger-font-size: 21px;
// $header-font-size: 25px;
// $big-header-font-size: 30px;
// $huge-font-size: 40px;
