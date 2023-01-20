import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Survey from '../components/Survey/Survey';
import Main from '../components/Main/Main';
import Header from '../page/Header';
import Footer from '../page/Footer';
import Matching from '../components/Matching/Matching';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/survey' element={<Survey />} />
        <Route path='/' element={<Main />} />
        <Route path='/matching' element={<Matching />} />
      </Routes>
    </BrowserRouter>
  );
}
