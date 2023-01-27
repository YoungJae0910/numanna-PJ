import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Header from "../../page/Header"

const LoginMain = () => {
    const navigate = useNavigate()

    return (
        <>
            <Header />
            <SurveyContainer>
                <SurveyQuestionBox>
                    <SurveyQuestionText>
                        안녕하세요. 누만나입니다.
                    </SurveyQuestionText>
                    <button
                        onClick={() => {
                            navigate("/partner")
                        }}
                    >
                        파트너 찾기
                    </button>
                    <button
                        onClick={() => {
                            navigate("/survey")
                        }}
                    >
                        설문조사 다시하기
                    </button>
                </SurveyQuestionBox>
                <SurveyAnswerBox></SurveyAnswerBox>
            </SurveyContainer>
        </>
    )
}

export default LoginMain

const SurveyContainer = styled.div`
    width: 100%;
`

const SurveyQuestionBox = styled.div`
    width: 100%;
    height: 100px;
    background-color: #f94772;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SurveyQuestionText = styled.h2`
    font-weight: 100%;
    color: white;
`

const SurveyAnswerBox = styled.div`
    width: 100%;
    height: 500px;
    background-color: #ffe1e1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10%;
`
