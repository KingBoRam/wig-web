import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { LoginState } from "../Recoil/loginstate";

const Basic = () => {
  const loginState = useRecoilValue(LoginState);
  if (loginState === false) {
    return (
      <>
        <div>basic</div>
        <Link to="/login">로그인</Link>
      </>
    );
  } else {
    return (
      <>
        <div>basic</div>
        <Link to="/mypage">마이페이지</Link>
      </>
    );
  }
};
export default Basic;
