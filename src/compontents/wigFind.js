import React from "react";
import styled from "styled-components";
import { RxDividerVertical } from "react-icons/rx";

const FindBlock = styled.div`
  display: flex;
  justify-content: center;
`;
const ABlock = styled.a`
  color: black;
  font-size: 0.9rem;
  text-decoration: none;
`;

function WigFind() {
  return (
    <FindBlock>
      <ABlock href="1">아이디 찾기</ABlock>
      <RxDividerVertical style={{ marginTop: "3px" }} />
      <ABlock href="2">비밀번호 찾기</ABlock>
      <RxDividerVertical style={{ marginTop: "3px" }} />
      <ABlock href="3">회원가입</ABlock>
    </FindBlock>
  );
}
export default WigFind;
