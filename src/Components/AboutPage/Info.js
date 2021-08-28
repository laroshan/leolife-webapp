import React from "react";
import TitleComponent from "../TitleComponent";
import leologo from "../../images/LeoLife01.jpg";
function Info() {
  return (
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
          <p className="text-lead text-muted my-3">
            We are the leading providers in home care products for your every
            kind of need.
          </p>
          <p className="text-lead text-muted my-3">
            No.14, Circular Road, hatton.
            <br /> 0512225770
            <br /> 0773462913
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
