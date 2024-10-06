import React, { useRef } from "react";
import "./contact.css";
import { FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import sendIcon from "../../assets/Send.png";
import gmailIcon from "../../assets/gmail.png";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import telegramIcon from "../../assets/telegram.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_q7wr5i5",
        "template_ginaeys",
        form.current,
        "d_5YsU5Jhe470XN7l"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/drive/folders/1HdFxPidyulx8z3srzfRpKVav-OVJAbs5",
      "_blank"
    );
  };

  return (
    <section id="contact">
      <h1 className="contactPageTitle">Contact</h1>
      <p className="contactDescription">
        Please use the form below to reach out regarding any opportunities. You
        can find my contact details, LinkedIn, GitHub profiles, and download my
        resume through the provided link. Feel free to connect with me via any
        platform. Looking forward to connecting with you!
      </p>
      <div className="contactContainer">
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            <img src={sendIcon} alt="Send Icon" />
            Send Message
          </button>
        </form>
        <div className="contactDetails">
          <div className="contactDetailItem">
            <FaPhone className="contactDetailIcon" />
            <span>8851654290</span>
          </div>
          <div className="contactDetailItem">
            <img
              src={telegramIcon}
              className="contactDetailIcon"
              alt="Telegram Icon"
            />
            <span>9315608609</span>
          </div>
          <div className="links">
            <a
              href="mailto:m.yadav9315@gmail.com"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gmailIcon} alt="Gmail" />
            </a>
            <a
              href="https://www.linkedin.com/in/megha-yadav-021851245"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/Megha931"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          <button className="downloadBtn" onClick={handleDownloadCV}>
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
