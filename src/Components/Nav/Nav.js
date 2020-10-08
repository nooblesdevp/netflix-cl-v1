import React, { useEffect, useState } from "react";

import logo from "../../assets/logo.png";
import profile__logo from "../../assets/profile__logo.png";

import "./Nav.scss";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <a
        href="https://nuzulzen-764f8.web.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="nav__logo" src={logo} alt="netflix logo" />
      </a>

      <a
        href=" https://api.whatsapp.com/send?phone=6281476637363&text=Hallo%20Nuzul%20Saya%20tertarik%20berkerja%20sama%20dengan%20anda"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="nav__avatar" src={profile__logo} alt="netflix logo" />
      </a>
    </div>
  );
}

export default Nav;
