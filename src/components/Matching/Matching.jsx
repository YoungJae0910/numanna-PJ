import React from "react";
import styled from "styled-components";
import ChatScreen from "./ChatScreen";
import logo from "../../assets/logo.png";
export default function Matching() {
  return (
    <>
      <WrapDiv>
        <StLogo src={logo} />
        <ContainerDiv>
          <ChatScreen />
          {/* <MatchingChatUser /> */}
          {/* <Chat>
            <ChatBoxLeftDiv>
              <ChatLeftText>username</ChatLeftText>
              <ChatLeftDiv></ChatLeftDiv>
            </ChatBoxLeftDiv>
            <ChatBoxRightDiv>
              <ChatRightDiv></ChatRightDiv>
              <ChatRightText>me</ChatRightText>
            </ChatBoxRightDiv>
            <ChatBoxLeftDiv>
              <ChatLeftText>username</ChatLeftText>
              <ChatLeftDiv />
            </ChatBoxLeftDiv>
          </Chat>
          <MatchingChat /> */}
        </ContainerDiv>
      </WrapDiv>
    </>
  );
}

const WrapDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerDiv = styled.div`
  width: 90%;
  height: 730px;
  margin-top: 5%;
  /* border: 3px solid #ffe1e1; */
  border-radius: 10px;
  margin-bottom: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StLogo = styled.img`
  max-width: 25%;
  margin-top: 10px;
`;

// const ChatBoxLeftDiv = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 2%;
//   margin-left: 8%;
// `;

// const ChatLeftDiv = styled.div`
//   width: 50%;
//   height: 40px;
//   background-color: #ffe1e1;
//   margin-left: 1%;
// `;

// const ChatLeftText = styled.p``;

// const ChatBoxRightDiv = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 2%;
//   margin-left: 40%;
// `;
// const ChatRightText = styled.p``;

// const ChatRightDiv = styled.div`
//   width: 80%;
//   height: 40px;
//   background-color: #ffe1e1;
//   margin-right: 1%;
// `;

// const Chat = styled.div`
//   display: block;
// `;
