import { useState } from "react";
import styled, { css } from "styled-components";

export default function RoundCheckbox({ checked, text }) {
  const [isChecked, setIsChecked] = useState(checked);

  const onClickCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <SCustomCheckboxWrapper>
        <SCustomCheckbox type="checkbox" chekced={checked} id="check" />
        <SCustomLabel
          onClick={onClickCheck}
          isChecked={isChecked}
          htmlFor="check"
        ></SCustomLabel>
      </SCustomCheckboxWrapper>
      <div>
        <label
          style={{
            marginLeft: "10px",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
          htmlFor="check"
          onClick={onClickCheck}
        >
          {text}
        </label>
      </div>
    </>
  );
}

const SCustomCheckboxWrapper = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
`;

const SCustomCheckbox = styled.input`
  visibility: hide;
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
