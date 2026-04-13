"use client";

import Aboutfooter from "@/components/Aboutfooter";
import Heading from "@/components/Heading";
import FramerWrapper from "@/components/animation/FramerWrapper";
import ScrollWrapper from "@/components/animation/ScrollWrapper";
import { Badge } from "@/components/ui/badge";
import { portfolioConfig } from "@/config/portfolio.config";
import { Heart, User2, MapPin, Sparkles } from "lucide-react";

const hobbyIcons: Record<string, string> = {
  "Reading": "📚", "Music": "🎵", "Traveling": "✈️", "Cooking": "🍳",
  "Gaming": "🎮", "Photography": "📷", "Cycling": "🚴", "Swimming": "🏊",
  "Badminton": "🏸", "Football": "⚽", "Drawing": "🎨", "Writing": "✍️",
  "Hiking": "🥾", "Movies": "🎬", "Fitness": "💪", "Shopping": "🛍️",
  "Singing": "🎤", "Dancing": "💃", "Yoga": "🧘", "Coding": "💻",
};

const getHobbyIcon = (hobby: string) => {
  const key = Object.keys(hobbyIcons).find((k) =>
    hobby.toLowerCase().includes(k.toLowerCase())
  );
  return key ? hobbyIcons[key] : "⭐";
};

export default function AboutSection() {
  const hobbies = portfolioConfig.about.hobbies;

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-start gap-7 overflow-hidden py-20 px-40 max-md:px-5 max-md:py-10 relative"
    >
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute top-10 right-10 w-72 h-72 rounded-full bg-violet-500/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-0 w-56 h-56 rounded-full bg-blue-500/5 blur-3xl" />

      {/* Badge */}
      <Badge variant="secondary" className="gap-1.5 py-1">
        <User2 className="h-4 w-4" />
        About me
      </Badge>

      {/* Heading + Bio + Image */}
      <div className="flex flex-col lg:flex-row gap-12 w-full items-center lg:items-start">
        <div className="flex flex-col gap-5 w-full lg:flex-1">
          <Heading>
            {portfolioConfig.title},{" "}
            <span className="inline-flex items-center gap-1">
              Based In
              <MapPin className="h-5 w-5 text-rose-500 mx-1 inline" />
              {portfolioConfig.about.personalInfo.nationality}.
            </span>
          </Heading>

          <ScrollWrapper direction="right" delay={0.2}>
            <div className="relative pl-4 border-l-2 border-primary/20">
              <span className="absolute -left-2 -top-4 text-5xl text-primary/10 font-serif select-none leading-none">&quot;</span>
              <p className="font-poppins text-base text-primary/80 leading-relaxed max-sm:text-sm">
                {portfolioConfig.about.bio}
              </p>
            </div>
          </ScrollWrapper>
        </div>

        {portfolioConfig.about.image && (
          <ScrollWrapper direction="right" delay={0.3}>
            <div className="relative w-72 h-72 max-lg:w-64 max-lg:h-64 max-md:w-56 max-md:h-56 flex-shrink-0">
              {/* Gradient border glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-blue-500/20 rounded-3xl blur-xl" />
              
              {/* Main image container */}
              <div className="relative w-full h-full overflow-hidden rounded-3xl border-2 border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/40 group">
                {/* Inner subtle border */}
                <div className="absolute inset-0 rounded-3xl border border-primary/10 pointer-events-none" />
                
                <img
                  src={portfolioConfig.about.image}
                  alt={portfolioConfig.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </ScrollWrapper>
        )}
      </div>

      {/* Personal Info Card */}
      <ScrollWrapper direction="up" delay={0.3}>
        <div className="w-full rounded-2xl border border-border bg-secondary/30 backdrop-blur-sm p-5">
          <Aboutfooter />
        </div>
      </ScrollWrapper>

      {/* Hobbies */}
      <ScrollWrapper direction="up" delay={0.4}>
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1.5 rounded-lg bg-rose-100 dark:bg-rose-900/30">
            <Heart className="h-4 w-4 text-rose-500" />
          </div>
          <h2 className="text-lg font-semibold font-poppins text-primary">
            Hobbies & Interests
          </h2>
          <Sparkles className="h-4 w-4 text-yellow-400" />
        </div>

        <div className="grid grid-cols-4 gap-3 max-lg:grid-cols-3 max-sm:grid-cols-2">
          {hobbies.map((hobby, i) => (
            <ScrollWrapper
              key={i}
              direction="up"
              delay={0.5 + i * 0.1}
              className="flex items-center gap-2.5 p-3 rounded-xl border border-border bg-secondary/20 hover:bg-secondary/50 hover:border-primary/30 hover:shadow-sm transition-all group cursor-default"
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                {getHobbyIcon(hobby)}
              </span>
              <span className="font-poppins text-sm text-primary font-medium truncate">
                {hobby}
              </span>
            </ScrollWrapper>
          ))}
        </div>
      </ScrollWrapper>
    </section>
  );
}