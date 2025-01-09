import React from "react";
import TestimonialStyle from "../styles/Testimonials.module.css";
import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div>
      <h1 className={TestimonialStyle.h1}>Customer Testimonials</h1>
      <div className={TestimonialStyle.testimonial_main_div}>
        {testimonialsData.map((item, index) => (
          <div key={index} className={TestimonialStyle.testimonial_parent_div}>
            <p>"</p>
            <p>{item.text}</p>
            <div>
              <img src={item.image} alt="" />
              <div>
                <p>{item.author}</p>
                <p>{item.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
