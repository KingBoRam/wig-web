import React from "react";
import styled, { css } from "styled-components";
import { MdClear } from "react-icons/md";
import { useState } from "react";

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
  outline: none;
  font-size: 18px;
`;

function WigInput() {
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
  return (
    <InputBlock>
      <InputTextBlock className="login">
        <Input
          type="text"
          placeholder="아이디"
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
    </InputBlock>
  );
}

export default React.memo(WigInput);
