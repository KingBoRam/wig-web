import "./App.css";
import { createGlobalStyle } from "styled-components";
import WigTemplate from "./compontents/wigtemplate";
import WigHeader from "./compontents/wigHeader";
import WigInput from "./compontents/wigInput";
import WigFind from "./compontents/wigFind";
import WigLoginButton from "./compontents/wigLoginButton";

const GlobalStyle = createGlobalStyle`body{
  background:white;
}`;

function App() {
  return (
    <>
      <GlobalStyle />
      <WigTemplate>
        <WigHeader></WigHeader>
        <WigInput></WigInput>
        <WigFind></WigFind>
        <WigLoginButton></WigLoginButton>
      </WigTemplate>
    </>
  );
}

export default App;
