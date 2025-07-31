import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ProfileSelector from "./components/ProfileSelector";
import ProfilePage from "./components/ProfilePage";
import ContactPage from "./components/ContactPage";
import ProfessionalPage from "./components/ProfessionalPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profiles" element={<ProfileSelector />} />
        <Route path="/profile/:profileType" element={<ProfilePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/professional" element={<ProfessionalPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
