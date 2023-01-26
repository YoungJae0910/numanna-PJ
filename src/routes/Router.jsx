import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Survey from "../components/Survey/Survey"
import Main from "../components/Main/Main"
import SignUp from "../components/SignUp/SignUp"
import Matching from "../components/Matching/Matching"
import Login from "../components/Login/Login"
import Map from "../components/Map/Map"
import Partner from "../components/Partner/Partner"
import MyPage from "../components/MyPage/MyPage"
import Logout from "../components/Logout/Logout"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="matching/:id" element={<Matching />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/map" element={<Map />} />
                <Route path="/partner" element={<Partner />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="survey" element={<Survey />} />
            </Routes>
        </BrowserRouter>
    )
}
