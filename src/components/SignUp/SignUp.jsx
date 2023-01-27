import axios from "axios"
import React, { useCallback, useState } from "react"
import styled from "styled-components"
import logo from "../../assets/numanna_logo.png"
import signup from "../../assets/signup.png"
import SignUpModal from "../Modal/SignUpModal"

const SignUp = () => {
    //user정보
    const [name, setName] = useState("")
    const [nickName, setNickName] = useState("")
    const [age, setAge] = useState("")
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [email, setEmail] = useState("")
    const [sex, setSex] = useState("")
    const [partnerSex, setPartnerSex] = useState("")

    //오류메시지 상태저장
    const [nameMessage, setNameMessage] = useState("")
    const [nickNameMessage, setNickNameMessage] = useState("")
    const [emailMessage, setEmailMessage] = useState("")
    const [passwordMessage, setPasswordMessage] = useState("")
    const [idMessage, setidMessage] = useState("")
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("")

    //유효성검사
    const [isName, setIsName] = useState(false)
    const [isNickName, setIsNickName] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isId, setIsid] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)

    const onChangeName = useCallback(
        (e) => {
            setName(e.target.value)
            if (e.target.value.length < 2 || e.target.value.length > 5) {
                setNameMessage("2글자 이상 5글자 미만으로 입력해주세요.")
                setIsName(false)
            } else {
                setNameMessage("올바른 이름 형식입니다 :)")
                setIsName(true)
            }
        },
        [setIsName]
    )

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

    const ageHandler = (event) => {
        setAge(event.target.value)
    }

    const idHandler = useCallback((e) => {
        const idRegex = /^(?=.*[a-zA-Z]).{8,25}$/
        const idCurrent = e.target.value
        setId(idCurrent)

        if (!idRegex.test(idCurrent)) {
            setidMessage("8자리 이상 입력해주세요!")
            setIsid(false)
        } else {
            setidMessage("완벽한 아이디에요 : )")
            setIsid(true)
        }
    }, [])

    const passwordHandler = useCallback((e) => {
        const passwordRegex =
            /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        const passwordCurrent = e.target.value
        setPassword(passwordCurrent)

        if (!passwordRegex.test(passwordCurrent)) {
            setPasswordMessage(
                "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
            )
            setIsPassword(false)
        } else {
            setPasswordMessage("안전한 비밀번호에요 : )")
            setIsPassword(true)
        }
    }, [])

    const passwordConfirmHandler = useCallback(
        (e) => {
            const passwordConfirmCurrent = e.target.value
            setPasswordConfirm(passwordConfirmCurrent)

            if (password === passwordConfirmCurrent) {
                setPasswordConfirmMessage("비밀번호를 똑같이 입력했어요 : )")
                setIsPasswordConfirm(true)
            } else {
                setPasswordConfirmMessage(
                    "비밀번호가 틀려요. 다시 확인해주세요.."
                )
                setIsPasswordConfirm(false)
            }
        },
        [password]
    )

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

    return (
        <StBox>
            <StLogoBox>
                <StLogo src={logo} />
            </StLogoBox>

            <StInputBox>
                {/* <StLogo1 src={signup} style={{ marginBottom: "20px" }} /> */}
                <StInput
                    placeholder="이름을 입력하세요."
                    type="text"
                    value={name}
                    onChange={(e) => onChangeName(e)}
                />
                {name?.length > 0 && (
                    <Colortext
                        className={`message ${isName ? "success" : "error"}`}
                    >
                        {nameMessage}
                    </Colortext>
                )}
                <StInput
                    placeholder="닉네임를 입력하세요."
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
                <StInput
                    placeholder="나이를 입력하세요."
                    type="number"
                    value={age}
                    onChange={ageHandler}
                />
                <StInput
                    placeholder="아이디를 입력하세요."
                    type="text"
                    value={id}
                    onChange={idHandler}
                />
                {id?.length > 0 && (
                    <Colortext
                        className={`message ${isId ? "success" : "error"}`}
                    >
                        {idMessage}
                    </Colortext>
                )}
                <StInput
                    placeholder="비밀번호를 입력하세요."
                    type="password"
                    value={password}
                    onChange={passwordHandler}
                    passwordText="비밀번호 (숫자+영문자+특수문자 조합으로 8자리 이상)"
                />
                {password?.length > 0 && (
                    <Colortext
                        className={`message ${
                            isPassword ? "success" : "error"
                        }`}
                    >
                        {passwordMessage}
                    </Colortext>
                )}
                <StInput
                    placeholder="비밀번호를 다시 입력하세요."
                    type="password"
                    value={passwordConfirm}
                    onChange={passwordConfirmHandler}
                    passwordText=" "
                />
                {passwordConfirm?.length > 0 && (
                    <Colortext
                        className={`message ${
                            isPasswordConfirm ? "success" : "error"
                        }`}
                    >
                        {passwordConfirmMessage}
                    </Colortext>
                )}
                <StInput
                    placeholder="이메일을 입력하세요."
                    type="email"
                    value={email}
                    onChange={emailHandler}
                />
                {email?.length > 0 && (
                    <Colortext
                        className={`message ${isEmail ? "success" : "error"}`}
                    >
                        {emailMessage}
                    </Colortext>
                )}

                <SelectStyle onChange={(event) => setSex(event.target.value)}>
                    <option key="man" value="Male" type="text">
                        남자
                    </option>
                    <option key="girl" value="Female" type="text">
                        여자
                    </option>
                    <option key="other" value="Other" type="text">
                        성소수자
                    </option>
                </SelectStyle>

                <SelectStyle
                    onChange={(event) => setPartnerSex(event.target.value)}
                >
                    <option key="man" value="Male" type="text">
                        남자가 좋아요
                    </option>
                    <option key="girl" value="Female" type="text">
                        여자가 좋아요
                    </option>
                    <option key="other" value="Other" type="text">
                        성소수자가 좋아요
                    </option>
                </SelectStyle>

                <SignUpModal
                    isName={isName}
                    isNickName={isNickName}
                    isEmail={isEmail}
                    isId={isId}
                    isPassword={isPassword}
                    isPasswordConfirm={isPasswordConfirm}
                    name={name}
                    nickName={nickName}
                    age={age}
                    id={id}
                    password={password}
                    passwordConfirm={passwordConfirm}
                    email={email}
                    sex={sex}
                    partnerSex={partnerSex}
                />
            </StInputBox>
        </StBox>
    )
}

export default SignUp

const StBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StLogo = styled.img`
    max-width: 300px;
    margin-top: 10px;
`
const StLogo1 = styled.img`
    max-width: 10%;
`

const StLogoBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StInputBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #fe6473;
    width: 350px;
    height: 700px;
    background-color: #ffe1e1;
    border-radius: 5px;
`

const StInput = styled.input`
    width: 72%;
    border-radius: 10px;
    border: 1px solid rgb(195, 190, 190);
    padding: 10px;
    margin: 10px;
    box-sizing: border-box;
    outline: none;
    text-align: center;
    outline: none;

    &:focus {
        outline: none;
        border: 2px solid #fe6473;
    }
`

const StBtn = styled.button`
    width: 40%;
    border-radius: 5px;
    color: white;
    background-color: #f25a5a;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #f6809f;
    font-weight: 600;
    outline: none;
    &:hover {
        background-color: white;
        color: #f25a5a;
    }
`

const Colortext = styled.span`
    font-size: 10px;
    &.success {
        color: green;
    }
    &.error {
        color: #ff2727;
    }
`

const SelectStyle = styled.select`
    width: 72%;
    border-radius: 10px;
    border: 1px solid rgb(195, 190, 190);
    padding: 10px;
    margin: 10px;
    box-sizing: border-box;
    outline: none;
    text-align: center;
    outline: none;
`
