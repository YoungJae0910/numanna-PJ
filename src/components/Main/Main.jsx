import styled from "styled-components";
import React from "react";
import mainimg from "../../assets/mainimg.jpeg";
import logo from "../../assets/numanna_logo.png";

export default function Main() {
  return (
    <WrapDiv>
      <Mainimg src={mainimg} />
      <TitleLogo src={logo} />
      <TextDiv>
        <Textp1>아무도 만나지 못했기에...</Textp1>
        <Textp2>누구나 만날 수 있는</Textp2>
        <Textp3>신개념 데이팅 사이트</Textp3>
      </TextDiv>
      <ButtonDiv>
        <Button1>지금가입</Button1>
        <Button2>로그인</Button2>
      </ButtonDiv>
    </WrapDiv>
  );
}

const WrapDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Mainimg = styled.img`
  width: 100%;
  filter: brightness(30%);
  position: absolute;
`;

const TitleLogo = styled.img`
  position: absolute;
  width: 70%;
  left: 15%;
  margin-top: 30%;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const Textp1 = styled.p`
  position: absolute;
  color: white;
  width: 80%;
  text-align: center;
  margin-top: 140%;
  font-size: 24px;
  font-weight: bold;
`;

const Textp2 = styled.p`
  position: absolute;
  color: white;
  width: 60%;
  text-align: center;
  margin-top: 156%;
  font-size: 20px;
  font-weight: bold;
`;
const Textp3 = styled.p`
  position: absolute;
  color: white;
  width: 60%;
  text-align: center;
  margin-top: 170%;
  font-size: 20px;
  font-weight: bold;
`;

const ButtonDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Button1 = styled.button`
  position: absolute;
  width: 30%;
  height: 40px;
  left: 35%;
  margin-top: 100%;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  background-color: transparent;
  border: 1px solid white;
  &:hover {
    background-color: #ffe1e1;
    border: 1px solid #ffe1e1;
    color: #f25a5a;
    transition: 0.5s;
  }
`;
const Button2 = styled.button`
  position: absolute;
  width: 30%;
  height: 40px;
  left: 35%;
  margin-top: 113%;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  background-color: transparent;
  border: 1px solid white;
  &:hover {
    background-color: #ffe1e1;
    border: 1px solid #ffe1e1;
    color: #f25a5a;
    transition: 0.5s;
  }
`;
