import CircleLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import React, { useState } from "react";
let color = "#a39274";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: color;
`;
function Spinner() {
  return (
    <div>
      <CircleLoader color={color} loading={true} css={override} size={120} />
    </div>
  );
}

export default Spinner;
