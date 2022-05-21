import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProvidersPage from './pages/ProvidersPage';
import SignupPage from './pages/SignupPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/criar-conta" element={<SignupPage />} />
        <Route path="/prestadores" element={<ProvidersPage />} />
      </Routes>
    </BrowserRouter>
  );
}
