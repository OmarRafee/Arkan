import React, { useState } from "react";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    from_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_jwticqi", // 🔁 Replace this
        "template_e4aqb8l", // 🔁 Replace this
        formData,
        "OC-kGvkcCmtGc2lrh" // 🔁 Replace this
      )
      .then(() => {
        alert("✅ Your message has been sent!");
        setFormData({ from_email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("❌ EmailJS Error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Questions, feedback, or inquiries? We'd love to hear from you. <br />
          Fill out the form below to get in touch with us.
        </p>
      </header>

      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="from_email">Your Email Address</label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
          />

          <label htmlFor="message">How can we help?</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            required
          ></textarea>

          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
