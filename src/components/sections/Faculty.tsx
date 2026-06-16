"use client";

import React from "react";
import { faculty } from "@/lib/data";
import { motion } from "framer-motion";

export function Faculty() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
  };

  return (
    <section id="faculty" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
            Learn From The Best
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our elite faculty members are IIT/NIT alumni with a proven track record of producing top ranks.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {faculty.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_60px_rgba(37,99,235,0.12)] transition-all duration-500 flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-zinc-100">
                {/* Fallback avatar if image is missing */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-300">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=512&background=random`}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover z-10 group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm font-medium leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    "{member.bio}"
                  </p>
                </div>
              </div>

              <div className="p-6 text-center flex-1 flex flex-col justify-center relative z-30 bg-white">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wide mb-4 shadow-sm">
                  {member.subject}
                </span>
                <h3 className="text-xl font-bold font-heading text-foreground mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-foreground/60 mb-2">
                  {member.qualification}
                </p>
                <div className="w-12 h-0.5 bg-zinc-100 mx-auto my-3" />
                <p className="text-sm font-bold text-accent">
                  {member.experience} Experience
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
