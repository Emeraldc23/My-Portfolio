import "../Components/stylesComp/watchOut.css";
import { Link } from "react-router-dom";

export default function WatchOut() {
  return (
    <div className="watchOut">
      <h1>Sorry!!! This page is still under development...</h1>
      <h3>
        Get in touch with the developer, by clicking on the connect with me
        button below
      </h3>
      <Link to="/">
        <button className="btn1 btn-watch">Connect With Me </button>
      </Link>
    </div>
  );
}
