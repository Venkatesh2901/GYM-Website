import React, { useRef } from "react";

const Hero = () => {
  const pricingRef = useRef(null);

  const handleDiscoverPlanClick = () => {
    pricingRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="hero">
        <div className="overlay">
          <div className="content">
            <div className="title">
              <h1>LET'S GET MOVING</h1>
              <h2>Push Your Limits, Achieve Your Goals</h2>
            </div>

            <div className="sub-title">
              <p>Your Journey to Fitness Starts Here</p>
              <p>Unleash Your Potential with Us</p>
            </div>

            <div className="buttons">
              <button className="primary-btn" onClick={handleDiscoverPlanClick}>Start Your Journey</button>
              <button className="secondary-btn" onClick={handleDiscoverPlanClick}>Discover Your Plan </button>
            </div>

            <div className="scroll-indicator">
              <span>Scroll Down</span>
              <div className="scroll-arrow"></div>
            </div>
          </div>
        </div>
      </section>

      <section ref={pricingRef} >
      </section>
    </>
  );
};

export default Hero;
