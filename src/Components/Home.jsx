import AnchorLink from "react-anchor-link-smooth-scroll";
import pics from "../assets/image/profile_pics.jpg";
import "./stylesComp/home.css";
export default function Home() {
  return (
    <main id="home" className="homePage">
      <div className="picsBox">
        <img src={pics} alt="Profile picture" className="profilePics" />
      </div>
      <div className="contents">
        <h2>
          <span className="colorHeader">I'm Martins Maduagwu,</span> frontend
          developer based in Nigeria.
        </h2>
        <p>
          I am a self-taught frontend developer, based in Nigeria. I have worked
          with GAOTek, GWC Tech Hub. I am passionate about building projects
          scalable projects.
        </p>
        <div className="btns">
          <button className="btn1">
            <AnchorLink offset={50} className="anchor-Link" href="#contact">
              Connect With Me
            </AnchorLink>
          </button>
          <button className="btn2">My resume</button>
        </div>
      </div>
    </main>
  );
}
