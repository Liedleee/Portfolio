"use client";

import Heading from "@/components/Heading";
import FramerWrapper from "@/components/animation/FramerWrapper";
import ScrollWrapper from "@/components/animation/ScrollWrapper";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon, Users, Wrench, Heart, FileText, BarChart3, Palette, Zap } from "lucide-react";

const socialSkills = [
  "Problem Solving",
  "Agile",
  "Planning & Organizing",
  "Time Management",
  "Teamwork",
  "Critical Thinking",
];

const technicalSkills = [
  { name: "Microsoft Word", level: "Proficient", icon: <FileText className="w-6 h-6 text-blue-600" /> },
  { name: "Microsoft Excel", level: "Intermediate", icon: <BarChart3 className="w-6 h-6 text-green-600" /> },
  { name: "Microsoft PowerPoint", level: "Proficient", icon: <Wrench className="w-6 h-6 text-orange-500" /> },
  { name: "Google Suite", level: "Intermediate", icon: <Zap className="w-6 h-6 text-red-500" /> },
  { name: "Power BI", level: "Intermediate", icon: <BarChart3 className="w-6 h-6 text-yellow-500" /> },
  { name: "Canva", level: "Proficient", icon: <Palette className="w-6 h-6 text-cyan-500" /> },
  { name: "Accurate", level: "Intermediate", icon: <span className="w-6 h-6 text-xs font-bold text-blue-700 flex items-center justify-center">ACC</span> },
];

const interests = [
  "Accounting",
  "Auditing",
  "Financial Statement Analysis",
  "Finance",
  "Financial Data Analysis",
  "Sustainability Accounting",
];

const levelColor: Record<string, string> = {
  Proficient: "bg-green-100 text-green-700",
  Intermediate: "bg-blue-100 text-blue-700",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen flex flex-col items-start gap-5 overflow-hidden py-20 px-40 max-md:p-4">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <LightbulbIcon className="w-4 h-4" />
        My Skills
      </Badge>

      <div className="flex flex-col gap-6 w-full">
        <Heading>My Skills and Interests.</Heading>

        <ScrollWrapper direction="right" delay={0.2}>
          <p className="font-poppins text-base w-full text-primary max-sm:text-sm leading-relaxed">
            As an accountant, I possess a blend of social and technical skills that enable me to excel in financial analysis, auditing, and sustainable accounting practices.
          </p>
        </ScrollWrapper>

        {/* Social Skills */}
        <FramerWrapper y={100} delay={0.3} className="w-full">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-md bg-purple-100">
              <Users className="w-4 h-4 text-purple-600" />
            </div>
            <h2 className="text-lg font-semibold font-poppins text-primary text_underline relative">
              Social Skills
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {socialSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-full bg-secondary text-primary font-poppins text-sm font-medium border border-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </FramerWrapper>

        {/* Technical Skills */}
        <FramerWrapper y={100} delay={0.32} className="w-full">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-md bg-blue-100">
              <Wrench className="w-4 h-4 text-blue-600" />
            </div>
            <h2 className="text-lg font-semibold font-poppins text-primary text_underline relative">
              Technical Skills
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-2 max-sm:grid-cols-1">
            {technicalSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 p-3 rounded-xl border border-border bg-secondary/40 hover:bg-secondary transition-colors"
              >
                <div className="flex-shrink-0">{skill.icon}</div>
                <span className="font-poppins text-sm text-primary flex-1">{skill.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${levelColor[skill.level]}`}>
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </FramerWrapper>

        {/* Interests */}
        <FramerWrapper y={100} delay={0.34} className="w-full">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-md bg-rose-100">
              <Heart className="w-4 h-4 text-rose-500" />
            </div>
            <h2 className="text-lg font-semibold font-poppins text-primary text_underline relative">
              Interests
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {interests.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-full bg-rose-50 text-rose-700 font-poppins text-sm font-medium border border-rose-200"
              >
                {item}
              </span>
            ))}
          </div>
        </FramerWrapper>
      </div>
    </section>
  );
}
