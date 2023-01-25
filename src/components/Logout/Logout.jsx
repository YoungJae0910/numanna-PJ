import React from "react"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../../api/authApi.ts"

// 설문조사와 파트너선택페이지 오른쪽 상단에 들어갈 예정
const Logout = () => {
    const navigate = useNavigate()

    return (
        <StBox>
            {/* 1.링크로 마이페이지 연결하기 */}
            <StyleLink to="/mypage">
                <StText> &&님 환영합니다.</StText>
            </StyleLink>

            {/* 2.로그아웃 구현하기 */}
            <StBtn
                onClick={() => {
                    logout()
                    navigate("/")
                }}
            >
                로그아웃
            </StBtn>
        </StBox>
    )
}

export default Logout

const StBox = styled.div`
    display: flex;
    justify-content: end;
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

const StBtn = styled.button`
    border-radius: 5px;
    color: white;
    background-color: #f25a5a;
    margin: 5px;
    border: 2px solid #f6809f;
    font-weight: 600;
    outline: none;
    &:hover {
        background-color: white;
        color: #f25a5a;
    }
`
