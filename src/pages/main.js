import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { LoginState } from "../Recoil/loginstate";
import Modal from "../components/modal";
import WigTemplate from "./wigtemplate";

const Basic = () => {
  const loginState = useRecoilValue(LoginState);
  if (loginState === false) {
    return (
      <>
        <div>basic</div>

        <Modal name="로그인">
          <WigTemplate></WigTemplate>
        </Modal>
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
