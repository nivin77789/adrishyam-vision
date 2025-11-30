import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Loader } from "@/components/Loader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { Showcase } from "@/components/sections/Showcase";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <>
      {/* Loading Screen */}
      {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      
      {/* Main Content */}
      <div className="relative min-h-screen">
        {/* Theme Toggle - Fixed Position */}
        <div className="fixed top-6 right-6 z-50">
          <ThemeToggle />
        </div>
        
        <Hero />
        <About />
        <Expertise />
        <Services />
        <WhyUs />
        <Testimonials />
        <Team />
        <Showcase />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
