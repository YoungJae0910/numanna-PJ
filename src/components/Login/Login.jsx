import React from "react"
import styled from "styled-components"
import logo from "../../assets/logo.png"
import login from "../../assets/login.png"
import { login as loginFunction } from "../../api/authApi.ts"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

// import { Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    const [loginPressed, setLoginPressed] = useState(false)

    const onLoginPressed = async (e) => {
        e.preventDefault()
        setLoginPressed(true)
        const res = await loginFunction(id, password)
        console.log(res)

        if (!res) {
            alert("로그인 실패")
            return
        }

        navigate("/loginmain")
    }

    return (
        <StBox>
            <StLogoBox>
                <Link to={"/"}>
                    <StLogo src={logo} />
                </Link>
            </StLogoBox>

            <StInputBox
                onSubmit={(e) => {
                    onLoginPressed(e)
                }}
            >
                <StLogo src={login} style={{ maxWidth: "40%" }} />
                <StInput
                    placeholder="아이디를 입력하세요."
                    type="text"
                    value={id}
                    onChange={(e) => {
                        setId(e.target.value)
                    }}
                />
                <StInput
                    placeholder="비밀번호를 입력하세요."
                    type="password"
                    style={{ marginTop: "20px" }}
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <StBtn type="submit">로그인하기</StBtn>
                {loginPressed && (
                    <StyledTextP>
                        아이디와 비밀번호를 확인해주세요 :/
                    </StyledTextP>
                )}
                {/* 링크들어갈예정 */}
                {/* <Link to="/"></Link> */}
                <StyleLink to="/signup">
                    <StText>아직 회원이 아니신가요?</StText>
                </StyleLink>
            </StInputBox>
        </StBox>
    )
}

export default Login

const StBox = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

    width: 100%;
    height: 100%;
`
const StLogo = styled.img`
    max-width: 300px;
    margin: 30px;
    margin-top: 100px;
`

const StLogoBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StInputBox = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #fe6473;
    max-width: 90%;
    /* height: 500px; */
    background-color: #ffe1e1;
    border-radius: 5px;
    margin: 20px;
    padding-bottom: 20px;
`

const StInput = styled.input`
    width: 80%;
    /* height: 40px; */
    border-radius: 10px;
    border: 1px solid rgb(195, 190, 190);
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    outline: none;

    /* margin: 10px; */

    &:focus {
        outline: none;
        border: 2px solid #fe6473;
    }
`

const StBtn = styled.button`
    width: 40%;
    /* height: 100% */
    border-radius: 5px;
    color: white;
    background-color: #f25a5a;
    padding: 10px;
    margin: 20px;
    border: 2px solid #f6809f;
    font-weight: 600;
    outline: none;
    &:hover {
        background-color: white;
        color: #f25a5a;
        /* transform: scale(1.1);
    transition: transform 0.5s; */
    }
`

const StText = styled.span`
    color: rgb(195, 190, 190);
    font-size: 15px;
    margin-bottom: 30px;
    font-weight: 600;
`
const StyleLink = styled(Link)`
    text-decoration: none;
`
const StyledTextP = styled.p`
    font-size: 8px;
    color: red;
`
