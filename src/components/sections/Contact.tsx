"use client";

import React, { useState } from "react";
import { contactInfo } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";

// Web3Forms Public Access Key
const WEB3FORMS_ACCESS_KEY = "3f535d92-5bc7-48ee-b4a0-f5cbc4c7ef23";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "JEE Main + Advanced",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const emailMessage = `
New Admission Enquiry from Website:

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Interested Course: ${formData.course}

Message: 
${formData.message || "No additional message provided."}
      `;

      // Submitting directly from Frontend to avoid Cloudflare bot-blocks
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Admission Lead: ${formData.name} - ${formData.course}`,
          from_name: "Quantum Academy Website",
          name: formData.name,
          email: formData.email, // Allows replying directly
          message: emailMessage,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          course: "JEE Main + Advanced",
          message: "",
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to send request. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Take the first step towards a bright future. Contact our admission counselors today.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <h3 className="text-2xl font-bold font-heading mb-6 text-foreground">
              Request a Callback
            </h3>
            
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">Request Sent!</h4>
                <p className="text-foreground/70">
                  Thank you for reaching out. Our admission counselor will call you within 24 hours.
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/80 uppercase tracking-wider">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/80 uppercase tracking-wider">Phone Number</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/80 uppercase tracking-wider">Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/80 uppercase tracking-wider">Interested Course</label>
                  <select 
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium appearance-none"
                  >
                    <option value="JEE Main + Advanced">JEE Main + Advanced</option>
                    <option value="NEET UG">NEET UG</option>
                    <option value="Class 11-12 Boards">Class 11-12 Boards</option>
                    <option value="Foundation (8-10)">Foundation (8-10)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/80 uppercase tracking-wider">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none font-medium"
                    placeholder="How can we help you?"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
                )}

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gap-2 shadow-lg hover:shadow-primary/30"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>Processing <Loader2 className="w-5 h-5 animate-spin" /></>
                  ) : (
                    <>Send Request <Send className="w-5 h-5" /></>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Details & Map */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-primary/5 p-6 rounded-3xl flex flex-col gap-4 border border-primary/10">
                <div className="w-14 h-14 bg-white text-primary shadow-[0_10px_20px_rgba(37,99,235,0.1)] rounded-2xl flex items-center justify-center">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1 font-heading">Call Us</h4>
                  <p className="text-foreground/70 font-medium">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="bg-accent/5 p-6 rounded-3xl flex flex-col gap-4 border border-accent/10">
                <div className="w-14 h-14 bg-white text-accent shadow-[0_10px_20px_rgba(245,158,11,0.1)] rounded-2xl flex items-center justify-center">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1 font-heading">Email Us</h4>
                  <p className="text-foreground/70 font-medium">{contactInfo.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl flex gap-4 items-start border border-zinc-100 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
              <div className="w-14 h-14 bg-zinc-50 text-foreground shadow-sm rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2 font-heading">Visit Campus</h4>
                <p className="text-foreground/70 leading-relaxed font-medium">{contactInfo.address}</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-[280px] bg-zinc-100 rounded-3xl overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-zinc-100">
              <iframe 
                src={contactInfo.mapEmbedUrl}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
