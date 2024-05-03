import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import MainPlanPage from './pages/MainPlanPage';
import MySchedule from './pages/MySchedule';
import './styles/App.css'; // Aby zastosować globalne style

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/my-schedule" element={<MySchedule />} />
        <Route path="/plan" element={<MainPlanPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
