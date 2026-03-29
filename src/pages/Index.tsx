import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import AudienceSection from "@/components/AudienceSection";
import PricingSection from "@/components/PricingSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import InstructorsSection from "@/components/InstructorsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/pozadina.jpg')`,
          backgroundPosition: 'center 40%',
        }}
      />
      <div className="fixed inset-0 bg-background/80" />
      <div className="relative z-10">
        <Header />
        <main>
        <HeroSection />
<BenefitsSection />
<InstructorsSection />
<AudienceSection />
<PricingSection />
<HowItWorksSection />
<FAQSection />
<FinalCTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
