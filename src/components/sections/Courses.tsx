"use client";

import React from "react";
import { courses } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function Courses() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 20 } 
    },
  };

  return (
    <section id="courses" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
            Our Premium Programs
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Scientifically designed curriculum to help you crack the toughest competitive exams.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: course.popular ? -5 : -10 }}
              className={`relative bg-white rounded-3xl border ${
                course.popular
                  ? "border-primary shadow-[0_30px_60px_rgba(37,99,235,0.2)] scale-100 lg:scale-105 z-10"
                  : "border-zinc-100 shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] hover:border-primary/30"
              } p-8 transition-shadow duration-500 flex flex-col h-full overflow-hidden`}
            >
              {course.popular && (
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary to-accent" />
              )}
              {course.popular && (
                <span className="absolute top-4 right-4 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Most Popular
                </span>
              )}

              <div className="mb-6 mt-2">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${course.accent} mb-4 shadow-sm`}>
                  {course.tagline}
                </span>
                <h3 className="text-2xl font-bold font-heading text-foreground mb-2">
                  {course.name}
                </h3>
                <p className="text-sm font-medium text-foreground/50 mb-4 uppercase tracking-wider">{course.duration}</p>
                <p className="text-foreground/80 leading-relaxed">{course.description}</p>
              </div>

              <div className="mt-auto mb-8">
                <ul className="space-y-4">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`mt-1 bg-gradient-to-r ${course.accent} rounded-full p-1 text-white shadow-sm shrink-0`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-foreground/80 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-zinc-100">
                <div className="text-3xl font-bold font-heading text-foreground mb-6">
                  {course.price}
                </div>
                <a href="#contact" className="block w-full">
                  <Button
                    variant={course.popular ? "primary" : "outline"}
                    className="w-full shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Enroll Now
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
