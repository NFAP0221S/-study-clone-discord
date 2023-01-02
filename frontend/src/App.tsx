import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import Dashboard from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/login">
          <LoginPage />
        </Route>
        {/* register */}
        <Route path="/register">
          <RegisterPage />
        </Route>
        {/* Dashboard */}
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        {/* Redirect */}
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
