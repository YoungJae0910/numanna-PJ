import React, { useState } from "react"
import { storage } from "./firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { Avatar } from "@mui/material"
import styled from "styled-components"

export default function ImageUpload() {
    const [image, setImage] = useState(null)
    const [url, setUrl] = useState(null)
    const fileInput = React.useRef(null)

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    // const handleImageUpload = () => {
    //     fileInput.current.click()
    // }

    const handleSubmit = () => {
        const imageRef = ref(storage, "image")
        uploadBytes(imageRef, image)
            .then(() => {
                getDownloadURL(imageRef)
                    .then((url) => {
                        setUrl(url)
                    })
                    .catch((error) => {
                        console.log(error.message, "Error uploading")
                    })
                setImage(null)
            })
            .catch((error) => {
                console.log(error.message, "Error uploading")
            })
    }

    return (
        <div>
            <StImgBox>
                <Avatar
                    alt="Remy Sharp"
                    src={url}
                    sx={{ width: 150, height: 150 }}
                    onClick={() => {
                        fileInput.current.click()
                    }}
                />
                <input
                    type="file"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    ref={fileInput}
                />
            </StImgBox>

            <StBtnBox>
                {/* <StBtn onClick={handleImageUpload}>파일업로드</StBtn> */}
                <StBtn onClick={handleSubmit}>이미지변경</StBtn>
            </StBtnBox>
        </div>
    )
}

const StBtn = styled.button`
    width: 40%;
    height: 30px;
    border-radius: 5px;
    color: #f25a5a;
    background-color: white;
    padding: 5px;
    margin: 5px;
    border: 2px solid #f6809f;
    font-weight: 600;
    outline: none;
    &:hover {
        background-color: #f25a5a;
        color: white;
    }
`

const StBtnBox = styled.div`
    display: flex;
    justify-content: center;
`

const StImgBox = styled.div`
    display: flex;
    justify-content: center;
    width: 150px;
    height: 150px;
    margin: 30px 80px 5px 80px;
`
