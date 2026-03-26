"use client";

import Aboutfooter from "@/components/Aboutfooter";
import Heading from "@/components/Heading";
import FramerWrapper from "@/components/animation/FramerWrapper";
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

      {/* Heading + Bio */}
      <div className="flex flex-col gap-5 w-full max-w-3xl">
        <Heading>
          {portfolioConfig.title},{" "}
          <span className="inline-flex items-center gap-1">
            Based In
            <MapPin className="h-5 w-5 text-rose-500 mx-1 inline" />
            {portfolioConfig.about.personalInfo.nationality}.
          </span>
        </Heading>

        <FramerWrapper y={0} x={100}>
          <div className="relative pl-4 border-l-2 border-primary/20">
            <span className="absolute -left-2 -top-4 text-5xl text-primary/10 font-serif select-none leading-none">&quot;</span>
            <p className="font-poppins text-base text-primary/80 leading-relaxed max-sm:text-sm">
              {portfolioConfig.about.bio}
            </p>
          </div>
        </FramerWrapper>
      </div>

      {/* Personal Info Card */}
      <FramerWrapper className="w-full" y={100} delay={0.3}>
        <div className="w-full rounded-2xl border border-border bg-secondary/30 backdrop-blur-sm p-5">
          <Aboutfooter />
        </div>
      </FramerWrapper>

      {/* Hobbies */}
      <FramerWrapper className="w-full" y={100} delay={0.31}>
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
            <div
              key={i}
              className="flex items-center gap-2.5 p-3 rounded-xl border border-border bg-secondary/20 hover:bg-secondary/50 hover:border-primary/30 hover:shadow-sm transition-all group cursor-default"
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                {getHobbyIcon(hobby)}
              </span>
              <span className="font-poppins text-sm text-primary font-medium truncate">
                {hobby}
              </span>
            </div>
          ))}
        </div>
      </FramerWrapper>
    </section>
  );
}