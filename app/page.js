// File: app/page.js (Home Page with Contact Page Routing)
"use client";
import { useState } from "react";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import CourseContent from "./components/CourseContent";
import ContactForm from "./components/ContactForm";

export default function HomePage() {
  const [page, setPage] = useState("home");
  const name = "USER";

  return (
    <div className="container">
      <header className="site-header">
        <h1 className="site-title">React Application</h1>
      </header>

      <Navigation onNavigate={setPage} />

      {page === "home" && <Welcome name={name} />}
      {page === "course" && <CourseContent />}
      {page === "contact" && <ContactForm />}
    </div>
  );
}
