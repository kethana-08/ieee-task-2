import React, { useState } from "react";
import "./Form.css";
import ieeeLogo from "../assets/ieee.logo.jpg";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function RegistrationForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Save to localStorage (Task-2)
    const participants = JSON.parse(localStorage.getItem("participants")) || [];
    participants.push(formData);
    localStorage.setItem("participants", JSON.stringify(participants));
alert("Registration successful!");
    setFormData({ name: "", email: "" });

    // ✅ Save to Firebase (Bonus Task)
    try {
      await addDoc(collection(db, "participants"), formData);
    } catch (error) {
      console.error("Error saving to Firebase:", error);
    }

    alert("Registration successful!");
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="form-container">
      <img src={ieeeLogo} alt="IEEE Logo" className="ieee-logo" />
      <h1 className="bootcamp-title">IEEE Web-Dev Bootcamp</h1>

      <div className="social-icons">
        <FaLinkedin />
        <FaInstagram />
        <FaTwitter />
      </div>

      <h2 className="form-heading">Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;