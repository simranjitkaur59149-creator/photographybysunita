import React from "react";
import "./contact.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import contact from "./assets/contact-logo.png";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    city: "",
    ocassion: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, contact, city, ocassion, date, message } = formData;

    const text = `Hello, I have an inquiry:
Name: ${name}
Email: ${email}
Phone: ${contact}
City: ${city}
Occasion: ${ocassion}
Date: ${date}
Message: ${message}`;

    const phoneNumber = "917710792361"; // your WhatsApp number (with country code)

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="contact">
      <h1>Let's work together</h1>
      <p>For all inquiries, please contact us</p>
      <img className="contact-logo" src={contact} alt="contact-logo" />
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Name*"
          required
          onChange={handleChange}
        />
          <input
            className="input"
            type="tel"
            name="contact"
            placeholder="Contact Number*"
            required
            onChange={handleChange}
          />
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          
          onChange={handleChange}
        />
        <input
          className="input"
          type="text"
          name="city"
          placeholder="City/State*"
          required
          onChange={handleChange}
        />
        <input
          className="input"
          type="text"
          name="ocassion"
          placeholder="Occasion*"
          required
          onChange={handleChange}
        />
        <input
          className="input"
          type="date"
          name="date"
          required
          onChange={handleChange}
        />
        <textarea
          className="input"
          name="message"
          placeholder="Message"
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="send-btn">
          SEND <FaArrowRightLong />
        </button>
      </form>
    </section>
  );
}
