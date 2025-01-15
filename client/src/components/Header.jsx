import React from "react";
import { assets } from "../assets/assets";
import HeaderStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={HeaderStyles.header_parent_div}>
      <div>
        <h1 className={HeaderStyles.h1}>
          Remove the <br />
          <span> background from </span> <br />
          images for free.
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          <br /> Lorem Ipsum has been the industry&apos;s standard dummy text ever.
        </p>
        <div>
          <input type="file" id="upload1" name="" hidden />
          <label htmlFor="upload1" className={HeaderStyles.upload_button}>
            <img
              src={assets.upload_btn_icon}
              alt="upload-icon"
              style={{ width: "15px", height: "22px", marginRight: "10px" }}
            />
            <p> Upload your image</p>
          </label>
        </div>
      </div>
      <div>
        <img src={assets.header_img} alt="header-main-image" style={{ maxWidth: "25rem" }} />
      </div>
    </div>
  );
};

export default Header;
