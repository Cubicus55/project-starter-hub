import { useState } from "react";
import { 
  Wallet, Lock, Coins, Blocks, LineChart, Shield, 
  Globe, Code, Database, Network, Cpu, GraduationCap,
  ChevronDown, Clock, CheckCircle2
} from "lucide-react";
import { LucideIcon } from "lucide-react";


interface Module {
  icon: LucideIcon;
  title: string;
  outcome: string;
  quiz: string;
  duration: number;
}

interface Level {
  title: string;
  subtitle: string;
  modules: Module[];
}

const levels: Level[] = [
  {
    title: "Razina 1",
    subtitle: "Temelji",
    modules: [
      {
        icon: Blocks,
        title: "Uvod u blockchain",
        outcome: "Korisnik će razumjeti kako funkcionira blockchain tehnologija i zašto je revolucionarna.",
        quiz: "Test razumijevanja temeljnih blockchain koncepata",
        duration: 45,
      },
      {
        icon: Coins,
        title: "Kriptovalute osnove",
        outcome: "Korisnik će znati razlikovati Bitcoin, Ethereum i ostale kriptovalute.",
        quiz: "Kviz prepoznavanja i usporedbe kriptovaluta",
        duration: 60,
      },
      {
        icon: Wallet,
        title: "Kripto novčanici",
        outcome: "Korisnik će ovladati znanjem korištenja kripto novčanika i sigurnog čuvanja imovine.",
        quiz: "Praktični test postavljanja i korištenja walleta",
        duration: 50,
      },
      {
        icon: Lock,
        title: "Sigurnost i privatnost",
        outcome: "Korisnik će naučiti osnovne sigurnosne prakse za zaštitu digitalne imovine.",
        quiz: "Test prepoznavanja sigurnosnih prijetnji",
        duration: 40,
      },
    ],
  },
  {
    title: "Razina 2",
    subtitle: "Aktivno sudjelovanje",
    modules: [
      {
        icon: LineChart,
        title: "Trgovanje kriptovalutama",
        outcome: "Korisnik će razumjeti osnove trgovanja i analize tržišta.",
        quiz: "Simulacija trgovanja s virtualnim portfeljem",
        duration: 75,
      },
      {
        icon: Globe,
        title: "DeFi protokoli",
        outcome: "Korisnik će znati koristiti decentralizirane financijske aplikacije.",
        quiz: "Test korištenja DeFi platformi",
        duration: 65,
      },
      {
        icon: Database,
        title: "NFT ekosustav",
        outcome: "Korisnik će razumjeti kreiranje, kupnju i prodaju NFT-ova.",
        quiz: "Praktični zadatak kreiranja NFT-a",
        duration: 55,
      },
      {
        icon: Network,
        title: "DAO organizacije",
        outcome: "Korisnik će razumjeti decentralizirano upravljanje i glasovanje.",
        quiz: "Simulacija sudjelovanja u DAO glasovanju",
        duration: 50,
      },
    ],
  },
  {
    title: "Razina 3",
    subtitle: "Napredni korisnik",
    modules: [
      {
        icon: Code,
        title: "Smart ugovori",
        outcome: "Korisnik će razumjeti kako funkcioniraju i kako čitati pametne ugovore.",
        quiz: "Analiza i audit jednostavnog smart contracta",
        duration: 90,
      },
      {
        icon: Shield,
        title: "MiCA regulativa",
        outcome: "Korisnik će ovladati znanjem EU regulative za kripto imovinu.",
        quiz: "Test poznavanja MiCA pravnog okvira",
        duration: 70,
      },
      {
        icon: Cpu,
        title: "Layer 2 rješenja",
        outcome: "Korisnik će razumjeti skalabilnost i L2 mreže poput Arbitrum i Optimism.",
        quiz: "Praktični zadatak bridganja na L2 mrežu",
        duration: 60,
      },
      {
        icon: GraduationCap,
        title: "Strategija portfelja",
        outcome: "Korisnik će znati kreirati i upravljati diversificiranim kripto portfeljem.",
        quiz: "Izrada osobne investicijske strategije",
        duration: 80,
      },
    ],
  },
];

const LevelCard = ({ level, index }: { level: Level; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
      {/* Level Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 sm:p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-bold text-lg sm:text-xl">
            {index + 1}
          </div>
          <div>
            <h3 className="text-base sm:text-xl font-bold text-foreground">{level.title}</h3>
            <p className="text-primary font-medium text-sm sm:text-base">{level.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
            {level.modules.length} modula
          </span>
          <ChevronDown 
            className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      {/* Modules */}
      <div 
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 sm:p-6 pt-0 grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-2">
            {level.modules.map((module, moduleIndex) => (
              <div
                key={moduleIndex}
                className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/30 transition-colors"
              >
                {/* Module Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <module.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground mb-1">{module.title}</h4>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{module.duration} min</span>
                    </div>
                  </div>
                </div>

                {/* Outcome */}
                <div className="mb-3">
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">Ishod učenja</span>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {module.outcome}
                  </p>
                </div>

                {/* Quiz */}
                <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-medium text-primary">Kviz znanja</span>
                    <p className="text-xs text-muted-foreground mt-0.5">{module.quiz}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CurriculumSection = () => {
  const totalMinutes = levels.reduce(
    (acc, level) => acc + level.modules.reduce((sum, m) => sum + m.duration, 0),
    0
  );
  const totalHours = Math.round(totalMinutes / 60);

  return (
    <section id="curriculum" className="relative py-16 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="text-gradient font-semibold text-sm uppercase tracking-wider">Kurikulum</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 mb-4 md:mb-6">
            3 razine za <span className="text-gradient">buduće eksperte</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg px-2">
            Strukturirani program koji vas vodi od početnika do naprednog korisnika digitalne ekonomije.
          </p>
        </div>

        {/* Levels */}
        <div className="max-w-4xl mx-auto space-y-4">
          {levels.map((level, index) => (
            <LevelCard key={index} level={level} index={index} />
          ))}
        </div>

        {/* Total Duration */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-muted-foreground">Ukupno trajanje programa:</span>
            <span className="font-bold text-primary text-lg">~7 sati</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CurriculumSection;
