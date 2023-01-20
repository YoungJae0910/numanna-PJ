import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import signup from "../../assets/signup.png";

const SignUp = () => {
  return (
    <StBox>
      <StLogoBox>
        <StLogo src={logo} />
      </StLogoBox>

      <StInputBox>
        <StLogo src={signup} />
        <StInput placeholder="이름을 입력하세요." type="text" />
        <StInput placeholder="닉네임를 입력하세요." type="text" />
        <StInput placeholder="나이를 입력하세요." type="number" />
        <StInput placeholder="아이디를 입력하세요." type="text" />
        <StInput placeholder="비밀번호를 입력하세요." type="password" />
        <StInput placeholder="비밀번호를 다시 입력하세요." type="password" />
        <StInput placeholder="이메일을 입력하세요." type="email" />
        <StInput placeholder="이상형을 입력하세요." type="text" />
        <StBtn>회원가입하기</StBtn>
      </StInputBox>
    </StBox>
  );
};

export default SignUp;

const StBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;
const StLogo = styled.img`
  max-width: 65%;
  margin-top: 30px;
`;

const StLogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StInputBox = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  border: 1px solid #fe6473;
  max-width: 80%;
  height: 650px;
  background-color: white;
  border-radius: 5px;
  margin: 30px;
`;

const StInput = styled.input`
  width: 290px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #fa8033;
  padding: 20px;
  box-sizing: border-box;
  outline: none;
  margin-top: 15px;
  /* 
  & input:focus {
    outline: none;
    border: 3px solid #fe6473;
  } */
`;

const StBtn = styled.button`
  width: 290px;
  height: 40px;
  border-radius: 5px;
  color: #f25a5a;
  background-color: white;
  margin: 20px;
  border: 1px solid #fa8033;
  &:hover {
    background-color: #f25a5a;
    color: white;
  }
`;
