import "./stylesComp/services.css";
import { FaArrowRight } from "react-icons/fa";
import Services_Data from "../assets/services_data";

export default function Services() {
  const items = Services_Data.map((item) => item);
  console.log(items);

  return (
    <div className="gridContent">
      {Services_Data.map((item, index) => (
        <div key={index} className="card">
          <h2>{item.s_no}</h2>
          <h2 className="colored">{item.s_name}</h2>
          <p className="cardText">{item.s_desc}</p>
          <p className="readMore">
            Read More <FaArrowRight className="arrowIcon" />
          </p>
        </div>
      ))}
    </div>
  );
}
