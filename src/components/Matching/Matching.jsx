import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { getCurrentSessionId } from "../../api/authApi.ts"
import { addMessage } from "../../api/messagesApi.ts"
import { getMessagesBetweenUsersBySentAtAscending } from "../../api/messagesApi.ts"
import MatchingChat from "./MatchingChat"

export default function Matching() {
    const [interval, setInterval] = useState(1000)

    const [lowIntervalRemainingIterations, setLIRMI] = useState(0)

    const lowerInterval = () => {
        setInterval(100)
        setLIRMI(100)
    }

    const params = useParams()
    const chatPartner = params.id
    const [chats, setChats] = useState([])

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

    const navigate = useNavigate()

    const formatContent = (content) => {
        let result = content

        // while (result.includes("@map")) {
        //     const splitted = result.split("@map ")
        //     const splitted2 = splitted[1].split(" ")

        //     const lattitude = splitted[0]
        //     const longtitude = splitted2[1]

        //     const googleMapsUrl = `https://maps.google.com/maps?z=12&t=m&q=loc:${lattitude}+${longtitude}`

        //     result = result.replace(
        //         `@map ${lattitude} ${longtitude}`,
        //         `<a href="${googleMapsUrl}">위치 확인하기</a>`
        //     )
        // }

        if (result.includes("@map")) {
            // const latLng = `${result.split("@map ")[1].split(" ")[0]} ${
            //     result.split("@map ")[1].split(" ")[1]
            // }`
            // const lat = latLng.split(" ")[0]
            // const lng = latLng.split(" ")[1]

            // const googleMapsUrl = `https://maps.google.com/maps?z=12&t=m&q=loc:${lat}+${lng}`
            const googleMapsUrl = result.split("@map ")[1].split(" ")[0]

            result = result.replace(
                `@map ${googleMapsUrl}`,
                `<a target="_blank" href="${googleMapsUrl}"} style={{cursor: "pointer"}}>위치 확인하기</a>`
            )
        }

        return <p dangerouslySetInnerHTML={{ __html: result }}></p>
    }

    return (
        <WrapDiv>
            <ContainerDiv>
                <Chat>
                    {/* <ChatBoxLeftDiv>
                        <ChatLeftText>username</ChatLeftText>
                        <ChatLeftDiv />
                    </ChatBoxLeftDiv>
                    <ChatBoxRightDiv>
                        <ChatRightDiv />
                        <ChatRightText>me</ChatRightText>
                    </ChatBoxRightDiv>
                    <ChatBoxLeftDiv>
                        <ChatLeftText>username</ChatLeftText>
                        <ChatLeftDiv />
                    </ChatBoxLeftDiv> */}
                    {chats.map((c) => {
                        return c.recepientId === chatPartner ? (
                            <ChatBoxRightDiv>
                                <ChatRightDiv />
                                <ChatRightText>
                                    {formatContent(c.content)}
                                </ChatRightText>
                            </ChatBoxRightDiv>
                        ) : (
                            <ChatBoxLeftDiv>
                                <ChatLeftDiv />
                                <ChatLeftText>
                                    {formatContent(c.content)}
                                </ChatLeftText>
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
    width: 50%;
    height: 40px;
    background-color: #ffe1e1;
    margin-left: 1%;
`

const ChatLeftText = styled.p``

const ChatBoxRightDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2%;
    margin-left: 40%;
`
const ChatRightText = styled.p``

const ChatRightDiv = styled.div`
    width: 80%;
    height: 40px;
    background-color: #ffe1e1;
    margin-right: 1%;
`

const Chat = styled.div`
    display: block;
`
