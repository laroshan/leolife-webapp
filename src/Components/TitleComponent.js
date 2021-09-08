import React from "react";
import styled from "styled-components";
function TitleComponent({ title, center }) {
  return (
    <TitleWrapper className="row" center={center}>
      <div className="col-10 mx-auto col-sm-6 col-md-6 col-lg-6">
        <h2 className="text-title">{title}</h2>
        <div className="title-under-line" />
      </div>
    </TitleWrapper>
  );
}

export default TitleComponent;

const TitleWrapper = styled.div`
  text-align: ${(props) => (props.center ? "center" : "left")};
  color: var(--Goldenwheat);
  .title-under-line {
    height: 0.25rem;
    width: 7rem;
    background: #ba8b02; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to bottom,
      #181818,
      #ba8b02
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to bottom,
      #181818,
      #ba8b02
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    margin: ${(props) => (props.center ? "0 auto" : "0")};
  }
`;
