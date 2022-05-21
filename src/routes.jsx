import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ImportPage from './pages/ImportPage';
import LoginPage from './pages/LoginPage';
import NewProviderPage from './pages/NewProviderPage';
import NewServicePage from './pages/NewServicePage';
import ProvidersPage from './pages/ProvidersPage';
import ServicesPage from './pages/ServicesPage';
import SignupPage from './pages/SignupPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/criar-conta" element={<SignupPage />} />
        <Route path="/prestadores" element={<ProvidersPage />} />
        <Route path="/prestadores/novo" element={<NewProviderPage />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/servicos/novo" element={<NewServicePage />} />
        <Route path="/importar" element={<ImportPage />} />
      </Routes>
    </BrowserRouter>
  );
}
