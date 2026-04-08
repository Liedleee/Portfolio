"use client";

import SocialLinks from "@/components/SocialLinks";
import { portfolioConfig } from "@/config/portfolio.config";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { Mail, MapPin, Phone, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary/95 border-t border-primary-foreground/10 py-12 px-40 max-md:p-4 backdrop-blur-xl">
      <div className="w-full flex flex-col gap-8">
        {/* Main Footer Content */}
        <FramerWrapper y={50} className="w-full">
          <div className="flex flex-col items-center gap-6">
            {/* Name and Title */}
            <div className="text-center">
              <h3 className="text-2xl font-bold font-poppins text-primary-foreground/95 mb-1">
                {portfolioConfig.name}
              </h3>
              <p className="text-primary-foreground/75 font-poppins">
                {portfolioConfig.title}
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 items-center">
              <div className="flex items-center gap-2 text-primary-foreground/75">
                <Mail className="h-4 w-4" />
                <span className="font-poppins text-sm">{portfolioConfig.email}</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/75">
                <Phone className="h-4 w-4" />
                <span className="font-poppins text-sm">{portfolioConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/75">
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
          <div className="border-t border-primary-foreground/15 pt-6">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-primary-foreground/65 font-poppins text-center">
                © {currentYear} {portfolioConfig.name}. All rights reserved.
              </p>
              <p className="text-xs text-primary-foreground/55 font-poppins flex items-center gap-1">
                Made with <Heart className="h-3 w-3 text-red-500" /> for accounting excellence
              </p>
            </div>
          </div>
        </FramerWrapper>
      </div>
    </footer>
  );
}