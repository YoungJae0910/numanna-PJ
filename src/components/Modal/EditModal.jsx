import React from "react"
import { useState, useEffect } from "react"
import Edit from "../MyPage/Edit"
import "./editmodal.css"

// 자식 컴포넌트
const EditModal = (props) => {
    const { open, close } = props
    // input창에 입력한 닉네임으로 변경

    // const [nicknameIsShow, setNicknameIsShow] = useState(true)
    // useEffect(() => {
    //     fetch("http://localhost:3001/user")
    //         .then((res) => {
    //             return res.json()
    //         })
    //         .then((data) => {
    //             console.log(data)
    //             setNicknameIsShow(data)
    //         })
    // }, [])

    return (
        <>
            {/* // 모달이 열릴때 openModal 클래스가 생성된다. */}
            <div className={open ? "OpenModal Modal" : "Modal"}>
                {/* <div>
                    닉네임
                    {nicknameIsShow && <Edit nicknameIsShow={nicknameIsShow} />}
                </div> */}
                {open ? (
                    <section>
                        <main>
                            <Edit close={close} />
                        </main>
                    </section>
                ) : null}
            </div>
        </>
    )
}

export default EditModal
