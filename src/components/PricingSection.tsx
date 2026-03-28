import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Razina 1",
    subtitle: "Osnove blockchaina",
    price: "€99",
    originalPrice: "€129",
    features: [
      "Bitcoin i blockchain osnove",
      "Kreiranje i sigurnost walleta",
      "Osnove kupovine i prodaje",
      "Prepoznavanje prijevara",
      "Pristup zajednici polaznika",
    ],
    recommended: false,
  },
  {
    name: "Razina 2",
    subtitle: "DeFi i napredni koncepti",
    price: "€109",
    originalPrice: "€139",
    features: [
      "Sve iz Razine 1",
      "Ethereum i DeFi protokoli",
      "NFT-ovi i Layer 2 rješenja",
      "Tehnička analiza",
      "Napredna sigurnost",
    ],
    recommended: false,
  },
  {
    name: "Razina 3",
    subtitle: "Strategija i regulativa",
    price: "€119",
    originalPrice: "€149",
    features: [
      "Sve iz Razine 1 i 2",
      "MiCA regulativa",
      "Investicijske strategije",
      "Exit planovi i disciplina",
      "Portfolio upravljanje",
    ],
    recommended: false,
  },
  {
    name: "Full Bundle",
    subtitle: "Sve 3 razine",
    price: "€279",
    originalPrice: "€349",
    features: [
      "Kompletni kurikulum (3 razine)",
      "Ušteda od €70",
      "Pristup svim materijalima",
      "Prioritetna mentorska podrška",
      "Certifikat o završetku",
    ],
    recommended: true,
  },
];

const PricingSection = () => (
  <section id="pricing" className="relative py-20 md:py-28">
    <div className="absolute inset-0 bg-background/30" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    <div className="container relative z-10 px-4">
      <div className="text-center mb-4">
        <span className="text-gradient font-semibold text-sm uppercase tracking-wider">Cijene</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-4">
          Odaberi svoju <span className="text-gradient">razinu</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
          Early Bird cijene vrijede do 1. travnja 2026.
        </p>
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
                <Star className="w-3.5 h-3.5 fill-current" /> PREPORUČENO
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{plan.subtitle}</p>
            </div>

            <div className="mb-6">
              <div className="flex items-end gap-2">
                <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground line-through text-sm mb-1">{plan.originalPrice}</span>
              </div>
              <span className="text-xs text-primary font-medium">Early Bird cijena</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
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
              <a href="#application">Prijavi se</a>
            </Button>
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
