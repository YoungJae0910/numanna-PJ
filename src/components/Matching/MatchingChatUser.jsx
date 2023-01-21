import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MatchingChatUser = () => {
  const chat = useSelector((state) => state.chat);

  return (
    <>
      {chat.map((item) => {
        return (
          <RightMesg>
            <MesgInfo>
              <MsgAuth>User</MsgAuth>
              <MsgBubbleR>{item.text}</MsgBubbleR>
            </MesgInfo>
          </RightMesg>
        );
      })}
    </>
  );
};

export default MatchingChatUser;

const RightMesg = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 25px;
  justify-content: flex-end;
  border-top-right-radius: 0px;
  border-top-left-radius: 15px;
  margin-right: 0px;
  margin-left: 5px;
  /* flex-direction: row-reverse; */
`;

const MsgAuth = styled.span`
  margin-bottom: 5px;
  display: block;
  opacity: 0.8;
  font-size: 14px;
  margin-right: 10px;
  margin-left: 5px;
`;

const MsgBubbleR = styled.span`
  background-color: #ffe1e1;
  padding: 13px;
  font-size: 18px;
  border-radius: 15px;
  border-bottom-right-radius: 0px;
  margin-right: 10px;
  margin-left: 5px;
`;

const MesgInfo = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row-reverse;
`;
