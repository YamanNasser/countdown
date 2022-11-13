import React from "react";
import rocket from "../../assets/rocket.png";
import "./LogoWithAnimation.scss";

export default function LogoWithAnimation() {
  return (
    <div className="rocket-container ">
      <img src={rocket} alt="rocket" />
    </div>
  );
}
