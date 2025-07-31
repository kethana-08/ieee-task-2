import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import MembersOnly from "./components/MembersOnly";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./utils/auth";
import './App.css';
function App() {
  return (
    <HashRouter>
      {/* Navigation bar */}
      <nav className="top-nav">
        <Link to="/">Registration</Link>
        <Link to="/login">Members Only</Link>
      </nav>


      {/* Routes */}
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/members"
          element={
            <ProtectedRoute>
              <MembersOnly />
            </ProtectedRoute>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
