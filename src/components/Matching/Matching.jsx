import React, { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { getCurrentSessionId } from "../../api/authApi.ts"
import { addMessage } from "../../api/messagesApi.ts"
import { getMessagesBetweenUsersBySentAtAscending } from "../../api/messagesApi.ts"
import MatchingChat from "./MatchingChat"

export default function Matching() {
    const [interval, setInterval] = useState(1000)

    const [lowIntervalRemainingIterations, setLIRMI] = useState(0)

    const lowerInterval = () => {
        setInterval(300)
        setLIRMI(300)
    }

    const params = useParams()
    const chatPartner = params.id
    const [chats, setChats] = useState([])
    const scrollRef = useRef()
    useEffect(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    })

    const a = async () => {
        setTimeout(() => {
            refreshChat()
            b()
        }, interval)
    }

    const b = async () => {
        setTimeout(() => {
            refreshChat()
            a()
        }, interval)
    }

    useEffect(() => {
        a()
    }, [])

    const refreshChat = async () => {
        if (lowIntervalRemainingIterations > 1)
            setLIRMI(lowIntervalRemainingIterations - 1)
        else if (lowIntervalRemainingIterations === 0) {
            setInterval(1000)
            setLIRMI(-1)
        }

        const newChats = await getMessagesBetweenUsersBySentAtAscending(
            await getCurrentSessionId(),
            chatPartner
        )
        if (!newChats) return

        setChats(newChats)
    }

    const onSendMessage = async (cp, c) => {
        const message = {
            senderId: await getCurrentSessionId(),
            recepientId: cp,
            sentAt: Date.now(),
            content: c
        }
        const res = await addMessage(message)

        lowerInterval()
    }

    return (
        <WrapDiv>
            <ContainerDiv>
                <Chat ref={scrollRef}>
                    {chats.map((c) => {
                        return c.recepientId === chatPartner ? (
                            <ChatBoxRightDiv>
                                <ChatRightDiv>
                                    <ChatRightText>{c.content}</ChatRightText>
                                </ChatRightDiv>
                            </ChatBoxRightDiv>
                        ) : (
                            <ChatBoxLeftDiv>
                                <ChatLeftDiv>
                                    <ChatLeftText>{c.content}</ChatLeftText>
                                </ChatLeftDiv>
                            </ChatBoxLeftDiv>
                        )
                    })}
                </Chat>
                <MatchingChat
                    onSendMessage={onSendMessage}
                    chatPartner={chatPartner}
                />
            </ContainerDiv>
        </WrapDiv>
    )
}

const WrapDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ContainerDiv = styled.div`
    width: 80%;
    height: 730px;
    margin-top: 5%;
    border: 3px solid #ffe1e1;
    border-radius: 10px;
    margin-bottom: 3%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ChatBoxLeftDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2%;
    margin-left: 8%;
`

const ChatLeftDiv = styled.div`
    background-color: #ffe1e1;
    margin-left: 1%;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 30px;
`

const ChatLeftText = styled.p`
    font-size: 14px;
`

const ChatBoxRightDiv = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-top: 2%;
    flex-wrap: wrap;
`
const ChatRightText = styled.p`
    text-align: right;
    font-size: 14px;
    word-break: break-all;
`

const ChatRightDiv = styled.div`
    background-color: #ffe1e1;
    margin-right: 8%;
    padding-right: 10px;
    padding-left: 10px;
    margin-left: 50px;
`

const Chat = styled.div`
    display: block;
    overflow: auto;
    padding-bottom: 20px;
`
