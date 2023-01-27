import React, { useState, ReactDOM } from "react"
import styled from "styled-components"
import MapSelector from "../Map/MapSelector"

export default function MatchingChat({
    onSendMessage,
    chatPartner = "admin2"
}) {
    const [message, setMessage] = useState("")

    // const [isMapSelectorOpen, setIsMapSelectorOpen] = useState(false)
    const [hasMapSelectorBeenOpened, setHasMapSelectorBeenOpened] =
        useState(false)

    const onMessageChanged = () => {
        if (message.includes("@map") && !hasMapSelectorBeenOpened) {
            setHasMapSelectorBeenOpened(true)
            // open map selector
            if (
                window.confirm(
                    "지도 태그를 추가하시겠습니까? (링크를 복사해주세요. 예: @map https://google.com/maps/서울시)"
                )
            ) {
                window.open(
                    "https://www.google.com/maps/place/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C/data=!4m6!3m5!1s0x357ca2012d5c39cf:0x7e11eca1405bf29b!8m2!3d37.566535!4d126.9779692!16zL20vMGhzcWY",
                    "_blank",
                    "location=yes,height=570,width=520,scrollbars=yes,status=yes"
                )
            }
        } else if (message === "") {
            setHasMapSelectorBeenOpened(false)
        }
    }

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
                    onMessageChanged()
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

const SubmitInput = styled.input`
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
