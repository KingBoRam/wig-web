import "./App.css";
import { Route, Routes } from "react-router-dom";
import Basic from "./pages/main";
import NotFound from "./pages/notFound";
import FindId from "./pages/findId";
import FindPwd from "./pages/findPwd";
import Agree from "./pages/agree";
import Mypage from "./pages/mypage";
import Register from "./pages/register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Basic />} />
        <Route path="/findId" element={<FindId />} />
        <Route path="/findPwd" element={<FindPwd />} />
        <Route path="/agree" element={<Agree />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
