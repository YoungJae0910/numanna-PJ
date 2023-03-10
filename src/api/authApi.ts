import axios, { AxiosError } from "axios"
import { getUsersUrl } from "./apiSettings"

export type PersonalityType = {
    extroversionScore: number
    smokingScore: number
    alcoholScore: number
}

export enum Sex {
    Male = "Male",
    Female = "Female",
    Other = "Other"
}

export type User = {
    id: string
    password: string
    name: string
    profileImageUrl: string
    nickName: string
    email: string
    age: number
    sex: Sex
    partnerSex: Sex
    personalityType: PersonalityType
}

const NULL_USER: User = {
    id: "null",
    password: "null",
    name: "null",
    nickName: "null",
    profileImageUrl: "null",
    email: "null",
    age: 0,
    sex: Sex["Other"],
    partnerSex: Sex["Other"],
    personalityType: {
        extroversionScore: 0,
        smokingScore: 0,
        alcoholScore: 0
    } as PersonalityType
} as User

export const validatePassword = async (id: string, password: string) => {
    const user: User = await getUser(id)
    console.log(user)

    if (!user) return false

    const doesPasswordMatch = HashPassword.v1(password) === user.password
    return doesPasswordMatch || false
}

export const login = async (id: string, password: string) => {
    const isPasswordValid = await validatePassword(id, password)

    if (!isPasswordValid) {
        return false
    }

    window.sessionStorage.setItem("isLoggedIn", "true")
    window.sessionStorage.setItem("currentSessionId", id)
    window.sessionStorage.setItem("authKey", HashPassword.v1(id))

    return true
}

export const logout = () => {
    window.sessionStorage.removeItem("isLoggedIn")
    window.sessionStorage.removeItem("currentSessionId")
    window.sessionStorage.removeItem("authKey")
}

export const isCurrentSessionValid = async () => {
    const isLoggedIn = window.sessionStorage.getItem("isLoggedIn")
    if (!isLoggedIn) return false

    const userAuthKey = window.sessionStorage.getItem(
        "currentSessionId"
    ) as string
    if (!userAuthKey) return false

    const doesAuthKeyMatch =
        window.sessionStorage.getItem("authKey") ===
        HashPassword.v1(userAuthKey)
    if (!doesAuthKeyMatch) return false

    return true
}

export const getCurrentSessionId = async () => {
    const sessionId = window.sessionStorage.getItem("currentSessionId")
    if (!sessionId) return ""

    return sessionId
}

export const updateUser = async (id: string, newUser: User) => {
    const res = await axios.patch(getUsersUrl() + "/" + id, newUser)
    if (!res) return

    return res.data
}

export const addUser = async (newUser: User) => {
    const userToAdd = newUser
    userToAdd.password = HashPassword.v1(newUser.password)
    const res = await axios.post(getUsersUrl(), userToAdd)
    if (!res) return

    return res.data
}

export const deleteUser = async (id: string) => {
    const res = await axios.delete(getUsersUrl() + "/" + id)
    if (!res) return

    return res.data
}

export const getUser = async (id: string) => {
    const res = await axios.get(getUsersUrl() + "/" + id)
    if (!res) return NULL_USER

    const user: User = res.data as User
    if (!user) return NULL_USER

    return user
}

export const getUsers = async () => {
    const res = await axios.get(getUsersUrl())
    if (!res) return [NULL_USER] as User[]

    const users: User[] = res.data as User[]
    if (!users) return [NULL_USER] as User[]

    return users
}

export class HashPassword {
    static v1(password: string) {
        let hash = 0

        for (let i = 0; i < password.length; i++) {
            let chr = password.charCodeAt(i)
            hash = (hash << 5) - hash + chr
            hash |= 0
        }

        return `${hash}`
    }
}
