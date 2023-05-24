import React from "react";
import styled from "styled-components";
import WigHeader from "../components/wigHeader";
import WigInput from "../components/wigInput";
import WigFind from "../components/wigFind";
import { Link } from "react-router-dom";

const WigTemplateContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WigTemplateBlock = styled.div`
  width: 500px;
  height: 600px;
  background: #d0ebff;
  border-radius: 80px;
`;

function WigTemplate() {
  return (
    <>
      <WigTemplateContainer>
        <WigTemplateBlock>
          <Link to="/" style={{ textDecoration: "none" }}>
            <WigHeader></WigHeader>
          </Link>
          <WigInput></WigInput>
          <WigFind></WigFind>
        </WigTemplateBlock>
      </WigTemplateContainer>
    </>
  );
}
export default WigTemplate;
