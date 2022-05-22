import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider, { RedirectAuth, RequireAuth } from './context/AuthContext';
import ImportPage from './pages/ImportPage';
import LoginPage from './pages/LoginPage';
import NewProviderPage from './pages/NewProviderPage';
import NewServicePage from './pages/NewServicePage';
import ProvidersPage from './pages/ProvidersPage';
import ServicesPage from './pages/ServicesPage';
import SignupPage from './pages/SignupPage';

export default function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={(
            <RedirectAuth>
              <LoginPage />
            </RedirectAuth>
          )} />

          <Route path="/criar-conta" element={(
            <RedirectAuth>
              <SignupPage />
            </RedirectAuth>
          )} />

          <Route path="/prestadores" element={(
            <RequireAuth>
              <ProvidersPage />
            </RequireAuth>
          )} />

          <Route path="/prestadores/novo" element={(
            <RequireAuth>
              <NewProviderPage />
            </RequireAuth>
          )} />

          <Route path="/servicos" element={(
            <RequireAuth>
              <ServicesPage />
            </RequireAuth>
          )} />

          <Route path="/servicos/novo" element={(
            <RequireAuth>
              <NewServicePage />
            </RequireAuth>
          )} />

          <Route path="/importar" element={(
            <RequireAuth>
              <ImportPage />
            </RequireAuth>
          )} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
