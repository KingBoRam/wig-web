import { useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const ModalView = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  background-color: #ffffff;
`;
const ModalBtn = styled.button`
  text-decoration: none;
  border: none;
  color: black;
  cursor: pointer;
`;
const ExitBtn = styled.button`
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: white;
  text-decoration: none;
  margin-top: 10px;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

const Modal = ({ children, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>{name}</ModalBtn>
        {isOpen ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <ExitBtn onClick={openModalHandler}>X</ExitBtn>
              {children}
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};
export default Modal;
