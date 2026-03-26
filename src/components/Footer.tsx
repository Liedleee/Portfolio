"use client";

import SocialLinks from "@/components/SocialLinks";
import { portfolioConfig } from "@/config/portfolio.config";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { Mail, MapPin, Phone, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary/20 border-t border-border py-12 px-40 max-md:p-4">
      <div className="w-full flex flex-col gap-8">
        {/* Main Footer Content */}
        <FramerWrapper y={50} className="w-full">
          <div className="flex flex-col items-center gap-6">
            {/* Name and Title */}
            <div className="text-center">
              <h3 className="text-2xl font-bold font-poppins text-primary mb-1">
                {portfolioConfig.name}
              </h3>
              <p className="text-primary font-poppins">
                {portfolioConfig.title}
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 items-center">
              <div className="flex items-center gap-2 text-primary">
                <Mail className="h-4 w-4" />
                <span className="font-poppins text-sm">{portfolioConfig.email}</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Phone className="h-4 w-4" />
                <span className="font-poppins text-sm">{portfolioConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="h-4 w-4" />
                <span className="font-poppins text-sm">{portfolioConfig.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <SocialLinks />
            </div>
          </div>
        </FramerWrapper>

        {/* Bottom Section */}
        <FramerWrapper y={30} delay={0.2} className="w-full">
          <div className="border-t border-border pt-6">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground font-poppins text-center">
                © {currentYear} {portfolioConfig.name}. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground font-poppins flex items-center gap-1">
                Made with <Heart className="h-3 w-3 text-red-500" /> for accounting excellence
              </p>
            </div>
          </div>
        </FramerWrapper>
      </div>
    </footer>
  );
}