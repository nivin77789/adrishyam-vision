import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { About as AboutSection } from "@/components/sections/About";
import { Team } from "@/components/sections/Team";
import { WhyUs } from "@/components/sections/WhyUs";
import { ThemeToggle } from "@/components/ThemeToggle";

const About = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="fixed top-6 right-6 z-50">
                <ThemeToggle />
            </div>
            <div className="pt-20">
                <AboutSection />
                <WhyUs />
                <Team />
            </div>
            <Footer />
        </div>
    );
};

export default About;
