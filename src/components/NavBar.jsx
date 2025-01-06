import React from "react";
import { assets } from "../assets/assets";
import ButtonStyles from "../styles/Buttons.module.css";
import NavbarStyles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={NavbarStyles.navbarDiv}>
      <Link to={"/"}>
        <img src={assets.logo} alt="bg-remover-logo" className={NavbarStyles.navbarLogo} />
      </Link>
      <button className={ButtonStyles.signupButton}>
        Get started <img src={assets.arrow_icon} className={ButtonStyles.singupArrow} />
      </button>
    </div>
  );
}

export default NavBar;
