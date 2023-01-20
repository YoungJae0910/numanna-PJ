import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SignUpModal({
  isName,
  isNickName,
  isEmail,
  isId,
  isPassword,
  isPasswordConfirm,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <FinishBtn
        disabled={
          !(
            isNickName &&
            isId &&
            isName &&
            isEmail &&
            isPassword &&
            isPasswordConfirm
          )
        }
        onClick={() => setModalIsOpen(true)}
      >
        회원가입완료
      </FinishBtn>
      <ModalBox
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <ModalText>회원가입을 축하드립니다!!</ModalText>
        <Link to={"/Survey"}>
          <FinishBtn>설문조사하러가기</FinishBtn>
        </Link>
      </ModalBox>
    </>
  );
}

const FinishBtn = styled.button`
  width: 75%;
  border-radius: 5px;
  color: white;
  background-color: #f25a5a;
  padding: 10px;
  margin: 20px;
  border: 2px solid #f25a5a;
  font-weight: 600;
  outline: none;
  &:hover {
    background-color: white;
    color: #f25a5a;
    transition: 0.5s;
  }
`;

const ModalBox = styled(Modal)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalText = styled.p`
  font-size: 30px;
  font-weight: bold;
`;
