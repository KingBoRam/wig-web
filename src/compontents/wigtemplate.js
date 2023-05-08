import React from "react";
import styled from "styled-components";
const WigTemplateContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WigTemplateBlock = styled.div`
  width: 30rem;
  height: 38rem;
  background: #d0ebff;
  border-radius: 8rem;
`;
function WigTemplate({ children }) {
  return (
    <WigTemplateContainer>
      <WigTemplateBlock>{children}</WigTemplateBlock>
    </WigTemplateContainer>
  );
}
export default WigTemplate;
