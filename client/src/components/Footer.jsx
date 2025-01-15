import React from "react";
import { assets } from "../assets/assets";
import Footerstyle from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={Footerstyle.parent_div}>
      <img src={assets.logo} alt="bg-remover-logo" className={Footerstyle.navbarLogo} />
      <div className={Footerstyle.vl}></div>
      <p>All right reserved. Copyright @bg removal</p>
      <div className={Footerstyle.social_icons_div}>
        <img src={assets.facebook_icon} />
        <img src={assets.twitter_icon} />
        <img src={assets.google_plus_icon} />
      </div>
    </div>
  );
};

export default Footer;
