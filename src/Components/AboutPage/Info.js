import React from "react";
import TitleComponent from "../TitleComponent";
import leologo from "../../images/LeoLife01.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons";

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

            <p className="text-lead  my-3 d-flex justify-content-start">
              We’re driven by our purpose: to make sustainable living
              commonplace.
            </p>

            <p className="text-lead  my-3 d-flex justify-content-start">
              We are the leading providers in home care products for your every
              kind of need.
            </p>
            <p className="text-lead  my-3 d-flex justify-content-start">
              No.14, Circular Road, Hatton.
            </p>

            <p className="text-lead  my-3 d-flex justify-content-start">
              <FontAwesomeIcon icon={faPhoneSquare} className="mx-2 " />
              0512225770
            </p>

            <p className="text-lead  my-3 d-flex justify-content-start">
              <FontAwesomeIcon icon={faPhoneSquare} className="mx-2" />
              0773462913
            </p>
            <p className="text-lead  my-3 d-flex justify-content-start">
              {" "}
              <FontAwesomeIcon icon={faEnvelope} className="mx-2 " />
              ldleolife@gmail.com
            </p>
          </div>
        </div>
        <div className="row info-box">
          <div className="col-10 mx-auto col-sm-6 col-md-6 col-lg-4">
            <p>0773462913</p>
          </div>
        </div>
      </div>
    </InfoWrapper>
  );
}

export default Info;

const InfoWrapper = styled.div`
  .text-lead {
    font-size: 25px;
    justify-content: baseline;
    align-items: baseline;
  }
  .info-box {
    background: var(--mainBg);
  }

  /* .media:screen(width:960px){

  } */
`;
