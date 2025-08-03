// src/app/page.js
import React from "react";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import HomeFAQ from "@/components/HomeFAQ";
import UseCases from "@/components/UseCases";
import Features from "@/components/Features";

const page = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <UseCases />
      <Features />
      <HomeFAQ />
    </div>
  );
};

export default page;
