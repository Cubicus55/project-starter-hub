import { GraduationCap, Shield, TrendingUp, Users } from "lucide-react";

const benefits = [
  {
    icon: GraduationCap,
    title: "Strukturirana edukacija",
    description: "Strukturiran program koji te vodi korak po korak — od osnova do naprednijeg razumijevanja kripta.",
  },
  {
    icon: Shield,
    title: "Sigurnost na prvom mjestu",
    description: "Nauči kako zaštititi svoju imovinu, prepoznati prijevare i sigurno upravljati walletima.",
  },
  {
    icon: TrendingUp,
    title: "Praktično znanje",
    description: "Realni primjeri, tehnička analiza i strategije koje možeš odmah primijeniti.",
  },
  {
    icon: Users,
    title: "Zajednica i podrška",
    description: "Pristup ekskluzivnoj zajednici polaznika i mentorska podrška tijekom cijelog programa.",
  },
];

const BenefitsSection = () => (
  <section className="relative py-20 md:py-28">
    <div className="absolute inset-0 bg-background/30" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    <div className="container relative z-10 px-4">
      <div className="text-center mb-14">
        <span className="text-gradient font-semibold text-sm uppercase tracking-wider">Zašto Blok3</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-4">
          Sve što trebaš na <span className="text-gradient">jednom mjestu</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_hsl(199_89%_48%/0.15)]"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg text-foreground mb-2">{b.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
