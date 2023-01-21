import React from "react";
import styled from "styled-components";
import MatchingChat from "./MatchingChat";
import MatchingChatUser from "./MatchingChatUser";

const ChatScreen = () => {
  return (
    <div>
      <MainScreen>
        <TimeStamp>2023년 1월 30일 월요일</TimeStamp>
        {/* 왼쪽에 쓰여지는 메세지창 */}
        <LeftMesg>
          <MsgAuth>Member2</MsgAuth>
          <MesgInfo>
            <MsgBubble>안녕하세요!</MsgBubble>
          </MesgInfo>
        </LeftMesg>
        {/* 오른쪽에 쓰여지는 메세지창 */}
        <MatchingChatUser />

        {/* 인풋창 */}
        <MatchingChat />
      </MainScreen>
    </div>
  );
};

export default ChatScreen;

const MainScreen = styled.div`
  padding: 0px var(--horizontal-space);
  /* margin-top: 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 3px solid #ffe1e1;
`;

const TimeStamp = styled.div`
  color: white;
  background-color: #f25a5a;
  padding: 15px;
  font-size: 14px;
  border-radius: 25px;
  margin-bottom: 25px;
  margin-top: 25px;
`;

const LeftMesg = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 25px;
`;

const MesgInfo = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row-reverse;
`;

const MsgAuth = styled.span`
  margin-bottom: 5px;
  display: block;
  opacity: 0.8;
  font-size: 14px;
  margin-right: 5px;
  margin-left: 10px;
`;

const MsgBubble = styled.span`
  background-color: #ffe1e1;
  padding: 13px;
  font-size: 18px;
  border-radius: 15px;
  border-top-left-radius: 0px;
  margin-right: 5px;
  margin-left: 5px;
`;
