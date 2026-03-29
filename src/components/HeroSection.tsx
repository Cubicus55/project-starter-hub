import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoCard = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl aspect-video bg-[hsl(200_80%_12%)]">
      <iframe
        src="https://www.youtube.com/embed/yJw8yCWYlSM?rel=0&modestbranding=1"
        title="Blok3 promotivni video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
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
             <span className="text-foreground">Strukturirana kripto</span>
              <span className="text-gradient"> edukacija na hrvatskom</span>
            </h1>

            {/* Subheading */}
            <p 
              className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              19 video modula, 3 razine, kvizovi, doživotan pristup i mjesečni live call.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              <Button 
                size="lg" 
                asChild
                className="font-semibold px-8 py-6 text-base"
              >
                <a href="#pricing">Odaberi svoju razinu</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="border-border bg-muted/50 hover:bg-muted font-semibold px-8 py-6 text-base"
              >
                <a href="#benefits">Pogledaj program</a>
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
