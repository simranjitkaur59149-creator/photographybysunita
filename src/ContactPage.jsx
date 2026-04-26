import React from "react";
import "./contact.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import contact from "./assets/contact-logo.png"
export default function ContactPage() {
  const navigate = useNavigate();

  return (
    <section className="contact">
      <h1>Let's work together</h1>
      <p> For all inquiries, please email us </p>
<img className="contact-logo" src={contact} alt="contact-logo" />
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="form"
      >
        <input type="hidden" name="access_key"  value="c399dd3b-22b2-4f08-9fd8-f617d4e73051" />
        <input className="input" type="text" name="name" placeholder="Name*" required />
        <input className="input" type="email" name="email" placeholder="Email*" required />
        <input className="input" type="tel" name="contact" placeholder="Contact Number*" />
        <input
          className="input"
          type="text"
          name="city"
          placeholder="City/State*"
          required
        />
        <input className="input" type="text"  name="ocassion" placeholder="Ocassion" required />
        <input
          className="input"
          type="date"
          name="date"
          placeholder="Booking Date"
          required
        />
        <textarea
          className="input"
          name="message"
          id=""
          placeholder="Message"
          required
        ></textarea>
        <button type="submit" className="send-btn">
        
            SEND <FaArrowRightLong />{" "}
         
        </button>
      </form>
    </section>
  );
}
