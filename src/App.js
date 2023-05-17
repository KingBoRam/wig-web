import "./App.css";
import { Route, Routes } from "react-router-dom";
import Basic from "./Basic";
import WigTemplate from "./Logincomponents/wigtemplate";
import FindId from "./Logincomponents/findId";
import FindPwd from "./Logincomponents/findPwd";
import Register from "./Logincomponents/register";
import NotFound from "./notFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Basic />} />
      <Route path="/login" element={<WigTemplate />} />
      <Route path="/login/findId" element={<FindId />} />
      <Route path="/login/findPwd" element={<FindPwd />} />
      <Route path="/login/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
