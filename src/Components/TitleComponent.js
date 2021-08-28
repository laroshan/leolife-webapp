import React from "react";
import styled from "styled-components";
function TitleComponent({ title, center }) {
  return (
    <TitleWrapper className="row" center={center}>
      <div className="col">
        <h2 className="text-title">{title}</h2>
        <div className="title-under-line" />
      </div>
    </TitleWrapper>
  );
}

export default TitleComponent;

const TitleWrapper = styled.div`
  text-align: ${(props) => (props.center ? "center" : "left")};
  .title-under-line {
    height: 0.25rem;
    width: 7rem;
    background: var(--primaryColor);
    margin: ${(props) => (props.center ? "0 auto" : "0")};
  }
`;
