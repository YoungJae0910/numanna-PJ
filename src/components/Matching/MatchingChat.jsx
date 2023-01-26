import React, { useState } from "react"
import styled from "styled-components"

export default function MatchingChat({
    onSendMessage,
    chatPartner = "admin2"
}) {
    const [message, setMessage] = useState("")
    return (
        <WrapInput
            onSubmit={(e) => {
                e.preventDefault()
                onSendMessage(chatPartner, message)
                setMessage("")
            }}
        >
            <SubmitInput
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value)
                }}
            ></SubmitInput>
            <SubmitButton type="submit">보내기</SubmitButton>
        </WrapInput>
    )
}

const WrapInput = styled.form`
    width: 100%;
    height: 200px;
    background-color: white;
    border: 3px solid #ffe1e1;
    border-radius: 10px;
    display: flex;
    align-items: center;
`

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
`
const SubmitButton = styled.button`
    width: 20%;
    height: 100%;
    border: 3px solid #ffe1e1;
    background-color: #ffe1e1;
    border-radius: 5px;
`
