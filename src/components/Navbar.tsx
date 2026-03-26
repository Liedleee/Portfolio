"use client"
import { cn } from "@/lib/utils";

import {
  FolderGit2,
  GraduationCap,
  HomeIcon,
  LightbulbIcon,
  User,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/animation/DockAnimation';

import { useEffect, useState } from "react";
import FramerWrapper from "./animation/FramerWrapper";

const Navbar = () => {
  const data = [
    {
      title: 'Home',
      icon: (
        <HomeIcon className='h-full w-full ' />
      ),
      href: '#home',
    },
    {
      title: 'About',
      icon: (
        <User className='h-full w-full ' />
      ),
      href: '#about',
    },
    {
      title: 'Skills',
      icon: (
        <LightbulbIcon className='h-full w-full ' />
      ),
      href: '#skills',
    },
    {
      title: 'Education',
      icon: (
        <GraduationCap className='h-full w-full ' />
      ),
      href: '#education',
    },
    {
      title: 'Experience',
      icon: (
        <FolderGit2 className='h-full w-full ' />
      ),
      href: '#projects',
    },
  ];

  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'skills', 'education', 'projects'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`fixed top-5 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[+9999999] ${scrolling ? "hidden":"block"}`}>
      <Dock className='items-end pb-3 rounded-full'>
        {data.map((item, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSection(item.href)}
            className="cursor-pointer"
          >
            <DockItem
              className={cn(
                "aspect-square rounded-full bg-gray-200 dark:bg-neutral-800",
                activeSection === item.href.substring(1) && " bg-gray-100 !border !border-primary-sky"
              )}
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon className={cn(activeSection === item.href.substring(1) && "text-[#2f7df4]")}>
                {item.icon}
              </DockIcon>
            </DockItem>
          </button>
        ))}
      </Dock>
    </div>
  );
};

export default Navbar;
