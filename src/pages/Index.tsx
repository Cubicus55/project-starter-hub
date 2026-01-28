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
    <div className="min-h-screen bg-background relative">
      {/* Global Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/pozadina.jpg')`,
          backgroundPosition: 'center 40%',
        }}
      />
      
      {/* Dark overlay to soften the background */}
      <div className="fixed inset-0 bg-background/80" />
      
      {/* Content */}
      <div className="relative z-10">
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
    </div>
  );
};

export default Index;
