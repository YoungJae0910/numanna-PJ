import React, { useCallback, useState, useEffect } from "react"
import logo from "../../assets/numanna_logo.png"
import {
    StText,
    Colortext,
    StBtn,
    StBox,
    StLogo,
    StLogoBox,
    StInputBox,
    StInput
} from "./styles"
import {
    getCurrentSessionId,
    validatePassword,
    getUser,
    updateUser
} from "../../api/authApi.ts"
import axios from "axios"
import { getUsersUrl } from "../../api/apiSettings"

// EditModal의 부모 컴포넌트

const Edit = (props) => {
    //user정보
    const [nickName, setNickName] = useState("")
    console.log(nickName)
    const [email, setEmail] = useState("")
    console.log(email)

    //오류메시지 상태저장
    const [nickNameMessage, setNickNameMessage] = useState("")
    const [emailMessage, setEmailMessage] = useState("")

    //유효성검사
    const [isNickName, setIsNickName] = useState(false)
    const [isEmail, setIsEmail] = useState(false)

    // 모달창닫기 프롭
    const { close } = props

    // 닉네임
    const nickNameHandler = useCallback(
        (e) => {
            setNickName(e.target.value)
            if (e.target.value.length < 2 || e.target.value.length > 5) {
                setNickNameMessage("2글자 이상 5글자 미만으로 입력해주세요.")
                setIsNickName(false)
            } else {
                setNickNameMessage("올바른 이름 형식입니다 :)")
                setIsNickName(true)
            }
        },
        [setIsNickName]
    )

    // 정보 변경

    const updateUser = async () => {
        const id = await getCurrentSessionId()
        const editUser = { nickName, email }
        const res = await axios.put(getUsersUrl() + "/" + id, editUser)

        if (!res) return

        return res.data
    }

    // 이메일
    const emailHandler = useCallback((e) => {
        const emailRegex =
            /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        const emailCurrent = e.target.value
        setEmail(emailCurrent)
        if (!emailRegex.test(emailCurrent)) {
            setEmailMessage("이메일 형식이 틀렸어요! 다시 확인해주세요..")
            setIsEmail(false)
        } else {
            setEmailMessage("올바른 이메일 형식이에요 : )")
            setIsEmail(true)
        }
    }, [])

    // input창에 입력한 닉네임으로 변경
    // 아이디
    const [userId, setUserId] = useState("")

    const fetchUserId = async () => {
        const id = await getCurrentSessionId()
        setUserId(id)
        fetchUser(id)
    }

    useEffect(() => {
        fetchUserId()
    }, [])

    // 닉네임
    const [user, setUser] = useState({})

    const fetchUser = async (id) => {
        console.log(id)
        const u = await getUser(id)
        setUser(u)
        setNickName(u.nickName)
        setEmail(u.email)
    }

    const changeUserInfo = () => {}

    return (
        <div>
            <StBox>
                <StLogoBox>
                    <StLogo src={logo} />
                </StLogoBox>

                <StInputBox>
                    {/* 수정할 정보 : 닉네임,이메일,이상형?,비밀번호? */}
                    <StText>이름 : {user.name}</StText>
                    <StText>나이 : {user.age}</StText>
                    <StText>이메일 : {userId}</StText>

                    <StInput
                        placeholder="수정할 닉네임을 입력하세요."
                        type="text"
                        value={nickName}
                        onChange={nickNameHandler}
                    />

                    {nickName?.length > 0 && (
                        <Colortext
                            className={`message ${
                                isNickName ? "success" : "error"
                            }`}
                        >
                            {nickNameMessage}
                        </Colortext>
                    )}

                    {/* 비밀번호 변경 구현은 제일 마지막 */}

                    <StInput
                        placeholder="이메일을 입력하세요."
                        type="email"
                        value={email}
                        onChange={emailHandler}
                    />
                    {email?.length > 0 && (
                        <Colortext
                            className={`message ${
                                isEmail ? "success" : "error"
                            }`}
                        >
                            {emailMessage}
                        </Colortext>
                    )}

                    {/* <StText>User.personalityType</StText> */}

                    {/* 버튼:저장누르면 저장되면서 모달창닫히도록, 닫기는 수정안할시 그냥 닫기누르도록 2개 생성 */}
                    <StBtn
                        onClick={(updateUser) => {
                            alert("수정 완료")
                            close = { close }
                        }}
                    >
                        저장
                    </StBtn>

                    <StBtn onClick={close}>닫기</StBtn>
                </StInputBox>
            </StBox>
        </div>
    )
}

export default Edit
