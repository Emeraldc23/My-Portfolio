import pics from "../assets/image/profile_pics.jpg";
import "./stylesComp/about.css";

export default function About() {
  return (
    <main>
      <div className="aboutPage">
        <div className="aboutImage">
          <img src={pics} alt="" className="aboutImg" />
        </div>
        <div className="aboutContent">
          <p className="para1">
            I am an experienced self-taught Frontend Developer with over a year
            of professional expertise in the field. Throughout my career, I have
            been opportuned to collaborate with prestigious organizations,
            contributing to their success and growth.
          </p>
          <p className="para2">
            My passion for frontend development is not only reflected in my
            experience but also in the enthusiasm and dedication I bring to each
            project.
          </p>
          <div className="skills">
            <div className="skillList">
              <p className="skill">HTML</p>
              <hr style={{ width: "70%", height: "7px" }} />
            </div>
            <div className="skillList">
              <p className="skill">CSS</p>
              <hr style={{ width: "70%", height: "7px" }} />
            </div>

            <div className="skillList">
              <p className="skill">JavaScript</p>
              <hr style={{ width: "70%", height: "7px" }} />
            </div>

            <div className="skillList">
              {" "}
              <p className="skill">React JS</p>{" "}
              <hr style={{ width: "60%", height: "7px" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="aboutRating">
        <div className="experience">
          <p className="years">1+</p>
          <p className="text">YEARS OF EXPERIENCE</p>
        </div>
        <hr className="divider" />
        <div className="experience">
          <p className="years">3+</p>
          <p className="text">PROJECTS COMPLETED</p>
        </div>
        <hr className="divider" />
        <div className="experience">
          <p className="years">2+</p>
          <p className="text">HAPPY CLIENTS</p>
        </div>
      </div>
    </main>
  );
}
