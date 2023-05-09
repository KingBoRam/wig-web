import React from "react";
import styled from "styled-components";

const WigHeaderBlock = styled.div`
  h1 {
    text-align: center;
    color: white;
    text-shadow: -2px 0 #374955, 0 2px #374955, 2px 0 #374955, 0 -2px #374955;
    font-size: 70px;
    font-family: "BMJUA";, serif;
    font-weight: 400;
    line-height: 1.2;
    margin : 30px;
  }
`;
const MiniBlock = styled.div`
  font-family: "BMJUA";
  font-size: 40px;
  color: black;
  text-shadow: none;
`;
function WigHeader() {
  return (
    <WigHeaderBlock>
      <h1>
        날씨는 맑음 <br />
        <MiniBlock>Weather Is Good!</MiniBlock>
      </h1>
    </WigHeaderBlock>
  );
}

export default WigHeader;
