import { Button } from "@/components/ui/button";
import { Check, CreditCard, Lock, ShieldCheck } from "lucide-react";
import blok3Logo from "@/assets/blok3-logo.svg";
import { Link, useNavigate } from "react-router-dom";

interface CheckoutLayoutProps {
  name: string;
  subtitle: string;
  price: string;
  features: string[];
}

const CheckoutLayout = ({ name, subtitle, price, features }: CheckoutLayoutProps) => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/hvala-na-kupnji");
  };

  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/images/pozadina.jpg')`, backgroundPosition: 'center 40%' }} />
      <div className="fixed inset-0 bg-background/80" />

      <div className="relative z-10">
        <header className="border-b border-border/50 bg-background/60 backdrop-blur-md">
          <div className="container px-4 py-4 flex items-center justify-between">
            <Link to="/">
              <img src={blok3Logo} alt="Blok3" className="h-8 w-auto" />
            </Link>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Lock className="w-3.5 h-3.5" />
              <span>Sigurna transakcija</span>
            </div>
          </div>
        </header>

        <main className="container px-4 py-12 md:py-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Dovrši kupnju</h1>
            <p className="text-muted-foreground">Još samo jedan korak do pristupa edukaciji.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3 space-y-8">
                <div className="rounded-2xl border border-border bg-gradient-card p-6">
                  <h2 className="text-lg font-semibold text-foreground mb-5">Podaci o kupcu</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-muted-foreground mb-1.5">Ime i prezime</label>
                      <input type="text" placeholder="Ivan Horvat" className="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/50 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-1.5">Email adresa</label>
                      <input type="email" placeholder="ivan@email.com" className="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/50 transition-colors" />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-gradient-card p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <h2 className="text-lg font-semibold text-foreground">Plaćanje karticom</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-muted-foreground mb-1.5">Broj kartice</label>
                      <input type="text" placeholder="4242 4242 4242 4242" className="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/50 transition-colors font-mono tracking-wider" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1.5">Datum isteka</label>
                        <input type="text" placeholder="MM / GG" className="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/50 transition-colors font-mono" />
                      </div>
                      <div>
                        <label className="block text-sm text-muted-foreground mb-1.5">CVC</label>
                        <input type="text" placeholder="123" className="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/50 transition-colors font-mono" />
                      </div>
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full py-7 text-lg font-semibold md:hidden">
                  Plati i otključaj pristup
                </Button>
              </div>

              <div className="md:col-span-2">
                <div className="rounded-2xl border border-primary/30 bg-gradient-card p-6 sticky top-8">
                  <h2 className="text-lg font-semibold text-foreground mb-1">{name}</h2>
                  <p className="text-sm text-muted-foreground mb-5">{subtitle}</p>

                  <div className="border-t border-border pt-4 mb-5">
                    <ul className="space-y-2.5">
                      {features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-border pt-4 flex items-end justify-between">
                    <span className="text-sm text-muted-foreground">Ukupno</span>
                    <span className="text-3xl font-extrabold text-foreground">{price}</span>
                  </div>

                  <Button type="submit" size="lg" className="w-full py-7 text-lg font-semibold mt-6 hidden md:flex">
                    Plati i otključaj pristup
                  </Button>

                  <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                    <ShieldCheck className="w-4 h-4" />
                    <span>100% sigurna transakcija</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default CheckoutLayout;
