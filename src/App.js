import "./App.css";
import { createGlobalStyle } from "styled-components";
import WigTemplate from "./compontents/wigtemplate";
import WigHeader from "./compontents/wigHeader";
import WigInput from "./compontents/wigInput";

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
      </WigTemplate>
    </>
  );
}

export default App;
