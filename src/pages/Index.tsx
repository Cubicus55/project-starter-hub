import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CurriculumSection from "@/components/CurriculumSection";
import InstructorsSection from "@/components/InstructorsSection";
import B2BSection from "@/components/B2BSection";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CurriculumSection />
        <InstructorsSection />
        <B2BSection />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
