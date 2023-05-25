import React from "react";
import styled, { css } from "styled-components";
import { MdClear } from "react-icons/md";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { LoginState } from "../Recoil/loginstate";
import { useNavigate } from "react-router-dom";

//디자인
const RemoveId = styled.span`
  display: flex;
  color: black;
  font-size: 17px;
  cursor: pointer;
  display: none;
  ${(props) =>
    props.revealId &&
    css`
      display: initial;
    `}
`;
const RemovePwd = styled.span`
  display: flex;
  color: black;
  font-size: 17px;
  cursor: pointer;
  display: none;
  ${(props) =>
    props.revealPwd &&
    css`
      display: initial;
    `}
`;
const InputBlock = styled.div`
  flex: 1;
`;
const InputTextBlock = styled.div`
  background: white;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #dee2e6;
  width: 85%;
  outline: none;
  font-size: 18px;
  margin: 0 auto;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
`;
const Input = styled.input`
  background: white;
  width: 100%;
  border: none;
  font-size: 18px;
  outline: none;
  text-decoration: none;
`;
const Buttonblock = styled.div`
  display: flex;
  justify-content: center;
`;
const CircleButton = styled.button`
  background: #1971c2;
  color : white;
  cursor: pointer;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  font-size: 30px;
  border: none;
  font-family: "KBO-Dia-Gothic_bold";, serif;
  margin-top: 1.5rem;
  margin-bottom: 0.5em;
`;
const IconButtonGoogle = styled.a`
  width: 50px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 50%;
  background-image: url("/image/구글.png");
  background-size: cover;
  cursor: pointer;
  margin-right: 1rem;
`;
const IconButtonNaver = styled.a`
  width: 50px;
  height: 50px;
  background-image: url("/image/네이버.png");
  background-size: cover;
  cursor: pointer;
`;
const IconButtonKakao = styled.a`
  width: 50px;
  height: 50px;
  background-image: url("/image/카카오톡.png");
  background-size: cover;
  cursor: pointer;
  margin-right: 1rem;
`;
function WigInput() {
  //id창에 text있으면 X 버튼
  const [valueId, setValueId] = useState("");
  const [revealId, setRevealId] = useState(false);
  const onChangeId = (e) => {
    setValueId(e.target.value);
    setRevealId(true);
  };
  const onClickId = () => {
    setValueId("");
    setRevealId(false);
  };
  //pwd창에 text있으면 X 버튼
  const [valuePwd, setValuePwd] = useState("");
  const [revealPwd, setRevealPwd] = useState(false);
  const onChangePwd = (e) => {
    setValuePwd(e.target.value);
    setRevealPwd(true);
  };
  const onClickPwd = () => {
    setValuePwd("");
    setRevealPwd(false);
  };
  //로그인상태관리
  const setLoginState = useSetRecoilState(LoginState);
  const navigate = useNavigate();
  const loginInformation = false;
  const [falseText, setfalseText] = useState(null);
  const onClick = () => {
    if (loginInformation) {
      setLoginState(loginInformation);
      console.log(loginInformation);
      navigate("/");
    } else if (!loginInformation) {
      setfalseText("아이디 혹은 비밀번호가 틀렸습니다.");
    }
  };
  return (
    <InputBlock>
      <form>
        <InputTextBlock className="login">
          <Input
            type="email"
            placeholder="이메일"
            value={valueId}
            onChange={onChangeId}
          ></Input>
          <RemoveId revealId={revealId} onClick={onClickId}>
            <MdClear></MdClear>
          </RemoveId>
        </InputTextBlock>
        <InputTextBlock className="pwd">
          <Input
            type="password"
            placeholder="비밀번호"
            value={valuePwd}
            onChange={onChangePwd}
          ></Input>
          <RemovePwd revealPwd={revealPwd} onClick={onClickPwd}>
            <MdClear></MdClear>
          </RemovePwd>
        </InputTextBlock>
      </form>
      <div
        style={{
          textAlign: "center",
          marginTop: "1.5rem",
          height: "21px",
          color: "red",
          fontSize: "0.8rem",
        }}
      >
        {falseText}
      </div>
      <Buttonblock>
        <CircleButton type="submit" onClick={onClick}>
          로그인
        </CircleButton>
      </Buttonblock>
      <Buttonblock>
        <IconButtonGoogle />
        <IconButtonKakao />
        <IconButtonNaver />
      </Buttonblock>
    </InputBlock>
  );
}

export default React.memo(WigInput);
