import React from "react";
import TitleComponent from "../TitleComponent";
import leologo from "../../images/LeoLife01.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSquare,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

// import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";
function Info() {
  return (
    <InfoWrapper>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={leologo}
              className="img-fluid img-thumbnail"
              alt="aboutus"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <TitleComponent title={"About Us"} center={true} />
            <p className="blockquote  my-3 d-flex justify-content-center info-quote">
              "Happiness is a Clean & Oragnized Home"
            </p>
            <p className="text-lead ">
              We aim to provide home care products for your every kind of need
              to setup your home as a better place.
            </p>
            <br />

            <p className="text-main  my-3 d-flex justify-content-start">
              <FontAwesomeIcon icon={faHome} className="mx-2 " />
              No.14, Circular Road, Hatton.
            </p>

            <p className="text-main  my-3 d-flex justify-content-start">
              <FontAwesomeIcon icon={faPhoneSquare} className="mx-2 " />
              0512225770
            </p>

            <p className="text-main  my-3 d-flex justify-content-start">
              <FontAwesomeIcon icon={faPhoneSquare} className="mx-2" />
              0773462913
            </p>
            <p className="text-main my-3 d-flex justify-content-start">
              {" "}
              <FontAwesomeIcon icon={faEnvelope} className="mx-2 " />
              ldleolife@gmail.com
            </p>
          </div>
        </div>
        {/* <div className="row info-box">
          <div className="col-6 mx-auto col-sm-8 col-md-6 col-lg-4 info-col">
            <p className="info-txt">0773462913</p>
          </div>
          <div className="col-6 mx-auto col-sm-8 col-md-6 col-lg-4 info-col">
            <p className="info-txt">0773462913</p>
          </div>
          <div className="col-6 mx-auto col-sm-8 col-md-6 col-lg-4 info-col">
            <p className="info-txt">0773462913</p>
          </div>
        </div> */}
      </div>
    </InfoWrapper>
  );
}

export default Info;

const InfoWrapper = styled.div`
  color: var(--SoftWheat);
  .text-lead {
    font-size: 25px;
    justify-content: baseline;
    align-items: baseline;
    font-weight: 700;
  }

  .text-main {
    font-size: 19px;
    justify-content: baseline;
    align-items: baseline;
    font-weight: 500;
  }

  .info-quote {
    color: var(--Whitish);
    font-weight: 900;
    font-size: 30px;
    padding-bottom: 15px;
  }
  /* .media:screen(width:960px){

  } */
`;
