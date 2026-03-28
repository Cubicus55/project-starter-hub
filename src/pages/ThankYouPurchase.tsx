import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, Clock, Award } from "lucide-react";
import blok3Logo from "@/assets/blok3-logo.svg";
import { Link } from "react-router-dom";

const steps = [
  { icon: Mail, text: "Upute za pristup dolaze na email" },
  { icon: Clock, text: "Sadržaj možeš pratiti svojim tempom" },
  { icon: Award, text: "Po završetku dobivaš potvrdu / certifikat" },
];

const ThankYouPurchase = () => (
  <div className="min-h-screen bg-background relative">
    <div className="fixed inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/images/pozadina.jpg')`, backgroundPosition: 'center 40%' }} />
    <div className="fixed inset-0 bg-background/80" />

    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
      <Link to="/" className="mb-10">
        <img src={blok3Logo} alt="Blok3" className="h-10 w-auto" />
      </Link>

      <div className="rounded-2xl border border-primary/30 bg-gradient-card p-10 md:p-14 max-w-lg text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Hvala na kupnji!</h1>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Tvoja kupnja je uspješno zaprimljena.
        </p>

        <div className="space-y-4 mb-10 text-left">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <step.icon className="w-4 h-4 text-primary" />
              </div>
              {step.text}
            </div>
          ))}
        </div>

        <Button size="lg" asChild className="font-semibold px-10 py-6 text-base">
          <Link to="/">Povratak na Blok3</Link>
        </Button>
      </div>
    </div>
  </div>
);

export default ThankYouPurchase;
