"use client";

import Heading from "@/components/Heading";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { Badge } from "@/components/ui/badge";
import { portfolioConfig } from "@/config/portfolio.config";
import { GraduationCap, ExternalLink, Award } from "lucide-react";

const levelConfig: Record<string, { color: string; bg: string }> = {
  S1: { color: "text-violet-700", bg: "bg-violet-100" },
  SMA: { color: "text-blue-700", bg: "bg-blue-100" },
  SMP: { color: "text-emerald-700", bg: "bg-emerald-100" },
};

const getLevel = (level: string) =>
  levelConfig[level] ?? { color: "text-gray-700", bg: "bg-gray-100" };

export default function EducationSection() {
  return (
    <section id="education" className="min-h-screen flex flex-col items-start gap-5 overflow-hidden py-20 px-40 max-md:p-4">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <GraduationCap className="h-4 w-4" />
        Education
      </Badge>

      <Heading>My Educational Background</Heading>

      <div className="w-full h-fit flex flex-col gap-4 relative">
        <div className="absolute left-[18px] top-2 bottom-2 w-0.5 bg-border z-0" />

        {portfolioConfig.education.map((edu, index) => {
          const lvl = getLevel(edu.level);
          return (
            <FramerWrapper
              key={index}
              y={0}
              x={80}
              delay={0.3 + index * 0.1}
              className="w-full flex gap-4 relative z-10"
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <div className={`w-9 h-9 rounded-full ${lvl.bg} flex items-center justify-center ring-4 ring-background z-10`}>
                  <GraduationCap className={`w-4 h-4 ${lvl.color}`} />
                </div>
              </div>

              <div className="flex-1 rounded-xl border border-border bg-secondary/20 hover:bg-secondary/40 transition-colors p-4 gap-3 flex flex-col">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <div className="flex flex-col gap-1">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full font-poppins w-fit ${lvl.bg} ${lvl.color}`}>
                      {edu.level}
                    </span>
                    <h3 className="text-base font-bold text-primary font-poppins leading-tight">
                      {edu.institution}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 px-3 py-1.5 rounded-lg flex-shrink-0">
                    <Award className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-sm font-bold text-green-700 font-poppins">{edu.grade}</span>
                  </div>
                </div>

                {edu.activities && edu.activities.length > 0 && (
                  <div className="border-t border-border pt-3">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide font-poppins mb-2">
                      Activities & Societies
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {edu.activities.map((activity, actIndex) => (
                        <li
                          key={actIndex}
                          className="text-xs text-primary font-poppins list-disc list-inside"
                        >
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {edu.links && edu.links.length > 0 && (
                  <div className="border-t border-border pt-3 flex flex-wrap gap-2">
                    {edu.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 font-poppins border border-blue-200 px-2.5 py-1 rounded-full hover:bg-blue-50 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        View Video
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </FramerWrapper>
          );
        })}
      </div>
    </section>
  );
}
