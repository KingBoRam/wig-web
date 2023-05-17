import React from "react";
import styled from "styled-components";
import { RxDividerVertical } from "react-icons/rx";
import { Link } from "react-router-dom";

const FindBlock = styled.div`
  display: flex;
  justify-content: center;
`;
const ABlock = styled(Link)`
  color: black;
  font-size: 0.9rem;
  text-decoration: none;
`;

function WigFind() {
  return (
    <FindBlock>
      <ABlock to="/login/findId">아이디 찾기</ABlock>
      <RxDividerVertical style={{ marginTop: "3px" }} />
      <ABlock to="/login/findPwd">비밀번호 찾기</ABlock>
      <RxDividerVertical style={{ marginTop: "3px" }} />
      <ABlock to="/login/register">회원가입</ABlock>
    </FindBlock>
  );
}
export default WigFind;
