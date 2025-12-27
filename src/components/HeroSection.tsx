import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const TerminalCard = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  
  const lines = [
    { text: "Učitavam znanje o Bitcoinu...", typing: true },
    { text: "Otkrivam tajne blockchaina...", typing: true },
    { text: "Aktiviram DeFi protokole...", typing: true },
    { text: "Znanje učitano. Spreman za budućnost!", success: true },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < lines.length) return prev + 1;
        return prev;
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[hsl(200_80%_12%)] rounded-2xl p-6 md:p-8 border border-primary/20 shadow-2xl">
      <div className="flex items-center gap-2 mb-6">
        <Terminal className="w-5 h-5 text-primary" />
        <span className="text-primary font-mono text-sm font-semibold tracking-wide">BLOK3_SYSTEM_INIT</span>
      </div>
      <div className="space-y-3 font-mono text-sm">
        {lines.slice(0, visibleLines).map((line, index) => (
          <div 
            key={index} 
            className={`flex items-start gap-2 animate-fade-in ${line.success ? 'text-emerald-400' : 'text-muted-foreground'}`}
          >
            <span className="text-muted-foreground">&gt;</span>
            <span>{line.text}</span>
          </div>
        ))}
        {visibleLines < lines.length && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>&gt;</span>
            <span className="animate-pulse">_</span>
          </div>
        )}
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-primary font-semibold text-sm tracking-wide">UPISI U TIJEKU ZA 2025.</span>
            </div>

            {/* Main Heading */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 opacity-0 animate-fade-up tracking-tight"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="text-foreground">Nauči</span>
              <span className="text-primary"> digitalnu ekonomiju.</span>
            </h1>

            {/* Subheading */}
            <p 
              className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              Sveobuhvatni edukativni program dizajniran za <strong className="text-foreground">pojedince i tvrtke</strong> koji žele savladati blockchain tehnologiju, MiCA regulativu i strateško upravljanje kripto imovinom.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              <Button 
                size="lg" 
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base rounded-xl"
              >
                <a href="#curriculum">Istraži kurikulum</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="border-border bg-muted/50 hover:bg-muted font-semibold px-8 py-6 text-base rounded-xl"
              >
                <a href="#about">Saznaj više</a>
              </Button>
            </div>
          </div>

          {/* Right Content - Terminal */}
          <div 
            className="opacity-0 animate-fade-up lg:justify-self-end w-full max-w-md lg:max-w-lg"
            style={{ animationDelay: '0.5s' }}
          >
            <TerminalCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
