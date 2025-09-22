import "./stylesComp/project.css";
import mywork_data from "../assets/mywork_data";
import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

export default function Projects() {
  return (
    <main className="myWork">
      <div className="gridContents">
        {mywork_data.map((image, index) => (
          <div key={index} className="cardImg">
            <a href={image.w_url} target="_blank">
              {/*  <Link to={image.w_url} target="_blank"></Link> */}
              <img src={image.w_img} alt="" />
            </a>
          </div>
        ))}
      </div>
      <div className="btnMore">
        <button>
          See More <FaArrowRight />
        </button>
      </div>
    </main>
  );
}
