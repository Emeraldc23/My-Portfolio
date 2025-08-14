import { useState } from "react";
import "./stylesComp/footer.css";
import logo from "../assets/image/EmeraldLogo.png";

const FORMSPARK_ACTION_URL = "https://submit-form.com/PKk65adHZ";
export default function Footer() {
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState("");
  const [subscribe, setSubscribe] = useState("");
  async function handleEmail(e) {
    e.preventDefault();
    try {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(email),
      });
      setEmail("");
      setSubscribe("Subscribed");
      console.log("subscribed");

      setTimeout(() => {
        setSubscribe("");
      }, 3000);
    } catch (e) {
      console.log(e);
    }
  }
  const now = Date.now();
  const year = new Date(now).getFullYear();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="footer-Content">
          <div className="logo-contents">
            <p>
              I am a self taught frontend developer from Nigeria with one year
              plus of experience in companies like GWC Tech Hub and GAOTek
              Technologies.
            </p>
          </div>
          <form onSubmit={handleEmail} className="emailSub">
            <input
              type="text"
              placeholder="👤 Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <button type="submit" className="subscribe">
              Subcribe
            </button>
            <p
              style={{ marginTop: "20px", fontWeight: "bold", color: "green" }}
            >
              {subscribe}
            </p>
          </form>
        </div>

        <hr />
        <div className="lastSection">
          <p>&copy;{year} Emerald Tech Hub. All rights reversed.</p>
          <ul className="footer-links">
            <li className="ft-link">Terms of Services</li>
            <li className="ft-link">Privacy Policy</li>
            <li className="ft-link">Connect with me</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
