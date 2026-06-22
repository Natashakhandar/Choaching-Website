"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { heroStats } from "@/lib/data";
import { Button } from "@/components/ui/Button";

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function (easeOutQuart)
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(end * easeOut));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 px-4 bg-zinc-50"
    >
      {/* Premium Floating Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Blur Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px] animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/10 blur-[120px] animate-pulse" style={{ animationDuration: "10s" }} />
        
        {/* Floating Geometric Shapes */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[15%] w-20 h-20 border-4 border-blue-500/10 rounded-full"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[30%] right-[15%] w-24 h-24 border-4 border-amber-500/10 rounded-3xl transform rotate-12"
        />
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, 15, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[25%] w-12 h-12 bg-blue-500/5 rounded-full"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white shadow-[0_10px_30px_rgba(37,99,235,0.15)] border border-blue-100 mb-8 text-primary font-bold text-sm uppercase tracking-wider"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
          </span>
          Admissions Open for 2025-26
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black font-heading mb-6 tracking-tight text-zinc-900 leading-[1.1]"
        >
          Shape Your Future With India's{" "}
          <span className="relative whitespace-nowrap">
            <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-amber-500 blur-2xl opacity-20 rounded-full"></span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-amber-500">
              Next Generation
            </span>
          </span>{" "}
          <br className="hidden md:block" />
          Learning Platform
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-2xl text-zinc-600 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
        >
          Expert coaching for JEE, NEET, MHT-CET and Foundation. Experience AI-driven learning, world-class faculty, and guaranteed results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
        >
          <a href="#contact" className="w-full sm:w-auto group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <Button size="lg" className="w-full relative text-lg px-8 py-6 h-auto shadow-2xl">
              Apply Now — <span className="font-normal opacity-80 text-sm ml-2">Seats filling fast</span>
            </Button>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full text-lg px-8 py-6 h-auto border-2 border-zinc-200 hover:border-blue-200 hover:bg-blue-50/50 bg-white/50 backdrop-blur-md shadow-lg">
              Book Free Demo Class
            </Button>
          </a>
        </motion.div>

        {/* Statistics Bar with CountUp */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-3xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-100 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-amber-400" />
          
          {heroStats.map((stat, index) => {
            const numValue = parseInt(stat.value.replace(/,/g, ''), 10);
            return (
              <div key={index} className="flex flex-col items-center justify-center pt-6 md:pt-0 first:pt-0 group">
                <div className="text-4xl md:text-5xl font-black font-heading text-zinc-900 mb-2 tracking-tight group-hover:scale-110 transition-transform duration-300">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-800">
                    <Counter end={numValue} />
                  </span>
                  <span className="text-amber-500">{stat.suffix}</span>
                </div>
                <div className="text-sm md:text-base font-bold text-zinc-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
