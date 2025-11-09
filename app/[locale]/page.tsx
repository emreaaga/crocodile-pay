"use client";

import Footer from "@/components/organisms/layout/Footer";
import Navbar from "@/components/organisms/layout/Navbar";
import HeroSection from "@/components/organisms/home/HeroSection";
import HowItWorksSection from "@/components/organisms/home/HowItWorksSection";
import BenefitSection from "@/components/organisms/home/BenefitsSection";
import CtaSection from "@/components/organisms/home/CtaSection";

export default function Home() {

  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <HowItWorksSection />
        <BenefitSection />
        <CtaSection />
      </main>

      <Footer />
    </>
  );
}
