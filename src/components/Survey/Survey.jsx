import React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import Button from "../button/Button"
import Header from "../../page/Header"
import axios from "axios"
import {
    isCurrentSessionValid,
    getCurrentSessionId,
    updateUser,
    getUser
} from "../../api/authApi.ts"
import { SERVER_URL } from "../../api/apiSettings"
import { useNavigate } from "react-router-dom"

const Survey = () => {
    const navigate = useNavigate()

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [questions, setQuestions] = useState([])
    const [question, setQuestion] = useState({})

    const [extroversionScore, setExtroversionScore] = useState(0)
    const [alcoholScore, setAlcoholScore] = useState(0)
    const [smokingScore, setSmokingScore] = useState(0)

    const fetchQuestions = async () => {
        const res = await axios.get(SERVER_URL + "/personalitySurveyQuestions")
        if (!res) return

        setQuestions(res.data)
        setCurrentQuestionIndex(0)
        setQuestion(res.data[0])
    }

    useEffect(() => {
        fetchQuestions()
    }, [])

    const onYesClicked = () => {
        onClicked(true)
    }

    const onNoClicked = () => {
        onClicked(false)
    }

    const onClicked = async (answer) => {
        const userLoggedIn = await isCurrentSessionValid()
        if (!userLoggedIn) {
            alert("로그인되지 않았습니다.")
            return
        }

        if (questions.length < 1) return

        switch (question.personalityScoreType) {
            case "Extroversion":
                setExtroversionScore(
                    extroversionScore + answer
                        ? question.trueValue
                        : question.falseValue
                )
                break

            case "Alcohol":
                setAlcoholScore(
                    alcoholScore + answer
                        ? question.trueValue
                        : question.falseValue
                )
                break

            case "Smoking":
                setSmokingScore(
                    smokingScore + answer
                        ? question.trueValue
                        : question.falseValue
                )
                break
            default:
                break
        }

        if (currentQuestionIndex + 1 === questions.length) {
            //last question, submit

            const currentUserId = await getCurrentSessionId()

            const currentUser = await getUser(currentUserId)
            currentUser.personalityScoreType.extroversionScore =
                extroversionScore
            currentUser.personalityScoreType.alcoholScore = alcoholScore
            currentUser.personalityScoreType.smokingScore = smokingScore

            const res = await updateUser(currentUserId, currentUser)
            if (!res) return

            navigate("/")
        }

        // go to next question
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setQuestion(questions[currentQuestionIndex])
    }

    return (
        <>
            <Header />
            <SurveyContainer>
                <SurveyQuestionBox>
                    <SurveyQuestionText>{question.question}</SurveyQuestionText>
                </SurveyQuestionBox>
                <SurveyAnswerBox>
                    <Button
                        size={"primary"}
                        height={"primary"}
                        outline={false}
                        text={"Yes"}
                        onClicked={onYesClicked}
                    />
                    <Button
                        size={"primary"}
                        height={"primary"}
                        text={"No"}
                        onClicked={onNoClicked}
                    />
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
