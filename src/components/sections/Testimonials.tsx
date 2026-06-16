"use client";

import React, { useState } from "react";
import { testimonials } from "@/lib/data";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
            Student Stories
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Hear what our top achievers have to say about their journey with Quantum Academy.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="max-w-5xl mx-auto relative"
        >
          <div className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 z-10">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-center text-foreground hover:text-primary hover:scale-110 transition-all border border-zinc-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 z-10">
            <button
              onClick={next}
              className="w-14 h-14 rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-center text-foreground hover:text-primary hover:scale-110 transition-all border border-zinc-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="relative min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="absolute inset-0 p-4"
              >
                <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_30px_60px_rgba(37,99,235,0.12)] border border-primary/5 h-full flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                  
                  <Quote className="w-16 h-16 text-primary/10 mb-8" />
                  
                  <p className="text-xl md:text-3xl text-foreground/80 leading-relaxed italic mb-12 font-serif relative z-10">
                    "{testimonials[currentIndex].review}"
                  </p>
                  
                  <div className="flex items-center gap-6 mt-auto relative z-10">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[currentIndex].name)}&size=128&background=random`}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-2xl font-heading text-foreground">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2">{testimonials[currentIndex].course}</p>
                      <div className="flex gap-1 text-yellow-400">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current drop-shadow-sm" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8 shadow-[0_0_10px_rgba(37,99,235,0.5)]" : "bg-zinc-300 w-3 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
