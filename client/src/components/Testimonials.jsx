import React from "react";
import TestimonialStyle from "../styles/Testimonials.module.css";
import { testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div>
      <h1 className={TestimonialStyle.h1}>Customer Testimonials</h1>
      <div className={TestimonialStyle.testimonial_main_div}>
        {testimonialsData.map((item, index) => (
          <div key={index} className={TestimonialStyle.testimonial_parent_div}>
            <p className={TestimonialStyle.semicolon_text}>”</p>
            <p className={TestimonialStyle.testimonial_text}>{item.text}</p>
            <div className={TestimonialStyle.user_profile}>
              <img src={item.image} alt="" className={TestimonialStyle.profile_image} />
              <div className={TestimonialStyle.user_details}>
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
