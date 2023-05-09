import React from "react";
import styled from "styled-components";
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
function WigTemplate({ children }) {
  return (
    <WigTemplateContainer>
      <WigTemplateBlock>{children}</WigTemplateBlock>
    </WigTemplateContainer>
  );
}
export default WigTemplate;
