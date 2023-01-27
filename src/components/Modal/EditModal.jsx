import React, { useState } from "react"
import Edit from "../MyPage/Edit"
import "./editmodal.css"

const EditModal = (props) => {
    const { open, close } = props

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? "OpenModal Modal" : "Modal"}>
            {open ? (
                <section>
                    <main>
                        <Edit close={close} />
                    </main>
                </section>
            ) : null}
        </div>
    )
}

export default EditModal
