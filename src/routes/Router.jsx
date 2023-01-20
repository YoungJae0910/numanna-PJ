import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Survey from '../components/Survey/Survey';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/survey' element={<Survey />} />
      </Routes>
    </BrowserRouter>
  );
}
