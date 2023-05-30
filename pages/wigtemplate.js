import React from "react";
import styled from "styled-components";
import WigHeader from "../components/wigHeader";
import WigInput from "../components/wigInput";
import WigFind from "../components/wigFind";

const WigTemplateContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WigTemplateBlock = styled.div`
  width: 500px;
  height: 600px;
`;

function WigTemplate() {
  return (
    <>
      <WigTemplateContainer>
        <WigTemplateBlock>
          <WigHeader color="#1971c2"></WigHeader>
          <WigInput></WigInput>
          <WigFind></WigFind>
        </WigTemplateBlock>
      </WigTemplateContainer>
    </>
  );
}
export default WigTemplate;
