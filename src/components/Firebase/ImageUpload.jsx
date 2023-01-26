import React, { useState } from "react"
import { storage } from "./firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { Avatar } from "@mui/material"

export default function ImageUpload() {
    const [image, setImage] = useState(null)
    const [url, setUrl] = useState(null)

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

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
            <Avatar
                alt="Remy Sharp"
                src={url}
                sx={{ width: 150, height: 150 }}
            />
            <input type="file" onChange={handleImageChange} />
            <button onClick={handleSubmit}>이미지변경</button>
        </div>
    )
}
