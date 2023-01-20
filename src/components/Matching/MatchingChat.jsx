import React from "react";
import styled from "styled-components";

export default function MatchingChat() {
  return (
    <WrapInput>
      <SubmitInput></SubmitInput>
      <SubmitButton>보내기</SubmitButton>
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
