import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Services as ServicesSection } from "@/components/sections/Services";
import { Expertise } from "@/components/sections/Expertise";
import { ThemeToggle } from "@/components/ThemeToggle";

const Services = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="fixed top-6 right-6 z-50">
                <ThemeToggle />
            </div>
            <div className="pt-20">
                <ServicesSection />
                <Expertise />
            </div>
            <Footer />
        </div>
    );
};

export default Services;
