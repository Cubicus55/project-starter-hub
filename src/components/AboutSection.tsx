import { BookOpen, Shield, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "Od temelja do naprednog",
      description: "Bitcoin, Ethereum, DeFi, NFT-ovi, Layer 2 rješenja i više"
    },
    {
      icon: Shield,
      title: "Sigurnost na prvom mjestu",
      description: "Self-custody, prepoznavanje prijevara i zaštita imovine"
    },
    {
      icon: TrendingUp,
      title: "Praktična primjena",
      description: "Tehnička analiza, strategije ulaganja i exit planovi"
    }
  ];

  return (
    <section id="about" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-14">
            <span className="text-gradient font-semibold text-sm uppercase tracking-wider">O programu</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 mb-6">
              Kompletna <span className="text-gradient">kripto edukacija</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Blok3 je sveobuhvatni edukacijski program koji te vodi od potpunog početnika do 
              samostalnog i sigurnog korisnika blockchain tehnologije. Kroz 3 razine naučit ćeš sve – 
              od osnova Bitcoina i sigurnog čuvanja imovine, preko DeFi protokola i tehničke analize, 
              do naprednih strategija ulaganja i prepoznavanja prijevara.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
