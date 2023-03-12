import { motion } from "framer-motion";
import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const forms = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(true);

    emailjs.sendForm('service_qhjf98g', 'template_z72rhif', forms.current, 'ceYo0r65IWOtNZvWT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.form
      action=""
      ref={forms}
      className="contactForm"
      onSubmit={sendEmail}
    >
      <h4 className="contentTitle">Message Me</h4>
      <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
        <input
          type="text"
          className="formControl"
          onChange={handleChange}
          value={formData.name}
          id="contactName"
          name="name"
          placeholder="Name"
          required
        />
      </div>
      <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
        <input
          type="email"
          className="formControl"
          onChange={handleChange}
          value={formData.email}
          id="contactEmail"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="col-12 formGroup">
        <input
          type="text"
          className="formControl"
          onChange={handleChange}
          value={formData.subject}
          id="contactSubject"
          name="subject"
          placeholder="Subject"
          required
        />
      </div>
      <div className="col-12 formGroup">
        <textarea
          className="formControl"
          onChange={handleChange}
          value={formData.message}
          name="message"
          id="contactMessage"
          rows="5"
          placeholder="Message"
          required
        ></textarea>
      </div>
      <div className="col-12 formGroup formSubmit">
        <button className="btn">{success ? "Message Sent" : "Send Message"}</button>
      </div>
    </motion.form>
  );
};

export default Form;
