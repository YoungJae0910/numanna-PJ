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
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"

const Survey = () => {
    const percentage = 66
    const navigate = useNavigate()

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [questions, setQuestions] = useState([])
    const [question, setQuestion] = useState({})

    const [extroversionScore, setExtroversionScore] = useState(0)
    const [alcoholScore, setAlcoholScore] = useState(0)
    const [smokingScore, setSmokingScore] = useState(0)

    const getExtroversionScore = () => {
        return window.sessionStorage.getItem("extroversionScore")
            ? Number(window.sessionStorage.extroversionScore)
            : 0
    }

    const getAlcoholScore = () => {
        return window.sessionStorage.getItem("alcoholScore")
            ? Number(window.sessionStorage.alcoholScore)
            : 0
    }

    const getSmokingScore = () => {
        return window.sessionStorage.getItem("smokingScore")
            ? Number(window.sessionStorage.smokingScore)
            : 0
    }

    const incrementExtroversionScore = (amount) => {
        window.sessionStorage.setItem(
            "extroversionScore",
            `${getExtroversionScore() + amount}`
        )
    }

    const incrementAlcoholScore = (amount) => {
        window.sessionStorage.setItem(
            "alcoholScore",
            `${getAlcoholScore() + amount}`
        )
    }

    const incrementSmokingScore = (amount) => {
        window.sessionStorage.setItem(
            "smokingScore",
            `${getSmokingScore() + amount}`
        )
    }

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

    const a = async () => {
        const userLoggedIn = await isCurrentSessionValid()
        if (!userLoggedIn) {
            alert("로그인되지 않았습니다.")

            navigate("/login")
        }
    }

    useEffect(() => {
        a()
    }, [])

    const onYesClicked = () => {
        onClicked(true)
    }

    const onNoClicked = () => {
        onClicked(false)
    }

    const onClicked = (answer) => {
        if (questions.length < 1) return

        switch (question.personalityScoreType) {
            case "Extroversion":
                setExtroversionScore(
                    incrementExtroversionScore(
                        answer ? question.trueValue : question.falseValue
                    )
                )
                break

            case "Alcohol":
                incrementAlcoholScore(
                    answer ? question.trueValue : question.falseValue
                )
                break

            case "Smoking":
                incrementSmokingScore(
                    answer ? question.trueValue : question.falseValue
                )
                break
            default:
                break
        }

        handleGoToNextQuestion()
    }

    const handleGoToNextQuestion = async () => {
        if (currentQuestionIndex + 1 === questions.length) {
            //last question, submit

            const currentUserId = await getCurrentSessionId()

            const currentUser = await getUser(currentUserId)
            console.log(currentUser)
            currentUser.personalityType.ExtroversionScore =
                getExtroversionScore()
            currentUser.personalityType.AlcoholScore = getAlcoholScore()
            currentUser.personalityType.SmokingScore = getSmokingScore()

            const res = await updateUser(currentUserId, currentUser)
            if (!res) return

            navigate("/partner")
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
                        onClick={onYesClicked}
                    />
                    <Button
                        size={"primary"}
                        height={"primary"}
                        text={"No"}
                        onClick={onNoClicked}
                    />
                    <SmallCircularProgressbar
                        value={
                            questions.length > 0
                                ? (currentQuestionIndex / questions.length) *
                                  100
                                : 0
                        }
                        styles={buildStyles({
                            // Rotation of path and trail, in number of turns (0-1)
                            rotation: 0,

                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: "round",

                            // Text size
                            textSize: "30px",

                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 0.5
                        })}
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
const SmallCircularProgressbar = styled(CircularProgressbar)`
    width: 100px;

    .CircularProgressbar-path {
        stroke: #f94772;
    }
    .CircularProgressbar-trail {
        stroke: gray;
    }
    .CircularProgressbar-text {
        fill: black;
    }
`
