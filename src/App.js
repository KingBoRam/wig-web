import "./App.css";
import { Route, Routes } from "react-router-dom";
import WigTemplate from "./components/wigtemplate";
import FindId from "./components/findId";
import FindPwd from "./components/findPwd";
import SignIn from "./components/signIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WigTemplate />} />
      <Route path="/findId" element={<FindId />} />
      <Route path="/findPwd" element={<FindPwd />} />
      <Route path="/signIn" element={<SignIn />} />
    </Routes>
  );
}

export default App;
