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
        <StLogo src={signup} style={{ marginBottom: "20px" }} />
        <StInput placeholder="이름을 입력하세요." type="text" />
        <StInput placeholder="닉네임를 입력하세요." type="text" />
        <StInput placeholder="나이를 입력하세요." type="number" />
        <StInput placeholder="아이디를 입력하세요." type="text" />
        <StInput placeholder="비밀번호를 입력하세요." type="password" />
        <StInput placeholder="비밀번호를 다시 입력하세요." type="password" />
        <StInput placeholder="이메일을 입력하세요." type="email" />
        {/* <StInput placeholder="이상형을 입력하세요." type="text" /> */}
        <StBtn>회원가입하기</StBtn>
      </StInputBox>
    </StBox>
  );
};

export default SignUp;

const StBox = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  /* width: 100%;
  height: 100%; */
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #fe6473;
  width: 60%;
  background-color: #ffe1e1;
  border-radius: 5px;
  margin: 20px;
`;

const StInput = styled.input`
  width: 75%;

  border-radius: 10px;
  border: 1px solid rgb(195, 190, 190);
  padding: 10px;
  margin: 10px;
  box-sizing: border-box;
  outline: none;
  text-align: center;
  outline: none;

  &:focus {
    outline: none;
    border: 2px solid #fe6473;
  }
`;

const StBtn = styled.button`
  width: 40%;
  border-radius: 5px;
  color: white;
  background-color: #f25a5a;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #f6809f;
  font-weight: 600;
  outline: none;
  &:hover {
    background-color: white;
    color: #f25a5a;
  }
`;
