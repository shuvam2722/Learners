import React from "react";

import Hero from "../../Components/Hero/Hero";
import Company from "../../Components/Company/Company";
import Examination from "../../Components/Examination/Examination";
import Service from "../../Components/Service/Service";
import Event from "../../Components/Event/Event";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Contact from "../../Components/Contact/Contact";

function HeroPage() {
  return (
    <div>
      <Hero />
      <Company />
      <Service />
      <Examination />
      <Event />
      <Testimonials />
      <div className="mt-auto sm:mt-40">
        <Contact />
      </div>
    </div>
  );
}

export default HeroPage;
