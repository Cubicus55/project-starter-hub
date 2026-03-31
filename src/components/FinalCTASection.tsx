import { Button } from "@/components/ui/button";

const FinalCTASection = () => (
  <section className="relative py-24 md:py-32">
    <div className="absolute inset-0 bg-background/30" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-[600px] h-[300px] rounded-full bg-primary/10 blur-[120px]" />
    </div>
    <div className="container relative z-10 px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Spreman za <span className="text-gradient">strukturiranu kripto edukaciju</span>?
      </h2>
      <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed">
        Pridruži se polaznicima koji su već započeli svoju blockchain edukaciju.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <Button size="lg" asChild className="font-semibold px-10 py-7 text-lg">
          <a href="/checkout-sve-3-razine">Kupi kompletan program — 349 €</a>
        </Button>
        <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4">
          ili odaberi pojedinačnu razinu
        </a>
      </div>
    </div>
  </section>
);

export default FinalCTASection;
