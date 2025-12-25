import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Politika kolačića</h1>
          <p className="text-muted-foreground mb-6">Posljednje ažuriranje: 25. prosinca 2024.</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Što su kolačići?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kolačići (cookies) su male tekstualne datoteke koje web stranice pohranjuju na vaš uređaj 
                (računalo, tablet, mobitel) prilikom posjete. Oni omogućuju web stranici da "zapamti" 
                vaše radnje i postavke tijekom određenog vremenskog razdoblja, tako da ih ne morate 
                ponovno unositi svaki put kada posjetite stranicu ili prelazite s jedne stranice na drugu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Koje kolačiće koristimo</h2>
              
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Nužni kolačići</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Ovi kolačići su potrebni za funkcioniranje web stranice i ne mogu se isključiti.
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                    <li>Kolačići sesije - za održavanje vaše prijave</li>
                    <li>Sigurnosni kolačići - za zaštitu od napada</li>
                    <li>Kolačići pristanka - za pohranu vaših preferencija kolačića</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Analitički kolačići</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Ovi kolačići nam pomažu razumjeti kako posjetitelji koriste našu stranicu.
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                    <li>Google Analytics - za analizu prometa i ponašanja korisnika</li>
                    <li>Hotjar - za analizu korisničkog iskustva</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Marketinški kolačići</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Ovi kolačići koriste se za prikazivanje relevantnih oglasa.
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                    <li>Facebook Pixel - za mjerenje učinkovitosti oglasa</li>
                    <li>Google Ads - za remarketing i ciljane oglase</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Upravljanje kolačićima</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prilikom prvog posjeta našoj stranici, prikazat će vam se banner za pristanak na kolačiće. 
                Možete prihvatiti sve kolačiće, odbiti one koji nisu nužni ili prilagoditi svoje postavke.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Također možete upravljati kolačićima kroz postavke svog preglednika:
              </p>
              <ul className="text-muted-foreground mt-2 space-y-2 list-disc list-inside">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/hr/kb/kolacici" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/hr-hr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/hr-hr/microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Kolačići trećih strana</h2>
              <p className="text-muted-foreground leading-relaxed">
                Naša stranica može sadržavati sadržaj trećih strana (npr. YouTube videozapisi, društvene mreže) 
                koji mogu postaviti vlastite kolačiće. Nemamo kontrolu nad tim kolačićima i preporučujemo 
                da provjerite politike privatnosti tih trećih strana.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Vrijeme čuvanja kolačića</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kolačići sesije brišu se kada zatvorite preglednik. Trajni kolačići ostaju na vašem 
                uređaju do isteka roka valjanosti ili dok ih ručno ne izbrišete. Analitički i marketinški 
                kolačići obično traju od 30 dana do 2 godine.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Promjene politike kolačića</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ova politika kolačića može se povremeno ažurirati. Sve promjene bit će objavljene na ovoj 
                stranici s ažuriranim datumom. Preporučujemo da povremeno provjerite ovu stranicu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Kontakt</h2>
              <p className="text-muted-foreground leading-relaxed">
                Za sva pitanja vezana uz kolačiće, obratite nam se na:
              </p>
              <ul className="text-muted-foreground mt-2 space-y-1">
                <li>Email: privacy@blok3.academy</li>
                <li>Telefon: +385 1 234 5678</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePage;
