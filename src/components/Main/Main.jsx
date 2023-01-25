import styled from "styled-components"
import React from "react"
import mainimg from "../../assets/mainimg.jpeg"
import logo from "../../assets/numanna_logo.png"
import { Link } from "react-router-dom"

export default function Main() {
    return (
        <WrapDiv>
            <Mainimg src={mainimg} />
            <TextDiv>
                <TitleLogo src={logo} />
                <Textp1>아무도 만나지 못했기에...</Textp1>
                <Textp2>누구나 만날 수 있는</Textp2>
                <Textp3>신개념 데이팅 사이트</Textp3>
                <ButtonLink to={"/signup"}>
                    <Button1>지금가입</Button1>
                </ButtonLink>
                <ButtonLink to={"/login"}>
                    <Button2>로그인</Button2>
                </ButtonLink>
            </TextDiv>
        </WrapDiv>
    )
}

const WrapDiv = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
`

const Mainimg = styled.img`
    width: 100%;
    height: 100vh;
    filter: brightness(20%);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`

const TitleLogo = styled.img`
    width: 300px;
    height: 100px;
    margin-top: 450px;
    z-index: 20;
`

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
`
const Textp1 = styled.p`
    position: absolute;
    color: white;
    width: 80%;
    text-align: center;
    margin-top: 750px;
    font-size: 28px;
    font-weight: bold;
`

const Textp2 = styled.p`
    position: absolute;
    color: white;
    width: 60%;
    text-align: center;
    margin-top: 810px;
    font-size: 24px;
    font-weight: bold;
`
const Textp3 = styled.p`
    position: absolute;
    color: white;
    width: 60%;
    text-align: center;
    margin-top: 865px;
    font-size: 25px;
    font-weight: bold;
`

const Button1 = styled.button`
    position: absolute;
    width: 200px;
    height: 40px;
    margin-top: 250px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    background-color: transparent;
    border: 1px solid white;
    &:hover {
        background-color: #ffe1e1;
        border: 1px solid #ffe1e1;
        color: #f25a5a;
        transition: 0.5s;
    }
`
const Button2 = styled.button`
    position: absolute;
    width: 200px;
    height: 40px;

    margin-top: 310px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    background-color: transparent;
    border: 1px solid white;
    &:hover {
        background-color: #ffe1e1;
        border: 1px solid #ffe1e1;
        color: #f25a5a;
        transition: 0.5s;
    }
`

const ButtonLink = styled(Link)`
    display: flex;
    justify-content: center;
`
