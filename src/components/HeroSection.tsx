import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Award } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Polaznika" },
    { icon: Zap, value: "12", label: "Modula" },
    { icon: Award, value: "95%", label: "Uspješnost" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-medium text-sm">Upisi za novu generaciju su otvoreni</span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Uđi u svijet{" "}
            <span className="text-gradient glow-text">
              digitalne ekonomije
            </span>
          </h1>

          {/* Subheading */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            Blok3 Akademija je vodeći program za blockchain, Web3 i kripto edukaciju u regiji. 
            Stekni praktična znanja i pripremi se za budućnost.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Button 
              size="lg" 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg animate-pulse-glow"
            >
              <a href="#apply">
                Prijavi se sada
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="border-border hover:bg-secondary font-semibold px-8 py-6 text-lg"
            >
              <a href="#curriculum">Saznaj više</a>
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-xl bg-card/50 border border-border backdrop-blur-sm"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
