import React from "react";
import { contactInfo, navLinks, courses } from "@/lib/data";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl font-heading">
                Q
              </div>
              <span className="font-bold text-2xl font-heading tracking-tight text-white">
                Quantum <span className="text-primary">Academy</span>
              </span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Shape your future with India's most trusted coaching institute. We don't just teach, we transform aspirations into reality.
            </p>
            <div className="flex gap-4">
              <a href={contactInfo.socialLinks.facebook} className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>
              </a>
              <a href={contactInfo.socialLinks.instagram} className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2ZM7.6 4C5.6 4 4 5.6 4 7.6V16.4C4 18.4 5.6 20 7.6 20H16.4C18.4 20 20 18.4 20 16.4V7.6C20 5.6 18.4 4 16.4 4H7.6ZM12 6.8C14.87 6.8 17.2 9.13 17.2 12C17.2 14.87 14.87 17.2 12 17.2C9.13 17.2 6.8 14.87 6.8 12C6.8 9.13 9.13 6.8 12 6.8ZM12 8.8C10.23 8.8 8.8 10.23 8.8 12C8.8 13.77 10.23 15.2 12 15.2C13.77 15.2 15.2 13.77 15.2 12C15.2 10.23 13.77 8.8 12 8.8ZM17.27 5.27C17.82 5.27 18.27 5.72 18.27 6.27C18.27 6.82 17.82 7.27 17.27 7.27C16.72 7.27 16.27 6.82 16.27 6.27C16.27 5.72 16.72 5.27 17.27 5.27Z"/></svg>
              </a>
              <a href={contactInfo.socialLinks.youtube} className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M21.58 7.19C21.36 6.33 20.67 5.64 19.81 5.42C18.25 5 12 5 12 5C12 5 5.75 5 4.19 5.42C3.33 5.64 2.64 6.33 2.42 7.19C2 8.75 2 12 2 12C2 12 2 15.25 2.42 16.81C2.64 17.67 3.33 18.36 4.19 18.58C5.75 19 12 19 12 19C12 19 18.25 19 19.81 18.58C20.67 18.36 21.36 17.67 21.58 16.81C22 15.25 22 12 22 12C22 12 22 8.75 21.58 7.19ZM10 15V9L15.2 12L10 15Z"/></svg>
              </a>
              <a href={contactInfo.socialLinks.linkedin} className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6C1.14 6 0 4.88 0 3.5C0 2.12 1.14 1 2.5 1C3.86 1 4.98 2.12 4.98 3.5ZM5 8H0V24H5V8ZM13.32 8C11.53 8 10.42 8.98 9.94 9.94V8H5.16C5.22 9.38 5.16 24 5.16 24H10.15V15.06C10.15 14.58 10.18 14.1 10.33 13.76C10.74 12.82 11.61 11.84 13.06 11.84C14.98 11.84 15.75 13.31 15.75 15.54V24H20.75V14.8C20.75 9.87 18.11 8 13.32 8Z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-zinc-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6">Our Programs</h4>
            <ul className="space-y-4">
              {courses.map((course, index) => (
                <li key={index}>
                  <a href="#courses" className="text-zinc-400 hover:text-white transition-colors">
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-primary shrink-0" />
                <span className="text-zinc-400">{contactInfo.address}</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-6 h-6 text-primary shrink-0" />
                <span className="text-zinc-400">{contactInfo.phone}</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="w-6 h-6 text-primary shrink-0" />
                <span className="text-zinc-400">{contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Quantum Academy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
