import React from "react";
import SeeMagicStyles from "../styles/SeeMagic.module.css";
import HeaderStyles from "../styles/Header.module.css";
import { assets } from "../assets/assets";

function SeeMagic() {
  return (
    <div className={SeeMagicStyles.parent_div}>
      <h1 className={SeeMagicStyles.h1}>See the magic. Try now</h1>
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
  );
}

export default SeeMagic;
