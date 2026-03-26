
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Heart, User2, MapPin, Sparkles } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

// Hobby icon mapping — sesuaikan dengan hobi yang ada di config
const hobbyIcons: Record<string, string> = {
  "Reading": "📚",
  "Music": "🎵",
  "Traveling": "✈️",
  "Cooking": "🍳",
  "Gaming": "🎮",
  "Photography": "📷",
  "Cycling": "🚴",
  "Swimming": "🏊",
  "Badminton": "🏸",
  "Football": "⚽",
  "Drawing": "🎨",
  "Writing": "✍️",
  "Hiking": "🥾",
  "Movies": "🎬",
  "Fitness": "💪",
};

const getHobbyIcon = (hobby: string) => {
  const key = Object.keys(hobbyIcons).find((k) =>
    hobby.toLowerCase().includes(k.toLowerCase())
  );
  return key ? hobbyIcons[key] : "⭐";
};

const page = () => {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-6 overflow-hidden">
      
      {/* Badge */}
      <Badge variant="secondary" className="gap-1.5 py-1">
        <User2 className="h-4 w-4" />
        About me
      </Badge>

      {/* Heading + Bio */}
      <div className="flex flex-col gap-4 w-full">
        <Heading>
          {portfolioConfig.title}, Based In{" "}
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-6 w-6 text-rose-500 inline" />
            {portfolioConfig.about.personalInfo.nationality}.
          </span>
        </Heading>

        <FramerWrapper y={0} x={100}>
          <div className="relative">
            {/* Quote accent */}
            <span className="absolute -left-2 -top-3 text-5xl text-primary/10 font-serif select-none">"</span>
            <p className="font-poppins text-base w-full text-primary/80 max-sm:text-sm leading-relaxed pl-4 border-l-2 border-primary/20">
              {portfolioConfig.about.bio}
            </p>
          </div>
        </FramerWrapper>
      </div>

      {/* Personal Info Footer */}
      <FramerWrapper
        className="w-full"
        y={100}
        delay={0.3}
      >
        <div className="w-full rounded-xl border border-border bg-secondary/30 p-4">
          <Aboutfooter />
        </div>
      </FramerWrapper>

      {/* Hobbies */}
      <FramerWrapper className="block w-full" y={100} delay={0.31}>
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1.5 rounded-md bg-rose-100">
            <Heart className="h-4 w-4 text-rose-500" />
          </div>
          <h2 className="text-lg font-semibold font-poppins text-primary">
            Hobbies & Interests
          </h2>
          <Sparkles className="h-4 w-4 text-yellow-400 ml-1" />
        </div>

        <div className="grid grid-cols-3 gap-2.5 max-sm:grid-cols-2">
          {portfolioConfig.about.hobbies.map((hobby, indx) => (
            <div
              key={indx}
              className="flex items-center gap-2.5 p-3 rounded-xl border border-border bg-secondary/20 hover:bg-secondary/50 transition-colors group"
            >
              <span className="text-xl group-hover:scale-110 transition-transform">
                {getHobbyIcon(hobby)}
              </span>
              <span className="font-poppins text-sm text-primary font-medium truncate">
                {hobby}
              </span>
            </div>
          ))}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default page;