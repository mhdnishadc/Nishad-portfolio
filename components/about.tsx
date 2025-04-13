"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
  ref={ref}
  className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.175 }}
  id="about"
>
  <SectionHeading>About me</SectionHeading>

  <p className="mb-3">
    A passionate Full Stack Developer with expertise in the{" "}
    <span className="font-bold">MERN stack</span>, specializing in building scalable and high-performance web applications.
    I'm proficient in{" "}
    <span className="font-bold">
      React.js, Next.js, Node.js, Express.js, MongoDB, and PostgreSQL
    </span>, with hands-on experience in{" "}
    <span className="font-bold">
      building RESTful APIs, implementing JWT authentication, using Postman for API testing, and working with Drizzle ORM for database interactions
    </span>.
  </p>

  <p className="mb-3">
    I also have a strong foundation in{" "}
    <span className="font-bold">Data Structures & Algorithms (DSA)</span>, which helps me write efficient and optimized code.
    I'm continuously exploring new technologies and enjoy solving complex problems through code.
    I'm currently working as a{" "}
    <span className="font-bold">Full Stack Developer Intern at Luminar Technohub, Kochi</span>, and{" "}
    <span className="font-bold">I'm open to new opportunities</span> where I can contribute to impactful projects and innovative solutions.
  </p>
</motion.section>


  );
}
