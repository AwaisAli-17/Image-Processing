import React from "react";
import { assets } from "../assets/assets";
import ButtonStyles from "../styles/Buttons.module.css";
import NavbarStyles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

function NavBar() {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  return (
    <div className={NavbarStyles.navbarDiv}>
      <Link to={"/"}>
        <img src={assets.logo} alt="bg-remover-logo" className={NavbarStyles.navbarLogo} />
      </Link>
      {isSignedIn ? (
        <div>
          <UserButton />
        </div>
      ) : (
        <button className={ButtonStyles.signupButton} onClick={() => openSignIn({})}>
          Get started <img src={assets.arrow_icon} className={ButtonStyles.singupArrow} />
        </button>
      )}
    </div>
  );
}

export default NavBar;
