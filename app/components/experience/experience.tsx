"use client";
import { motion } from "framer-motion";
import { CareerTimeline, EducationTimeline } from "./timeline";

export const Experience = () => {
  return (
      <motion.section
        id="experience"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-7xl space-y-20 lg:space-y-0 lg:flex py-10 scroll-mt-30"
      >
        <CareerTimeline></CareerTimeline>
        <EducationTimeline></EducationTimeline>
      </motion.section>
  );
};
