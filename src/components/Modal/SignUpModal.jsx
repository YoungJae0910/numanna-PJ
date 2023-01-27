import React, { useState } from "react"
import Modal from "react-modal"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { addUser } from "../../api/authApi.ts"
import axios from "axios"

export default function SignUpModal({
    isName,
    isNickName,
    isEmail,
    isId,
    isPassword,
    isPasswordConfirm,
    name,
    nickName,
    age,
    id,
    password,
    email,
    sex,
    partnerSex
}) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const onAddUser = async () => {
        const newUser = {
            name,
            nickName,
            age: Number(age),
            id,
            password,
            email,
            sex,
            partnerSex,
            personalityType: {
                ExtroversionScore: 0,
                SmokingScore: 0,
                AlcoholScore: 0
            }
        }

        console.log(typeof password)
        await addUser(newUser)
        setModalIsOpen(true)
    }

    return (
        <>
            <FinishBtn
                disabled={
                    !(
                        isNickName &&
                        isId &&
                        isName &&
                        isEmail &&
                        isPassword &&
                        isPasswordConfirm
                    )
                }
                onClick={onAddUser}
            >
                회원가입완료
            </FinishBtn>
            <ModalBox
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                ariaHideApp={false}
            >
                <ModalText>회원가입을 축하드립니다!!</ModalText>
                <Link to={"/Survey"}>
                    <FinishBtn>설문조사 하러가기!</FinishBtn>
                </Link>
            </ModalBox>
        </>
    )
}

const FinishBtn = styled.button`
    width: 76%;
    border-radius: 5px;
    color: white;
    background-color: #f25a5a;
    padding: 10px;
    margin: 20px;
    border: 2px solid #f25a5a;
    font-weight: 600;
    outline: none;
    &:hover {
        background-color: white;
        color: #f25a5a;
        transition: 0.5s;
    }
`

const ModalBox = styled(Modal)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ModalText = styled.p`
    font-size: 30px;
    font-weight: bold;
`
