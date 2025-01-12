import React from "react";
import CreditsStyles from "../styles/Credits.module.css";
import { plans, assets } from "../assets/assets";

function BuyCredit() {
  return (
    <div className={CreditsStyles.credits_page_div}>
      <button className={CreditsStyles.our_plans}>OUR PLANS</button>
      <h1 className={CreditsStyles.h1}>Choose the plan that’s right for you</h1>
      <div className={CreditsStyles.plans_parent_div}>
        {plans.map((item, index) => (
          <div key={index} className={CreditsStyles.plans_item_div}>
            <img src={assets.logo_icon} width={40} />
            <p className={CreditsStyles.item_name}>{item.id}</p>
            <p className={CreditsStyles.item_desc}>{item.desc}</p>
            <p>
              <span className={CreditsStyles.item_price}>{item.price}</span> /{item.credits} credits
            </p>
            <button className={CreditsStyles.get_started}>Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyCredit;
