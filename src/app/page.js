// src/app/page.js
"use client";

import React, { useEffect } from "react";
import { track } from "@vercel/analytics";

import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import HomeFAQ from "@/components/HomeFAQ";
import UseCases from "@/components/UseCases";
import Features from "@/components/Features";

const Page = () => {
  useEffect(() => {
    track("homepage_visited");
  }, []);

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

export default Page;
