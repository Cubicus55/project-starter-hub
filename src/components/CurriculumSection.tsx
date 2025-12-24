import { Code, Database, Lock, Wallet, Globe, Cpu, LineChart, Shield, Blocks, Coins, Network, GraduationCap } from "lucide-react";

const CurriculumSection = () => {
  const modules = [
    {
      icon: Blocks,
      title: "Uvod u Blockchain",
      description: "Temelji blockchain tehnologije, decentralizacija i distribuirani sustavi.",
      duration: "2 tjedna",
    },
    {
      icon: Coins,
      title: "Kriptovalute",
      description: "Bitcoin, Ethereum i altcoini - kako funkcioniraju i zašto su revolucionarni.",
      duration: "2 tjedna",
    },
    {
      icon: Wallet,
      title: "Kripto Walleti",
      description: "Sigurno čuvanje i upravljanje digitalnom imovinom.",
      duration: "1 tjedan",
    },
    {
      icon: Code,
      title: "Smart Contracts",
      description: "Programiranje pametnih ugovora na Ethereum mreži.",
      duration: "3 tjedna",
    },
    {
      icon: Globe,
      title: "Web3 Razvoj",
      description: "Razvoj decentraliziranih aplikacija (dApps) od nule.",
      duration: "3 tjedna",
    },
    {
      icon: LineChart,
      title: "DeFi Ekosustav",
      description: "Decentralizirane financije - lending, staking, yield farming.",
      duration: "2 tjedna",
    },
    {
      icon: Database,
      title: "NFT & Metaverse",
      description: "Digitalna umjetnost, kolekcije i virtualni svjetovi.",
      duration: "2 tjedna",
    },
    {
      icon: Shield,
      title: "Sigurnost",
      description: "Zaštita od napada, sigurnosne prakse i audit smart contracta.",
      duration: "2 tjedna",
    },
    {
      icon: Lock,
      title: "Regulativa",
      description: "Pravni okvir i regulacija kripto industrije u EU.",
      duration: "1 tjedan",
    },
    {
      icon: Network,
      title: "DAO Organizacije",
      description: "Decentralizirane autonomne organizacije i governance.",
      duration: "1 tjedan",
    },
    {
      icon: Cpu,
      title: "Layer 2 Rješenja",
      description: "Skalabilnost blockhaina - Polygon, Arbitrum, Optimism.",
      duration: "2 tjedna",
    },
    {
      icon: GraduationCap,
      title: "Završni Projekt",
      description: "Praktična izrada vlastite Web3 aplikacije.",
      duration: "3 tjedna",
    },
  ];

  return (
    <section id="curriculum" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Kurikulum</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            12 modula za <span className="text-gradient">buduće eksperte</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Sveobuhvatni program koji pokriva sve aspekte blockchain tehnologije i digitalne ekonomije.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 card-hover cursor-default"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <module.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                {module.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {module.description}
              </p>
              <span className="text-xs font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                {module.duration}
              </span>
            </div>
          ))}
        </div>

        {/* Total Duration */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-card border border-border">
            <span className="text-muted-foreground">Ukupno trajanje programa:</span>
            <span className="font-bold text-primary text-lg">24 tjedna</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
