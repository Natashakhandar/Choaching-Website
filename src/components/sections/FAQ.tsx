"use client";

import React, { useState } from "react";
import { faqItems } from "@/lib/data";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/70">
            Everything you need to know about admissions, courses, and facilities.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full" />
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen 
                    ? "border-primary bg-primary/5 dark:bg-primary/10" 
                    : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold text-lg text-foreground">{item.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? "bg-primary text-white" : "bg-zinc-100 dark:bg-zinc-800 text-foreground"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-foreground/80 leading-relaxed border-t border-zinc-200 dark:border-zinc-700 pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
