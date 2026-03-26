"use client"
import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";

// Import Sections
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* ===== HERO SECTION ===== */}
      <section id="home" className="h-dvh min-h-screen flex flex-col md:flex-row items-center justify-between pt-14 pb-4 px-40 max-md:p-4 max-sm:pt-20">
        <FramerWrapper
          className="h-full w-full md:w-auto flex flex-col justify-start gap-4 order-1 md:order-2"
          y={0}
          x={-100}
        >
          <HeroTexts />
          <div className="h-fit w-full p-4 flex gap-4">
            <SocialLinks />
          </div>
          <DownLoadResumeBtn />
        </FramerWrapper>
        <FramerWrapper
          className="h-full w-full md:w-[47%] relative block order-2 md:order-1"
          y={0}
          x={100}
        >
          <HeroImage />
        </FramerWrapper>
      </section>

      {/* ===== SECTIONS ===== */}
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
