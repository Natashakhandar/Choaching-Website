import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Courses } from "@/components/sections/Courses";
import { Faculty } from "@/components/sections/Faculty";
import { Results } from "@/components/sections/Results";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Features />
      <Courses />
      <Faculty />
      <Results />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
    </main>
  );
}
