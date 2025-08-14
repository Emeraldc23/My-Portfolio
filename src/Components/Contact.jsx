import "./stylesComp/contact.css";
import mail from "../assets/image/mail_icon.svg";
import phone from "../assets/image/call_icon.svg";
import location from "../assets/image/location_icon.svg";
import { useState } from "react";

const FORMSPARK_ACTION_URL = "https://submit-form.com/PKk65adHZ";
export default function Contact() {
  const [value, setValue] = useState({ name: "", email: "", message: "" });
  const [submit, setSubmit] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit("sending...");
    try {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(value),
      });
      setValue({ name: "", email: "", message: "" });
      setSubmit("Form Submitted");
      console.log("submitted");

      setTimeout(() => {
        setSubmit("");
      }, 3000);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="contact">
      <div className="contactInfo">
        <h1>Let's talk</h1>
        <p className="para1">
          I'm currently available to take on a new project, so feel free to send
          me a message about anything that you want me to work on. You can
          contact anytime.
        </p>
        <div className="mini-info">
          <div className="info">
            <img src={mail} alt="" />
            <p>maduagwumartins16@gmail.com</p>
          </div>
          <div className="info">
            <img src={phone} alt="" />
            <p>09039131265</p>
          </div>
          <div className="info">
            <img src={location} alt="" />
            <p>Enugu, Nigeria</p>
          </div>
        </div>
      </div>
      <div className="contactForm">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={value.name}
            onChange={(e) => {
              setValue({ ...value, name: e.target.value });
            }}
            required
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            value={value.email}
            onChange={(e) => {
              setValue({ ...value, email: e.target.value });
            }}
            required
          />
          <label htmlFor="msg">Write your message here</label>
          <textarea
            name="msg"
            id="msg"
            rows={8}
            value={value.message}
            placeholder="Enter your message"
            required
            onChange={(e) => {
              setValue({ ...value, message: e.target.value });
            }}
          />
          <div className="submitBtn">
            <button type="submit">Submit now</button>
          </div>
          <div className="submitMsg" disabled={submit === "Sending..."}>
            {submit}
          </div>
        </form>
      </div>
    </div>
  );
}
