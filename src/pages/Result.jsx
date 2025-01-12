import React from "react";
import { assets } from "../assets/assets";
import ResultStyles from "../styles/Results.module.css";

function Result() {
  return (
    <div className={ResultStyles.results_page_div}>
      <div className={ResultStyles.parent_white_bg_div}>
        <div className={ResultStyles.parent_images_div}>
          <div className={ResultStyles.images_div}>
            <p>Original</p>
            <img src={assets.image_w_bg} alt="" />
          </div>

          <div className={ResultStyles.images_div}>
            <p>Background Removed</p>
            {/* <img src={assets.image_wo_bg} alt="" /> */}
            <div className={ResultStyles.loader}></div>
          </div>
        </div>
        <div className={ResultStyles.buttons_div}>
          <button className={ResultStyles.another_image}>Try another image</button>
          <a href="" className={ResultStyles.download_image}>
            Download image
          </a>
        </div>
      </div>
    </div>
  );
}

export default Result;
