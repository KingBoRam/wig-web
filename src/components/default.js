import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Defaultstyle = (styled.div = `
    background : white;
    display : flex;
    justify-content:center;
`);

function Default() {
  return (
    <Defaultstyle>
      <Outlet></Outlet>
    </Defaultstyle>
  );
}

export default Default;
