import Partner from "../components/Partner/Partner";
import Login from "../components/Login/Login";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Survey from '../components/Survey/Survey';
import Main from '../components/Main/Main';
import Header from '../page/Header';
import Footer from '../page/Footer';
import Matching from '../components/Matching/Matching';
import SignUp from "../components/SignUp/SignUp";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/survey" element={<Survey />} />
        <Route path="/" element={<Main />} />
        <Route path="/matching" element={<Matching />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/partner" element={<Partner />} />

      </Routes>

    </BrowserRouter>
  );
}
