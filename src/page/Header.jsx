import React from "react"
import { Container } from "@mui/system"
import styled from "styled-components"
import logo_empty from "../assets/logo_empty.png"
import numanna_logo from "../assets/numanna_logo.png"
import Logout from "../components/Logout/Logout"
import { useNavigate } from "react-router-dom"
const Header = () => {
    const navigate = useNavigate()
    return (
        <HeaderWrap>
            <Container
                maxWidth="lg"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}

                style={{ cursor: "pointer" }}
            >
                <Logo
                    onClick={() => {
                        navigate("/")
                    }}
                >
                    <img src={logo_empty} alt="로고" height="40px" />
                    <img src={numanna_logo} alt="글씨로고" height="40px" />
                </Logo>
                <Logout />
            </Container>
        </HeaderWrap>
    )
}

export default Header

// 헤더 스타일 컴포넌트
const HeaderWrap = styled.header`
    width: 100%;
    height: 80px;
    background-color: #f9f2f2;
    display: flex;
    align-items: center;
`

export const Logo = styled.h1`
    padding-top: 8px;
`
