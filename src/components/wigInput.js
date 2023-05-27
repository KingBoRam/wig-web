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
const CustomCheckboxWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;
const CustomCheckbox = styled.input`
  visibility: hidden;
`;
const CustomLabel = styled.label`
  background-color: #fff;
  margin-top: -0.5rem;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: absolute;
  margin-left: 7px;
  left: 13;
  top: 10;
  &:before {
    position: absolute;
    content: "";
    width: 8px;
    height: 4px;
    border: 2px solid #ced4da;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    left: 5px;
    top: 6px;
  }
  ${({ isChecked }) =>
    isChecked
      ? css`
          background-color: #4dabf7;
          border-color: #4dabf7;
          &:before {
            position: absolute;
            content: "";
            width: 8px;
            height: 4px;
            border: 2px solid #fff;
            border-top: none;
            border-right: none;
            transform: rotate(-45deg);
            left: 5px;
            top: 6px;
          }
        `
      : css`
          opacity: 1;
        `}
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
  //로그인상태유지
  const [loginCheck, setLoginCheckCheck] = useState(false);
  const loginCheckBtnEvent = () => {
    if (loginCheck === false) {
      setLoginCheckCheck(true);
    } else {
      setLoginCheckCheck(false);
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
      <CustomCheckboxWrapper>
        <div>
          <CustomCheckbox
            type="checkbox"
            id="all-check"
            checked={loginCheck}
            onChange={loginCheckBtnEvent}
          ></CustomCheckbox>
          <CustomLabel htmlFor="all-check" isChecked={loginCheck}></CustomLabel>
          <label
            style={{
              marginLeft: "2rem",
              fontSize: "0.8rem",
              cursor: "pointer",
              color: "gray",
              marginTop: "-0.5rem",
            }}
            htmlFor="all-check"
          >
            로그인 상태 유지
          </label>
        </div>
      </CustomCheckboxWrapper>
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
