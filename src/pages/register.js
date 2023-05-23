import WigHeader from "../components/wigHeader";
import styled, { css } from "styled-components";
import React, { useState, useEffect } from "react";
const RegisterTemplate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 500px;
`;
const SCustomCheckboxWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;
const SCustomCheckbox = styled.input`
  visibility: hidden;
`;
const SCustomLabel = styled.label`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  width: 28px;
  height: 28px;
  position: absolute;
  left: 0;
  top: 0;
  ${({ isChecked }) =>
    isChecked
      ? css`
          background-color: #66bb6a;
          border-color: #66bb6a;
          &:before {
            position: absolute;
            content: "";
            width: 12px;
            height: 6px;
            border: 2px solid #fff;
            border-top: none;
            border-right: none;
            transform: rotate(-45deg);
            left: 7px;
            top: 8px;
          }
        `
      : css`
          opacity: 1;
        `}
`;
const StyledTextArea = styled.textarea`
  width: 100%; /* 컨테이너에 맞게 100%로 설정 */
  max-width: 500px; /* 최대 넓이 제한 */
  height: 88px;
  resize: none;
  overflow: auto;
  display: block;
`;

const Register = () => {
  const [allCheck, setAllCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [localeCheck, setlocaleCheck] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const onClickCheck = () => {
    setIsChecked(!isChecked);
  };
  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setlocaleCheck(true);
      setUseCheck(true);
    } else {
      setAllCheck(false);
      setlocaleCheck(false);
      setUseCheck(false);
    }
  };
  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };
  const localeBtnEvent = () => {
    if (localeCheck === false) {
      setlocaleCheck(true);
    } else {
      setlocaleCheck(false);
    }
  };
  useEffect(() => {
    if (localeCheck === true && useCheck === true) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [localeCheck, useCheck]);

  return (
    <div>
      <WigHeader></WigHeader>
      <RegisterTemplate>
        <form>
          <SCustomCheckboxWrapper>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SCustomCheckbox
                type="checkbox"
                id="all-check"
                checked={allCheck}
                onChange={allBtnEvent}
              ></SCustomCheckbox>
              <SCustomLabel
                style={{ marginTop: "5px" }}
                htmlFor="all-check"
                onClick={onClickCheck}
                isChecked={allCheck}
              ></SCustomLabel>
              <label
                style={{
                  marginLeft: "1.5rem",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  cursor: "pointer",
                  width: "100%",
                  maxWidth: "500px",
                  display: "inline",
                }}
                htmlFor="all-check"
                onClick={onClickCheck}
              >
                WIG 이용약관(필수), 위치기반서비스 이용약관(선택)에 모두
                동의합니다.
              </label>
            </div>
          </SCustomCheckboxWrapper>
          <SCustomCheckboxWrapper>
            <SCustomCheckbox
              type="checkbox"
              id="use-check"
              checked={useCheck}
              onChange={useBtnEvent}
            ></SCustomCheckbox>
            <SCustomLabel
              htmlFor="use-check"
              onClick={onClickCheck}
              isChecked={useCheck}
            ></SCustomLabel>
            <label
              style={{
                marginLeft: "1.5rem",
                fontWeight: "bold",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              htmlFor="use-check"
              onClick={onClickCheck}
            >
              WIG 이용 약관 동의 <span>(필수)</span>
            </label>
          </SCustomCheckboxWrapper>
          <StyledTextArea readOnly>asdfasdfsadf</StyledTextArea>

          <SCustomCheckboxWrapper>
            <SCustomCheckbox
              type="checkbox"
              id="locale-check"
              checked={localeCheck}
              onChange={localeBtnEvent}
            ></SCustomCheckbox>
            <SCustomLabel
              htmlFor="locale-check"
              onClick={onClickCheck}
              isChecked={localeCheck}
            ></SCustomLabel>
            <label
              style={{
                marginLeft: "1.5rem",
                fontWeight: "bold",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              htmlFor="locale-check"
              onClick={onClickCheck}
            >
              위치기반서비스 이용약관 동의 <span>(선택)</span>
            </label>
          </SCustomCheckboxWrapper>
          <StyledTextArea readOnly>asdfasdfsadf</StyledTextArea>

          <button>취소</button>
          <button disabled={!useCheck}>확인</button>
        </form>
      </RegisterTemplate>
    </div>
  );
};
export default Register;
