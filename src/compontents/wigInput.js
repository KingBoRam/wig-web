import React from "react";
import styled from "styled-components";
import { MdClear } from "react-icons/md";
const Remove = styled.span`
  display: flex;
  color: black;
  font-size: 17px;
  cursor: pointer;
  display: none;
`;
const InputBlock = styled.div`
  flex: 1;
`;
const InsertForm = styled.form``;
const InputTextBlock = styled.div`
  background: white;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #dee2e6;
  width: 90%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  &:focus-within {
    ${Remove} {
      display: initial;
    }
  }
`;
const Input = styled.input`
  background: white;
  width: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function WigInput() {
  return (
    <InputBlock>
      <InsertForm>
        <InputTextBlock className="login">
          <Input type="text" placeholder="아이디"></Input>
          <Remove>
            <MdClear></MdClear>
          </Remove>
        </InputTextBlock>
        <InputTextBlock className="pwd">
          <Input type="text" placeholder="비밀번호"></Input>
          <Remove>
            <MdClear></MdClear>
          </Remove>
        </InputTextBlock>
      </InsertForm>
    </InputBlock>
  );
}

export default WigInput;
