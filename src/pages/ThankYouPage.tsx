import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import blok3Logo from "@/assets/blok3-logo.svg";
import { Link } from "react-router-dom";

const ThankYouPage = () => (
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
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Hvala ti!</h1>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Tvoja prijava je zaprimljena. Na email adresu ćeš uskoro primiti sve informacije o pristupu edukaciji.
        </p>
        <Button size="lg" asChild className="font-semibold px-10 py-6 text-base">
          <Link to="/">Natrag na početnu</Link>
        </Button>
      </div>
    </div>
  </div>
);

export default ThankYouPage;
