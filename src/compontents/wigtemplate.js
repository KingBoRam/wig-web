import React from "react";
import styled from "styled-components";
const WigTemplateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const WigTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 600px;
  background: #d0ebff;
  border-radius: 50px;
  margin: 0 auto;
`;

function WigTemplate({ children }) {
  return (
    <WigTemplateContainer>
      <WigTemplateBlock>{children}</WigTemplateBlock>;
    </WigTemplateContainer>
  );
}

export default WigTemplate;
