import { Button } from "@/components/ui/button";
import { Check, Star, Clock, CreditCard, Video } from "lucide-react";

const plans = [
  {
    name: "Razina 1",
    subtitle: "Osnove kripta, sigurnosti i blockchain logike",
    price: "129 €",
    features: [
      "Bitcoin, blockchain i vrste kriptovaluta",
      "Sigurnost i self-custody",
      "Zakonodavni i porezni okvir",
      "Osnove tehničke analize",
      "FIAT onramp i offramp",
      "Praktična radionica: MetaMask",
      "Doživotan pristup",
      "Mjesečni live call",
    ],
    recommended: false,
    href: "/checkout-razina-1",
    cta: "Kupi Razinu 1",
  },
  {
    name: "Razina 2",
    subtitle: "Dublje razumijevanje tržišta, tokena i kripto ekosustava",
    price: "139 €",
    features: [
      "Ethereum i Layer 2 rješenja",
      "Rudarenje i halving ciklusi",
      "Tokenomija",
      "Tehnička analiza za investitore",
      "Kategorije i trendovi",
      "Kripto kultura i slang",
      "Doživotan pristup",
      "Mjesečni live call",
    ],
    recommended: false,
    href: "/checkout-razina-2",
    cta: "Kupi Razinu 2",
  },
  {
    name: "Razina 3",
    subtitle: "Napredne teme, DeFi, sigurnost i regulativa",
    price: "149 €",
    features: [
      "DeFi arhitektura",
      "Bridging i međulančana komunikacija",
      "AI i kripto",
      "Napredna sigurnost i obrana od prijevara",
      "Globalna regulativa i institucije",
      "MiCA, SAD i regija",
      "Kapital, plan i disciplina",
      "Doživotan pristup",
      "Mjesečni live call",
    ],
    recommended: false,
    href: "/checkout-razina-3",
    cta: "Kupi Razinu 3",
  },
  {
    name: "Sve 3 razine",
    subtitle: "Kompletan Blok3 edukacijski program",
    price: "349 €",
    originalPrice: "417 €",
    savings: "Uštedi 68 € uz kompletan program",
    features: [
      "Sve 3 razine",
      "19 video modula",
      "Kvizovi i provjera znanja",
      "Doživotan pristup",
      "Mjesečni live call",
    ],
    recommended: true,
    href: "/checkout-sve-3-razine",
    cta: "Kupi kompletan program",
  },
] as const;

const PricingSection = () => (
  <section id="pricing" className="relative py-20 md:py-28 scroll-mt-20">
    <div className="absolute inset-0 bg-background/30" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    <div className="container relative z-10 px-4">
      <div className="text-center mb-4">
        <span className="text-gradient font-semibold text-sm uppercase tracking-wider">Cijene</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-4">
          Odaberi svoju <span className="text-gradient">razinu</span>
        </h2>
        <p className="text-muted-foreground mt-4 text-base">Odaberi razinu koja odgovara tvojem znanju</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
              plan.recommended
                ? "border-primary/60 bg-primary/5 shadow-[0_0_50px_hsl(199_89%_48%/0.2)] scale-[1.03]"
                : "border-border bg-gradient-card hover:border-primary/30"
            }`}
          >
            {plan.recommended && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-gradient-to-r from-[#333aed] to-[#8ee7b3] text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                <Star className="w-3.5 h-3.5 fill-current" /> NAJBOLJA VRIJEDNOST
              </div>
            )}

            <div className="mb-4">
              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{plan.subtitle}</p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
              {'originalPrice' in plan && plan.originalPrice && (
                <span className="ml-2 text-lg text-muted-foreground line-through">{plan.originalPrice}</span>
              )}
              {'savings' in plan && plan.savings && (
                <p className="text-primary text-sm font-semibold mt-1">{plan.savings}</p>
              )}
            </div>

            <ul className="space-y-2.5 mb-8 flex-1">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              asChild
              className={`w-full py-6 text-base font-semibold ${
                plan.recommended ? "" : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              }`}
              variant={plan.recommended ? "default" : "secondary"}
            >
              <a href={plan.href}>{plan.cta}</a>
            </Button>
          </div>
        ))}
      </div>

      {/* Trust row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 max-w-4xl mx-auto">
        {[
          { icon: Clock, text: "Doživotan pristup — uči u svom tempu" },
          { icon: CreditCard, text: "Jednokratna uplata — bez pretplate" },
          { icon: Video, text: "Mjesečni live call s edukatorima" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 justify-center text-sm text-muted-foreground">
            <item.icon className="w-5 h-5 text-primary shrink-0" />
            {item.text}
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-muted-foreground mt-8">
        PDV se ne obračunava sukladno članku 90. Zakona o PDV-u.
      </p>
    </div>
  </section>
);

export default PricingSection;
