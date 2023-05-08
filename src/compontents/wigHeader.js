import React from "react";
import styled from "styled-components";

const WigHeaderBlock = styled.div`
  h1 {
    text-align: center;
    color: white;
    text-shadow: -2px 0 #374955, 0 2px #374955, 2px 0 #374955, 0 -2px #374955;
    font-size: 55px;
    font-family: "BMJUA";
    font-weight: 400;
    line-height: 1.2;
  }
`;

function WigHeader() {
  return (
    <WigHeaderBlock>
      <h1>
        날씨는 맑음 <br />
        Weather Is Good!
      </h1>
    </WigHeaderBlock>
  );
}

export default WigHeader;
