import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import Dashboard from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* register */}

        <Route path="/register" element={<RegisterPage />} />
        {/* Dashboard */}

        <Route path="/dashboard" element={<Dashboard />} />
        {/* Redirect */}
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
