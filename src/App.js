import "./App.css";
import { Route, Routes } from "react-router-dom";
import Basic from "./pages/main";
import NotFound from "./pages/notFound";
import WigTemplate from "./pages/wigtemplate";
import FindId from "./pages/findId";
import FindPwd from "./pages/findPwd";
import Register from "./pages/register";
import Mypage from "./pages/mypage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Basic />} />
      <Route path="/login" element={<WigTemplate />} />
      <Route path="/login/findId" element={<FindId />} />
      <Route path="/login/findPwd" element={<FindPwd />} />
      <Route path="/login/register" element={<Register />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
