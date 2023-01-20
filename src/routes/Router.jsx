import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Survey from "../components/Survey/Survey";
import Partner from "../components/Partner/Partner";
import Header from "../page/Header";
import Footer from "../page/Footer";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/survey" element={<Survey />} />
        <Route path="/partner" element={<Partner />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
