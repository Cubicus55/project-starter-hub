import { User, Building2, Briefcase } from "lucide-react";

const audiences = [
  {
    icon: User,
    title: "Početnici",
    description: "Želiš ući u svijet kriptovaluta, ali ne znaš odakle početi? Blok3 te vodi od nule.",
  },
  {
    icon: Briefcase,
    title: "Iskusni investitori",
    description: "Već trgujesh, ali želiš strukturirano znanje o DeFi-ju, regulativi i naprednim strategijama.",
  },
  {
    icon: Building2,
    title: "Tvrtke i timovi",
    description: "Educiral svoj tim o blockchainu, MiCA regulativi i strateškom upravljanju digitalnom imovinom.",
  },
];

const AudienceSection = () => (
  <section className="relative py-20 md:py-28">
    <div className="absolute inset-0 bg-background/30" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    <div className="container relative z-10 px-4">
      <div className="text-center mb-14">
        <span className="text-gradient font-semibold text-sm uppercase tracking-wider">Komu je namijenjeno</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-4">
          Program za <span className="text-gradient">svakoga</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {audiences.map((a, i) => (
          <div
            key={i}
            className="text-center p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <a.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-lg text-foreground mb-3">{a.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{a.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
