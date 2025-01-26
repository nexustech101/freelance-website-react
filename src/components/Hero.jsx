/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import ParticleCanvas from "./ParticalCanvas";

import checkListIcon from "../assets/checkmark.png";
import heroIcon from "../assets/mobile-responsive.png";
import { ContactFormModal } from "./ContactForm";

const CheckListIcon = () => {
  return <img src={checkListIcon} height={25} width={25} alt="..." />;
};

const CheckListIconSection = () => {
  return (
    <div className="check-list-section" style={{ margin: "1.2em 0" }}>
      <span>
        <CheckListIcon />
        Negotiable pricing
      </span>
      <span>
        <CheckListIcon />
        Speedy execution
      </span>
      <span>
        <CheckListIcon />
        Customer satisfaction
      </span>
    </div>
  );
};

const Hero = () => {
  return (
    <div className='hero-section'>
      <ParticleCanvas />
      <header className='hero-header'>
        <span className='hero-text'>
          <h1>Call Your Goals InTo Action With Guaranteed Results</h1>
        </span>
        {/* <CheckListIconSection /> */}
        <br />
        <br />
        <div className='btn-panel'>
          <ContactFormModal text={"Get Connected"} width={"100%"} />
        </div>
      </header>
      <div className='img-container-right'>
        <img src={heroIcon} alt='...' />
      </div>
    </div>
  );
};

export default Hero;
