import React from "react";
import TitleComponent from "../TitleComponent";
import leologo from "../../images/LeoLife01.jpg";

// import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";
function Info() {
  return (
    <InfoWrapper>
      <div className="container">
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
            <p className="text-lead  my-3">
              We are the leading providers in home care products for your every
              kind of need.
            </p>
            <p className="text-lead  my-3">
              No.14, Circular Road, hatton.
              <br />
              <faPhone /> 0512225770
              <br /> <faPhone />
              0773462913
            </p>
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
  }

  /* .media:screen(width:960px){

  } */
`;
