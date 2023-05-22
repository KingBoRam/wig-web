import React from "react";
import styled from "styled-components";

const WigHeaderBlock = styled.div`
  h1 {
    text-align: center;
    color: black;
    /* text-shadow: -2px 0 #374955, 0 2px #374955, 2px 0 #374955, 0 -2px #374955; */
    font-size: 70px;
    font-family: "KBO-Dia-Gothic_bold", serif;
    font-weight: 700;
    line-height: 1.2; /*  */
    margin: 30px;
    letter-spacing: 10px;
  }
`;

function WigHeader() {
  return (
    <WigHeaderBlock>
      <h1>WIG</h1>
    </WigHeaderBlock>
  );
}

export default WigHeader;
