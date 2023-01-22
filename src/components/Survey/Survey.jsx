import React from "react"
import styled from "styled-components"
import Button from "../button/Button"
import Header from "../../page/Header"

const Survey = () => {
    return (
        <>
            <Header />
            <SurveyContainer>
                <SurveyQuestionBox>
                    <SurveyQuestionText>
                        Q. 당신은 술을 좋아합니까?
                    </SurveyQuestionText>
                </SurveyQuestionBox>
                <SurveyAnswerBox>
                    <Button
                        size={"primary"}
                        height={"primary"}
                        outline={false}
                        text={"Yes"}
                    />
                    <Button size={"primary"} height={"primary"} text={"No"} />
                </SurveyAnswerBox>
            </SurveyContainer>
        </>
    )
}

export default Survey

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
