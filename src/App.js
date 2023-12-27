import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about/about";
import AppointmentsPage from "./pages/appointments/appointments";
import ContactPage from "./pages/contact/contact";
import HomePage from "./pages/home/home";
import ResourcesPage from "./pages/resources/resources";
import ReviewsPage from "./pages/reviews/reviews";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/appointments" element={<AppointmentsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route exact path="/" element={<HomePage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
