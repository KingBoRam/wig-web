import React from "react";
import styled from "styled-components";
const Buttonblock = styled.div`
  display: flex;
  justify-content: center;
`;
const CircleButton = styled.button`
  background: white;
  cursor: pointer;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  font-size: 30px;
  border: none;
  font-family: "BMJUA";
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const IconButtonGoogle = styled.a`
  width: 60px;
  height: 60px;
  background-image: url("/image/구글.png");
  background-size: cover;
  cursor: pointer;
  margin-right: 1rem;
`;
const IconButtonNaver = styled.a`
  width: 60px;
  height: 60px;
  background-image: url("/image/네이버.png");
  background-size: cover;
  cursor: pointer;
`;
const IconButtonKakao = styled.a`
  width: 60px;
  height: 60px;
  background-image: url("/image/카카오톡.png");
  background-size: cover;
  cursor: pointer;
  margin-right: 1rem;
`;
function WigLoginButton() {
  return (
    <>
      <Buttonblock>
        <CircleButton type="submit">로그인</CircleButton>
      </Buttonblock>
      <Buttonblock>
        <IconButtonGoogle />
        <IconButtonKakao />
        <IconButtonNaver />
      </Buttonblock>
    </>
  );
}
export default WigLoginButton;
