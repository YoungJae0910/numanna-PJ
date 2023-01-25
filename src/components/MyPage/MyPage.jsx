import { borderRadius } from "@mui/system"
import React from "react"
import styled from "styled-components"
import logo from "../../assets/logo.png"
import favicon from "../../assets/favicon.png"
import login from "../../assets/login.png"
const MyPage = () => {
    return (
        <StBox>
            <StLogoBox>
                <StLogo src={logo} />
            </StLogoBox>

            <StInputBox>
                {/* 사진업로드될 부분 -임시로 로고 넣어둠 */}
                <StLogo
                    src={login}
                    style={{ maxWidth: "40%", borderRadius: "50%" }}
                />

                <StBtn>정보수정</StBtn>
                <StBtn>탈퇴하기</StBtn>
            </StInputBox>
        </StBox>
    )
}

export default MyPage

const StBox = styled.div`
    display: flex;
    flex-direction: column;
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

const StInputBox = styled.div`
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

const StBtn = styled.button`
    width: 60%;
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
    }
`
