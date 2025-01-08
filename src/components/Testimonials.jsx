import React from "react";
import TestimonialStyle from "../styles/Testimonials.module.css";
import { assets } from "../assets/assets";

const Testimonials = () => {
  return (
    <div>
      <h1 className={TestimonialStyle.h1}>Customer Testimonials</h1>
      <div>
        <div className={TestimonialStyle.testimonial_parent_div}>
          <img src={assets.upload_icon} alt="upload-icon" />
          <p className={TestimonialStyle.testimonial_item_heading}>Upload image</p>
          <p className={TestimonialStyle.testimonial_item_para}>
            This is a demo text, will replace it later. This is a demo..
          </p>
          <img src={assets.upload_icon} alt="upload-icon" />
        </div>

        <div className={TestimonialStyle.testimonial_parent_div}>
          <img src={assets.upload_icon} alt="upload-icon" />
          <p className={TestimonialStyle.testimonial_item_heading}>Upload image</p>
          <p className={TestimonialStyle.testimonial_item_para}>
            This is a demo text, will replace it later. This is a demo..
          </p>
          <img src={assets.upload_icon} alt="upload-icon" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
