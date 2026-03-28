import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import AudienceSection from "@/components/AudienceSection";
import PricingSection from "@/components/PricingSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
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
          <BenefitsSection />
          <AudienceSection />
          <PricingSection />
          <HowItWorksSection />
          <FAQSection />
          <FinalCTASection />
          <ApplicationForm />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
