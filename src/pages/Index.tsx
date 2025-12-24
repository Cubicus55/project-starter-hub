import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CurriculumSection from "@/components/CurriculumSection";
import InstructorsSection from "@/components/InstructorsSection";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CurriculumSection />
        <InstructorsSection />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
