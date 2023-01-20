import React from "react";
import styled from "styled-components";

export default function Matching() {
  return (
    <WrapDiv>
      <ContainerDiv>
        <ChatBoxLeftDiv>
          <ChatLeftText>username</ChatLeftText>
          <ChatLeftDiv />
        </ChatBoxLeftDiv>
        <ChatBoxRightDiv>
          <ChatRightDiv />
          <ChatRightText>me</ChatRightText>
        </ChatBoxRightDiv>
      </ContainerDiv>
    </WrapDiv>
  );
}

const WrapDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerDiv = styled.div`
  width: 90%;
  height: 730px;
  margin-top: 5%;
  border: 3px solid #ffe1e1;
  border-radius: 10px;
  margin-bottom: 5%;
`;

const ChatBoxLeftDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5%;
  margin-left: 10%;
`;

const ChatLeftDiv = styled.div`
  width: 50%;
  height: 40px;
  background-color: #ffe1e1;
  margin-left: 1%;
`;

const ChatLeftText = styled.p``;

const ChatBoxRightDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5%;
  margin-left: 40%;
`;
const ChatRightText = styled.p``;

const ChatRightDiv = styled.div`
  width: 80%;
  height: 40px;
  background-color: #ffe1e1;
  margin-right: 1%;
`;
