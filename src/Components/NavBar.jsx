import "./stylesComp/navBar.css";
import underLine from "../assets/image/nav_underline.svg";
import { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import WatchOut from "./WatchOut";
import logo from "../assets/image/logo.svg";
import menuOpen from "../assets/image/menu_open.svg";
import menuClose from "../assets/image/menu_close.svg";

const NavBar = () => {
  const [menu, setMenu] = useState("home");

  const menuRef = useRef();

  function openMenu() {
    menuRef.current.style.right = "0";
  }
  function closeMenu() {
    menuRef.current.style.right = "-350px";
  }
  return (
    <div className="navBar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <img onClick={openMenu} src={menuOpen} alt="" className="menus" />
      <ul ref={menuRef} className="navList">
        <img onClick={closeMenu} src={menuClose} alt="" className="menuClose" />
        <li>
          <AnchorLink className="anchor-Link" href="#home">
            <p
              onClick={() => {
                setMenu("home");
              }}
            >
              Home
            </p>
          </AnchorLink>
          {menu === "home" ? <img src={underLine} alt="" /> : ""}
        </li>
        <li>
          <AnchorLink offset={50} className="anchor-Link" href="#about">
            <p
              onClick={() => {
                setMenu("about");
              }}
            >
              About Me
            </p>
          </AnchorLink>
          {menu === "about" ? <img src={underLine} alt="" /> : ""}
        </li>
        <li>
          {" "}
          <AnchorLink offset={50} className="anchor-Link" href="#services">
            <p
              onClick={() => {
                setMenu("services");
              }}
            >
              Services
            </p>
          </AnchorLink>
          {menu === "services" ? <img src={underLine} alt="" /> : ""}
        </li>
        <li>
          <AnchorLink offset={50} className="anchor-Link" href="#portfolio">
            <p
              onClick={() => {
                setMenu("portfolio");
              }}
            >
              Portfolio
            </p>
          </AnchorLink>
          {menu === "portfolio" ? <img src={underLine} alt="" /> : ""}
        </li>
        <li>
          <AnchorLink offset={50} className="anchor-Link" href="#contact">
            <p
              onClick={() => {
                setMenu("contact");
              }}
            >
              Contact
            </p>
          </AnchorLink>
          {menu === "contact" ? <img src={underLine} alt="" /> : ""}
        </li>
      </ul>
      <div className="navBtn">
        <button className="btn1">
          <AnchorLink offset={50} className="anchor-Link" href="#contact">
            Connect With Me
          </AnchorLink>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
