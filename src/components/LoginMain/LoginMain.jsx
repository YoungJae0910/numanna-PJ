import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Header from "../../page/Header"
import { useEffect } from "react"
import { getCurrentSessionId } from "../../api/authApi.ts"

const LoginMain = () => {
    const navigate = useNavigate()
    const onRestrictedPageLoad = async () => {
        const user = await getCurrentSessionId()
        if (user === "") {
            navigate("/")
        }
    }
    useEffect(() => {
        onRestrictedPageLoad()
    }, [])

    return (
        <>
            <Header />
            <SurveyContainer>
                <SurveyQuestionBox>
                    <SurveyQuestionText>
                        안녕하세요. 누만나입니다.
                    </SurveyQuestionText>
                </SurveyQuestionBox>
                <StyledButtonDiv>
                    <StyledButton
                        onClick={() => {
                            navigate("/partner")
                        }}
                    >
                        파트너 찾기 👥
                    </StyledButton>
                    <StyledButton
                        onClick={() => {
                            navigate("/survey")
                        }}
                    >
                        설문조사 다시하기
                    </StyledButton>
                </StyledButtonDiv>
                <SurveyAnswerBox></SurveyAnswerBox>
            </SurveyContainer>
        </>
    )
}

export default LoginMain

const SurveyContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

const StyledButton = styled.button`
    border: 2px solid #f94772;
    background-color: transparent;
    border-radius: 10px;
    width: 80vw;
    max-width: 500px;
    padding: 3%;

    margin-top: 3%;

    transition: linear 0.2s;

    font-size: large;

    &:hover {
        background-color: #f94772;
        color: white;
    }
`

const StyledButtonDiv = styled.div`
    display: flex;
    width: 40vw;
    flex-direction: column;
    margin: auto;

    align-items: center;
    justify-content: center;

    padding-bottom: 1.5%;
`
