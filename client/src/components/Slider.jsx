import React, { useState } from "react";
import SliderStyle from "../styles/Slider.module.css";
import { assets } from "../assets/assets";

function Slider() {
  const [slider, setSlider] = useState(50);

  const handleSlider = (e) => {
    setSlider(e.target.value);
  };

  return (
    <div>
      <h1 className={SliderStyle.h1}>
        Remove Background With High <br /> Quality and Accuracy.
      </h1>
      <div className={SliderStyle.slider_parent_div}>
        <img
          src={assets.image_w_bg}
          style={{ clipPath: `inset(0 ${100.2 - slider}% 0 0 )` }}
          alt=""
          className={SliderStyle.img_with_background}
        />
        <img
          src={assets.image_wo_bg}
          style={{ clipPath: `inset(0 0 0 ${slider}% )` }}
          alt=""
          className={SliderStyle.img_without_background}
        />

        <input
          type="range"
          min={0}
          max={100}
          value={slider}
          onChange={handleSlider}
          className={SliderStyle.slider}
        />
      </div>
    </div>
  );
}

export default Slider;
