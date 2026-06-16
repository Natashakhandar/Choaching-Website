import React from "react";
import { galleryImages } from "@/lib/data";

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
            Campus Life
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A glimpse into the vibrant ecosystem that makes Quantum Academy the best place to learn and grow.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full" />
        </div>

        {/* Masonry Layout via CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => {
            // Using placeholder images that look realistic via source.unsplash.com equivalent 
            // Since source.unsplash is deprecated, we use picsum or realistic placehold.co images
            // In a real app, we'd use the actual src paths
            const placeholderUrls = [
              "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800", // Classroom
              "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800", // Lab
              "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800", // Library
              "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800", // Event
              "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800", // Campus
              "https://images.unsplash.com/photo-1517480436979-4d6cbdb86047?auto=format&fit=crop&q=80&w=800", // Sports
            ];
            
            return (
              <div
                key={index}
                className="break-inside-avoid relative group overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={placeholderUrls[index % placeholderUrls.length]}
                  alt={image.alt}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-primary font-bold text-xs uppercase tracking-wider mb-1">
                    {image.category}
                  </span>
                  <p className="text-white font-medium">
                    {image.alt}
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
