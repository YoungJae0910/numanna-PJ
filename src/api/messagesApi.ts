import axios from "axios"
import { getMessagesUrl } from "./apiSettings"

export type MessageWithoutId = {
    senderId: String
    recepientId: String
    sentAt: number
    content: String
}

export type Message = {
    id: number
    senderId: String
    recepientId: String
    sentAt: number
    content: String
}

export const addMessage = async (message: MessageWithoutId) => {
    const res = await axios.post(getMessagesUrl(), message)
    if (!res) return

    return res.data
}

export const getMessages = async () => {
    const res = await axios.get(getMessagesUrl())
    if (!res) return

    return res.data
}

const compareMessagesBySentAtDescending = (a: Message, b: Message) => {
    if (a.sentAt > b.sentAt) return -1
    else if (b.sentAt < a.sentAt) return 1
    else return 0
}

export const getMessagesBetweenUsersBySentAtDescending = async (
    firstUserId: String,
    secondUserId: String
) => {
    const messages: Message[] = (await getMessages()) as Message[]

    const firstToSecondMessages: Message[] = messages
        .filter((m) => m.senderId === firstUserId)
        .filter((m) => m.recepientId === secondUserId)

    const secondToFirstMessages: Message[] = messages
        .filter((m) => m.senderId === secondUserId)
        .filter((m) => m.recepientId === firstUserId)

    let results: Message[] = [
        ...firstToSecondMessages,
        ...secondToFirstMessages
    ]
    results.sort(compareMessagesBySentAtDescending)
}

const compareMessagesBySentAtAscending = (a: Message, b: Message) => {
    if (a.sentAt < b.sentAt) return -1
    else if (b.sentAt > a.sentAt) return 1
    else return 0
}

export const getMessagesBetweenUsersBySentAtAscending = async (
    firstUserId: String,
    secondUserId: String
) => {
    const messages: Message[] = (await getMessages()) as Message[]

    const firstToSecondMessages: Message[] = messages
        .filter((m) => m.senderId === firstUserId)
        .filter((m) => m.recepientId === secondUserId)

    const secondToFirstMessages: Message[] = messages
        .filter((m) => m.senderId === secondUserId)
        .filter((m) => m.recepientId === firstUserId)

    let results: Message[] = [
        ...firstToSecondMessages,
        ...secondToFirstMessages
    ]
    results.sort(compareMessagesBySentAtAscending)
}
