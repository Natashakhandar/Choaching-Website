"use client";

import React from "react";
import { studentResults } from "@/lib/data";
import { Trophy } from "lucide-react";
import { motion, Variants } from "framer-motion";

export function Results() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
  };

  return (
    <section id="results" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
            Our Legacy of Success
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Numbers that speak for themselves. Meet our top performers who cracked the toughest exams.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {studentResults.map((result, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`relative overflow-hidden rounded-3xl border transition-all duration-300
                ${index === 0 
                  ? "lg:col-span-2 border-yellow-400 bg-yellow-50/50 shadow-[0_20px_50px_rgba(250,204,21,0.2)] hover:shadow-[0_30px_60px_rgba(250,204,21,0.3)]" 
                  : "border-zinc-100 bg-white shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_50px_rgba(37,99,235,0.1)] hover:border-primary/20"}
              `}
            >
              {/* Medal / Rank Indicator */}
              <div className={`absolute top-0 right-0 w-16 h-16 flex items-start justify-end p-4
                ${index === 0 ? "text-yellow-500" : index === 1 ? "text-slate-400" : index === 2 ? "text-amber-700" : "text-primary/30"}
              `}>
                <Trophy className="w-8 h-8 drop-shadow-md" fill="currentColor" />
              </div>

              <div className="p-8 flex flex-col items-center text-center h-full">
                <div className={`relative w-28 h-28 rounded-full border-4 mb-5 shadow-xl
                  ${index === 0 ? "border-yellow-400" : index === 1 ? "border-slate-300" : index === 2 ? "border-amber-600" : "border-zinc-100"}
                `}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(result.name)}&size=256&background=random`}
                    alt={result.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                  {index < 3 && (
                    <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg
                      ${index === 0 ? "bg-yellow-500" : index === 1 ? "bg-slate-400" : "bg-amber-600"}
                    `}>
                      {index + 1}
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold font-heading text-foreground mb-1">{result.name}</h3>
                <p className="text-sm font-medium text-foreground/50 mb-6 uppercase tracking-widest">{result.exam}</p>
                
                <div className="w-full bg-white border border-zinc-100 rounded-2xl p-4 grid grid-cols-2 gap-4 mt-auto shadow-sm">
                  <div className="flex flex-col">
                    <span className="text-xs text-foreground/50 mb-1 uppercase font-bold tracking-wider">Rank</span>
                    <span className="text-xl font-bold text-primary">{result.rank}</span>
                  </div>
                  <div className="flex flex-col border-l border-zinc-100 pl-4">
                    <span className="text-xs text-foreground/50 mb-1 uppercase font-bold tracking-wider">Score</span>
                    <span className="text-xl font-bold text-accent">{result.percentile}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
