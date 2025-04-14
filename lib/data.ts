import React from "react";
import corpcommentImg from "@/public/projectfair.png";
import rmtdevImg from "@/public/blog.png";
import AIRoom from "@/public/leave2.png";
import wordanalyticsImg from "@/public/aimock.png";





import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaAws,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiWebrtc,
  SiJavascript,
  SiJest,
  SiRedux,
  SiTailwindcss,
  SiPrisma,
  SiBootstrap,
  SiExpress,
  SiFramer,
  SiSocketdotio,
  SiFirebase,
  SiMicrosoftazure,
  SiLeetcode,
  SiRedis,
  SiPostman,
  
} from "react-icons/si";
import { title } from "process";
import { url } from "inspector";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer Intern At Luminar Technohub.",
    location: "Kochi, India",
    description:
      "Currently working as a full-stack developer intern at luminar Technohub. We are developing full-stack applications for various clients across different domains.",
    icon: React.createElement(FaReact),
    date: "Jan 2025 - present",
  },
  {
    title: "Mern-Stack Developer Trainee At Luminar Technolab.",
    location: "Kochi, India",
    description:
      "I trained as a full-stack developer for 8 months, during which I developed various full-stack applications. I have hands-on experience in JavaScript, React.js, Node.js, Express, and MongoDB.",
    icon: React.createElement(FaReact),
    date: "Nov 2023 - July 2024",
  },
  {
    title: "Freelance Web Developer",
    location: "Remote, India",
    description:"I worked as a freelance web developer and developed the Daakoaf website for a KSA client. The site was built to showcase their services with a responsive and user-friendly interface.",
    icon: React.createElement(FaReact),
    date: "April 2023 - Feb 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Ai Mock Interview App",
    description:
      "AI-powered mock interview system that tailors Q&A to job roles and experience, aiding candidates and recruiters alike.",
    tags: ["Next.js", "DizzleORM", "PostgreSQL", "Tailwind", "Gemini AI", "Clerk"],
    imageUrl: wordanalyticsImg,
    url: "https://next-hire-eight.vercel.app/",
  },
  {
    title: "Smart Leave",
    description:
      "Built a smart leave system to automate requests, approvals, and tracking for efficient leave management",
    tags: ["React.js", "Node.js", "Bootstrap", "Express.js", "MongoDB", "JWT", "Postman"],
    imageUrl: AIRoom,
    url: "https://github.com/mhdnishadc/Leaveflow",
  },
  {
    title: "Blog Wise",
    description:
      "Built a blog app for creating, editing, and managing posts with user authentication and commenting features.",
    tags: ["Node.js", "Express", "EJS", "Bootstrap", "MongoDB", "Razorpay"],
    imageUrl: rmtdevImg,
    url: "https://github.com/mhdnishadc",
  },
  {
    title: "Project Fair",
    description:
      "Created a platform for developers to showcase projects with GitHub links, allowing users to view, search, and filter projects efficiently.",
    tags: [
      "React",
      "Javascript",
      "MongoDB",
      "Tailwind",
      "Node.js",
      "Redux",
      "Express",
    ],
    imageUrl: corpcommentImg,
    url: "https://github.com/mhdnishadc/projectfair",
  },
] as const;

export const skillsData = [
  { name: "React", icon: React.createElement(FaReact) },
  { name: "Next.js", icon: React.createElement(SiNextdotjs) },
  { name: "Node.js", icon: React.createElement(FaNodeJs) },
  { name: "TypeScript", icon: React.createElement(SiTypescript) },
  { name: "Nest JS", icon: React.createElement(SiNestjs) },
  { name: "MongoDB", icon: React.createElement(SiMongodb) },
  { name: "PostgreSQL", icon: React.createElement(SiPostgresql) },
  { name: "Microservices", icon: null },
  // { name: "WebRTC", icon: React.createElement(SiWebrtc) },
  { name: "Docker", icon: React.createElement(FaDocker) },
  { name: "Socket.io", icon: React.createElement(SiSocketdotio) },
  { name: "Firebase", icon: React.createElement(SiFirebase) },
  // { name: "Azure", icon: React.createElement(SiMicrosoftazure) },
  { name: "Leetcode", icon: React.createElement(SiLeetcode) },
  { name: "Redis", icon: React.createElement(SiRedis) },
  { name: "AWS", icon: React.createElement(FaAws) },
  { name: "Java", icon: React.createElement(FaJava) },
  { name: "HTML", icon: React.createElement(FaHtml5) },
  { name: "CSS", icon: React.createElement(FaCss3Alt) },
  { name: "JavaScript", icon: React.createElement(SiJavascript) },
  // { name: "Testing Library", icon: React.createElement(SiJest) },
  { name: "Redux", icon: React.createElement(SiRedux) },
  { name: "Git", icon: React.createElement(FaGit) },
  { name: "Tailwind", icon: React.createElement(SiTailwindcss) },
  // { name: "Prisma", icon: React.createElement(SiPrisma) },
  { name: "Bootstrap", icon: React.createElement(SiBootstrap) },
  { name: "Express", icon: React.createElement(SiExpress) },
  // { name: "Framer Motion", icon: React.createElement(SiFramer) },
  { name: "Postman", icon: React.createElement(SiPostman) },
] as const;
