import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Showcase } from "@/components/sections/Showcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { ThemeToggle } from "@/components/ThemeToggle";

const Work = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="fixed top-6 right-6 z-50">
                <ThemeToggle />
            </div>
            <div className="pt-20">
                <Showcase />
                <Testimonials />
            </div>
            <Footer />
        </div>
    );
};

export default Work;
