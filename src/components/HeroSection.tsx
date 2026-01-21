import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoCard = () => {
  return (
    <div className="relative bg-[hsl(200_80%_12%)] rounded-2xl overflow-hidden border border-primary/20 shadow-2xl aspect-video">
      {/* Video placeholder with play button */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-transparent">
        <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30 cursor-pointer hover:bg-primary/30 transition-all duration-300 hover:scale-110">
          <Play className="w-8 h-8 text-primary fill-primary" />
        </div>
      </div>
      
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-xl" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-xl" />
      
      {/* Bottom label */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Promotivni video</span>
        <span className="text-xs text-primary/70 font-mono">00:00</span>
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

            {/* Main Heading */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 opacity-0 animate-fade-up tracking-tight"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="text-foreground">Edukacija za</span>
              <span className="text-primary"> digitalnu ekonomiju</span>
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
            <VideoCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
