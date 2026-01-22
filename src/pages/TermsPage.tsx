import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Uvjeti poslovanja</h1>
          <p className="text-muted-foreground mb-6">Posljednje ažuriranje: 25. prosinca 2024.</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Opće odredbe</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ovi Uvjeti poslovanja reguliraju odnos između obrta DIGITALNA EVOLUCIJA (u daljnjem tekstu: "Pružatelj usluge") 
                i korisnika koji pristupaju našim edukativnim programima i uslugama. Korištenjem naše web stranice i usluga, 
                prihvaćate ove Uvjete poslovanja u cijelosti.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Pružatelj usluge: DIGITALNA EVOLUCIJA, obrt za savjetovanje i edukaciju, vl. Dean Valentine Rogulja, 
                Petrinja, Brezje 14, OIB: 00000000, Matični broj obrta: 98665634, Broj obrtnice: 03010301574.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Opis usluga</h2>
              <p className="text-muted-foreground leading-relaxed">
                Blok3 pruža online edukativne programe iz područja blockchain tehnologije, kriptovaluta i 
                decentraliziranih financija (DeFi). Naši programi uključuju video materijale, pisane resurse, 
                interaktivne kvizove i pristup zajednici.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Kupnja i plaćanje</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sve cijene na našoj stranici izražene su u EUR i uključuju PDV. Plaćanje je moguće putem 
                transakcijskog računa ili kreditnih/debitnih kartica (Visa, Mastercard). Za svaku izvršenu 
                transakciju izdaje se fiskalizirani račun u skladu sa zakonskim propisima Republike Hrvatske.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Pravo na odustanak i povrat</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sukladno Zakonu o zaštiti potrošača, imate pravo odustati od ugovora bez navođenja razloga u roku 
                od 14 dana od dana sklapanja ugovora. Međutim, u skladu s člankom 79. stavkom 1. točkom 13. istog zakona, 
                pravo na odustanak ne primjenjuje se na ugovore o isporuci digitalnog sadržaja koji se ne isporučuje 
                na materijalnom nosaču ako je ispunjenje ugovora započelo uz izričitu prethodnu suglasnost potrošača.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Drugim riječima, nakon što pristupite edukativnim materijalima i započnete s gledanjem sadržaja, 
                pravo na povrat novca prestaje. Preporučujemo da pažljivo pregledate opis programa prije kupnje.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intelektualno vlasništvo</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sav sadržaj dostupan kroz naše edukativne programe, uključujući video materijale, tekstove, 
                grafike i druge resurse, zaštićen je autorskim pravima i ostaje u vlasništvu DIGITALNA EVOLUCIJA obrta. 
                Neovlašteno kopiranje, distribucija ili dijeljenje materijala strogo je zabranjeno.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Odricanje od odgovornosti</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sadržaj naših edukativnih programa isključivo je informativne i edukativne prirode. Ne pružamo 
                financijske, investicijske niti pravne savjete. Investiranje u kriptovalute i blockchain projekte 
                nosi značajan rizik gubitka kapitala. Blok3 ne snosi odgovornost za financijske gubitke 
                nastale primjenom stečenog znanja.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Reklamacije</h2>
              <p className="text-muted-foreground leading-relaxed">
                U slučaju tehničkih problema s pristupom materijalima ili drugih nedostataka usluge, 
                korisnik može podnijeti reklamaciju putem e-maila: info@blok3.eu. Obvezujemo se 
                odgovoriti na svaku reklamaciju u roku od 15 radnih dana.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Rješavanje sporova</h2>
              <p className="text-muted-foreground leading-relaxed">
                Za sve sporove koji proizlaze iz ovih Uvjeta poslovanja nastojat ćemo pronaći mirno rješenje. 
                Ukoliko to nije moguće, nadležan je stvarno nadležni sud u Zagrebu. Za online rješavanje sporova 
                možete koristiti platformu Europske komisije: https://ec.europa.eu/consumers/odr
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Kontakt</h2>
              <p className="text-muted-foreground leading-relaxed">
                Za sva pitanja vezana uz ove Uvjete poslovanja, obratite nam se na:
              </p>
              <ul className="text-muted-foreground mt-2 space-y-1">
                <li>Email: info@blok3.eu</li>
                <li>Telefon: +385 98 229 311</li>
                <li>Adresa: Petrinja, Brezje 14</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
