import React, { useState } from "react"
import styled from "styled-components"
import logo from "../../assets/logo.png"
import favicon from "../../assets/favicon.png"
import EditModal from "../Modal/EditModal"

const MyPage = () => {
    // 정보수정은 모달창으로 만들기

    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => {
        setModalOpen(true)
    }
    const closeModal = () => {
        setModalOpen(false)
    }
    return (
        <StBox>
            <StLogoBox>
                <StLogo src={logo} />
            </StLogoBox>

            <StMainBox>
                {/* 사진업로드될 부분 -임시로 로고 넣어둠 */}
                <StImg src={favicon} />
                {/* 유저 닉네임?또는 이름?이 들어올 부분 */}
                <StText>User.name</StText>
                <StBtn
                    onClick={() => {
                        openModal()
                    }}
                >
                    정보수정
                </StBtn>

                <EditModal open={modalOpen} close={closeModal}></EditModal>

                <StBtn style={{ marginBottom: "20px" }}>탈퇴하기</StBtn>
            </StMainBox>
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

const StImg = styled.img`
    width: 150px;
    height: 150px;
    margin: 30px 80px;
    /* margin-top: 70px; */
    border-radius: 50%;
`

const StLogoBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StMainBox = styled.div`
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
    /* padding-bottom: 20px; */
`

const StBtn = styled.button`
    width: 60%;
    border-radius: 5px;
    color: white;
    background-color: #f25a5a;
    padding: 10px;
    margin: 10px;
    border: 2px solid #f6809f;
    font-weight: 600;
    outline: none;
    &:hover {
        background-color: white;
        color: #f25a5a;
    }
`

const StText = styled.span`
    color: #f25a5a;
    font-size: 15px;
    margin-bottom: 10px;
    font-weight: 600;
`
