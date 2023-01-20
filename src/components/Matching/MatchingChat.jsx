import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { addChat } from "../../redux/modules/chat";

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
    <WrapInput>
      <form onSubmit={chatSubmit}>
        <SubmitInput
          value={text}
          placeholder="메세지를 입력해주세요."
          onChange={changeText}
        ></SubmitInput>
        <SubmitButton>보내기</SubmitButton>
      </form>
    </WrapInput>
  );
}

const WrapInput = styled.div`
  width: 100%;
  height: 200px;
  background-color: white;
  border: 3px solid #ffe1e1;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const SubmitInput = styled.textarea`
  width: 88%;
  height: 90%;
  text-indent: 10px;
  margin-left: 1%;
  margin-right: 1%;
  border: none;
  &:focus {
    outline: none;
  }
`;
const SubmitButton = styled.button`
  width: 20%;
  height: 100%;
  border: 3px solid #ffe1e1;
  background-color: #ffe1e1;
  border-radius: 5px;
`;
