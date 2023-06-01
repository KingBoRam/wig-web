import React from "react";
import WigHeader from "../components/wigHeader";
import styled from "styled-components";
import { AiOutlineUser, AiOutlineLock, AiOutlineStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InputTextBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 445px;
  height: 35px;
  border: 1px solid #dee2e6;
  outline: none;
  font-size: 18px;
  margin: 0 auto;
  display: flex;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 18px;
  outline: none;
  text-decoration: none;
  margin-left: 10px;
`;
const StyledButton = styled.button`
  width: 467px;
  padding: 14px;
  font-size: 1.3rem;
  font-weight: 1000;
  margin: 1rem;
  border-radius: 5px;
  border: none;
  margin-top: 2rem;
  cursor: pointer;
  background-color: #228be6;
  color: #fff;
`;
const Register = () => {
  return (
    <>
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <WigHeader color="#1971c2"></WigHeader>
        </Link>
        <div
          style={{
            width: "450px",
            marginTop: "1.5rem",
            marginBottom: "0.5rem",
            fontSize: "1rem",
            color: "#868e96",
          }}
        >
          계정정보
          <span
            style={{
              color: "#228be6",
              marginRight: "5px",
            }}
          >
            [필수]
          </span>
        </div>
        <form>
          <InputTextBlock
            style={{
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
              borderBottom: "none",
            }}
          >
            <AiOutlineUser style={{ color: "#495057" }} />
            <Input type="email" placeholder="아이디(이메일)" required />
          </InputTextBlock>
          <InputTextBlock>
            <AiOutlineLock style={{ color: "#495057" }} required />
            <Input type="password" placeholder="비밀번호" />
            <em
              style={{
                width: "40px",
                fontSize: "12px",
                background: "rgba(3,199,90,.12)",
                color: "#03c75a",
                fontStyle: "normal",
                borderRadius: "10px",
                textAlign: "center",
                fontWeight: "bold",
                padding: "4px 6px 3px 6px",
                lineHeight: "13px",
                letterSpacing: "-0.5px",
              }}
            >
              안전
            </em>
          </InputTextBlock>
          <InputTextBlock
            style={{
              borderBottomLeftRadius: "15px",
              borderBottomRightRadius: "15px",
              borderTop: "none",
            }}
          >
            <AiOutlineStar style={{ color: "#495057" }} />{" "}
            <Input type="text" placeholder="닉네임" required />
          </InputTextBlock>
        </form>
        <div
          style={{
            width: "450px",
            marginTop: "1.5rem",
            marginBottom: "0.5rem",
            fontSize: "1rem",
            color: "#868e96",
          }}
        >
          개인정보
          <span
            style={{
              color: "#868e96",
              marginRight: "5px",
            }}
          >
            [선택]
          </span>
        </div>
        <InputTextBlock
          style={{
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            borderBottom: "none",
          }}
        >
          <Input type="text" placeholder="이름"></Input>
        </InputTextBlock>
        <div style={{ display: "flex", width: "467px" }}>
          <InputTextBlock
            style={{
              borderBottomLeftRadius: "15px",
              borderRight: "none",
            }}
          >
            <Input type="text" placeholder="생년월일"></Input>
          </InputTextBlock>
          <InputTextBlock
            style={{
              borderBottomRightRadius: "15px",
            }}
          >
            <Input type="text" placeholder="성별"></Input>
          </InputTextBlock>
        </div>
        <StyledButton>인증요청</StyledButton>
      </Container>
    </>
  );
};

export default Register;
