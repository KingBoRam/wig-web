import React from "react";
import WigHeader from "../components/wigHeader";
import styled from "styled-components";

import RoundCheckbox from "../components/checkbox";
const RegisterTemplate = styled.div`
  display: flex;
  flex-direction: column;
  jutify-content: center;
  align-items: center;
`;

const Register = () => {
  return (
    <RegisterTemplate>
      <WigHeader></WigHeader>
      <RoundCheckbox></RoundCheckbox>
    </RegisterTemplate>
  );
};
export default Register;
