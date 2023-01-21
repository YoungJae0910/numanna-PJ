import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { addChat } from "../../redux/modules/chat";
import signup from "../../assets/signup.png";

export default function MatchingChat() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const chat = useSelector((state) => state.chat);

  // const fetchChat = async () => {
  //   const { data } = await axios.get("http://localhost:3001/");
  //   setText(data);
  // };

  // useEffect(() => {
  //   fetchChat();
  // }, []);

  console.log(text);

  const changeText = (e) => {
    setText(e.target.value);
  };

  const chatSubmit = (e) => {
    e.preventDefault();

    const newChat = {
      id: uuidv4(),
      text,
    };

    dispatch(addChat(newChat));

    setText("");

    // console.log(newChat);
  };

  return (
    <ChatForm onSubmit={chatSubmit}>
      <ChatBox>
        <ChatInput
          value={text}
          placeholder="메세지를 입력해주세요."
          onChange={changeText}
          placeholder="Write a message..."
        />
        <ChatBtn>
          <MainImg src={signup} />
        </ChatBtn>
      </ChatBox>
    </ChatForm>
  );
}

const ChatForm = styled.form`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #ffe1e1;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  box-sizing: border-box;
  align-items: center;
  /* position: relative; */
`;

const ChatInput = styled.input`
  padding: 14px;
  width: 100%;
  outline: none;
  border-radius: 25px;
  box-sizing: border-box;
  border: 1px solid transparent;
`;

const ChatBox = styled.div`
  width: 100%;
  position: relative;
`;
const ChatBtn = styled.button`
  border: 1px solid transparent;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  outline: none;
  position: absolute;
  right: 10px;
  top: 3px;
  opacity: 1;
  background-color: #ffe1e1;

  &:hover {
    background-color: white;
  }
`;

const MainImg = styled.img`
  height: 90%;
`;
