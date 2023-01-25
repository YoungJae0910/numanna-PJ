import React, { useCallback, useState } from "react"
import styled from "styled-components"
import logo from "../../assets/numanna_logo.png"

const Edit = (props) => {
    //user정보
    const [editnickName, setEditNickName] = useState("")
    const [editemail, setEditEmail] = useState("")

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
            setEditNickName(e.target.value)
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

    // 이메일
    const emailHandler = useCallback((e) => {
        const emailRegex =
            /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        const emailCurrent = e.target.value
        setEditEmail(emailCurrent)
        if (!emailRegex.test(emailCurrent)) {
            setEmailMessage("이메일 형식이 틀렸어요! 다시 확인해주세요..")
            setIsEmail(false)
        } else {
            setEmailMessage("올바른 이메일 형식이에요 : )")
            setIsEmail(true)
        }
    }, [])

    return (
        <div>
            <StBox>
                <StLogoBox>
                    <StLogo src={logo} />
                </StLogoBox>

                <StInputBox>
                    {/* 수정할 정보 : 닉네임,이메일,이상형?,비밀번호? */}
                    <StText> User.name</StText>
                    <StText>User.age</StText>
                    <StText>User.id</StText>
                    <StText>User.password</StText>

                    <StInput
                        placeholder="수정할 닉네임를 입력하세요."
                        type="text"
                        value={editnickName}
                        onChange={nickNameHandler}
                    />
                    {editnickName?.length > 0 && (
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
                        value={editemail}
                        onChange={emailHandler}
                    />
                    {editemail?.length > 0 && (
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
                    <StBtn>저장</StBtn>
                    <StBtn onClick={close}>닫기</StBtn>
                </StInputBox>
            </StBox>
        </div>
    )
}

export default Edit

const StBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StLogo = styled.img`
    max-width: 300px;
    margin-top: 40px;
    margin-bottom: 20px;
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
    width: 300px;
    height: 430px;
    background-color: #ffe1e1;
    border-radius: 5px;
    margin-bottom: 50px;
`
const StInput = styled.input`
    width: 72%;
    border-radius: 10px;
    border: 1px solid rgb(195, 190, 190);
    padding: 10px;
    margin-bottom: 10px;
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
    margin: 10px;
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

const StText = styled.span`
    color: #f25a5a;
    font-size: 15px;
    margin-bottom: 10px;
    font-weight: 600;
    border: 1px solid transparent;
    padding: 5px;
    border-radius: 10px;
    background-color: white;
    width: 60%;
    box-sizing: border-box;
`
