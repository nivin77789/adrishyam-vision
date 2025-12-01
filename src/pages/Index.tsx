import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Loader } from "@/components/Loader";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/Navbar";

// Lazy load heavy background components
const ScrollScene = lazy(() => import("@/components/ScrollScene").then(module => ({ default: module.ScrollScene })));

// Lazy load sections below the fold
const MarqueeSection = lazy(() => import("@/components/sections/MarqueeSection").then(module => ({ default: module.MarqueeSection })));
const About = lazy(() => import("@/components/sections/About").then(module => ({ default: module.About })));
const Expertise = lazy(() => import("@/components/sections/Expertise").then(module => ({ default: module.Expertise })));
const Services = lazy(() => import("@/components/sections/Services").then(module => ({ default: module.Services })));
const WhyUs = lazy(() => import("@/components/sections/WhyUs").then(module => ({ default: module.WhyUs })));
const Testimonials = lazy(() => import("@/components/sections/Testimonials").then(module => ({ default: module.Testimonials })));
const Team = lazy(() => import("@/components/sections/Team").then(module => ({ default: module.Team })));
const Showcase = lazy(() => import("@/components/sections/Showcase").then(module => ({ default: module.Showcase })));
const Contact = lazy(() => import("@/components/sections/Contact").then(module => ({ default: module.Contact })));
const Footer = lazy(() => import("@/components/sections/Footer").then(module => ({ default: module.Footer })));

const FAQ = lazy(() => import("@/components/sections/FAQ").then(module => ({ default: module.FAQ })));
const Chatbot = lazy(() => import("@/components/Chatbot").then(module => ({ default: module.Chatbot })));

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}

      {/* 3D Background Scene */}
      <Suspense fallback={null}>
        <ScrollScene />
      </Suspense>

      {/* Fixed Background Logo */}
      <div className="fixed inset-0 z-[-5] flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.img
          src="/3dlogo.png"
          alt="Adrishyam Background Logo"
          className="w-[60vw] md:w-[30vw] h-auto object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]"
          initial={{ opacity: 0.05 }}
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Navbar />

      {/* Main Content */}
      <div className="relative min-h-screen">
        {/* Theme Toggle - Fixed Position */}
        <div className="fixed top-6 right-6 z-50">
          <ThemeToggle />
        </div>

        <Hero />

        <Suspense fallback={<div className="min-h-[20vh]" />}>
          <MarqueeSection />
        </Suspense>

        <Suspense fallback={<div className="min-h-[50vh]" />}>
          <About />
          <Expertise />
          <Services />
          <WhyUs />
          <Testimonials />
          <Team />
          <Showcase />
          <FAQ />
          <Contact />
          <Footer />
          <Chatbot />
        </Suspense>
      </div>
    </>
  );
};

export default Index;
