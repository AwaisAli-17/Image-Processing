import React from "react";
import { assets } from "../assets/assets";
import StepsStyle from "../styles/Steps.module.css";

const Steps = () => {
  return (
    <div>
      <h1 className={StepsStyle.h1}>
        Steps to remove background <br /> image in seconds.
      </h1>
      <div className={StepsStyle.steps_main_div}>
        <div className={StepsStyle.steps_parent_div}>
          <img src={assets.upload_icon} alt="upload-icon" />
          <div className={StepsStyle.steps_div}>
            <p className={StepsStyle.steps_item_heading}>Upload image</p>
            <p className={StepsStyle.steps_item_para}>
              This is a demo text, will replace it later. This is a demo..
            </p>
          </div>
        </div>

        <div className={StepsStyle.steps_parent_div}>
          <img src={assets.remove_bg_icon} alt="upload-icon" />
          <div className={StepsStyle.steps_div}>
            <p className={StepsStyle.steps_item_heading}>Remove background</p>
            <p className={StepsStyle.steps_item_para}>
              This is a demo text, will replace it later. This is a demo..
            </p>
          </div>
        </div>

        <div className={StepsStyle.steps_parent_div}>
          <img src={assets.download_icon} alt="upload-icon" />
          <div className={StepsStyle.steps_div}>
            <p className={StepsStyle.steps_item_heading}>Download image</p>
            <p className={StepsStyle.steps_item_para}>
              This is a demo text, will replace it later. This is a demo..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
