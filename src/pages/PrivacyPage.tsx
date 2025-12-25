import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Politika privatnosti</h1>
          <p className="text-muted-foreground mb-6">Posljednje ažuriranje: 25. prosinca 2024.</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Voditelj obrade podataka</h2>
              <p className="text-muted-foreground leading-relaxed">
                Voditelj obrade vaših osobnih podataka je Blok3 Akademija d.o.o., Ulica blockchain tehnologije 42, 
                10000 Zagreb, OIB: 12345678901. Za sva pitanja vezana uz obradu osobnih podataka možete nas 
                kontaktirati na: privacy@blok3.academy
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Koje podatke prikupljamo</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Prikupljamo sljedeće kategorije osobnih podataka:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li><strong>Identifikacijski podaci:</strong> ime, prezime, e-mail adresa, broj telefona</li>
                <li><strong>Podaci za račun:</strong> adresa za isporuku računa, podaci o plaćanju</li>
                <li><strong>Podaci o korištenju:</strong> informacije o vašem napretku kroz tečaj, rezultati kvizova</li>
                <li><strong>Tehnički podaci:</strong> IP adresa, vrsta preglednika, operativni sustav</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Svrha obrade podataka</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vaše osobne podatke obrađujemo u sljedeće svrhe:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Pružanje pristupa edukativnim materijalima i uslugama</li>
                <li>Obrada plaćanja i izdavanje računa</li>
                <li>Komunikacija vezana uz vašu narudžbu i korisnički račun</li>
                <li>Slanje marketinških poruka (samo uz vašu izričitu privolu)</li>
                <li>Poboljšanje naših usluga i korisničkog iskustva</li>
                <li>Ispunjavanje zakonskih obveza</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Pravna osnova za obradu</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podatke obrađujemo temeljem: (a) izvršenja ugovora kojeg ste s nama sklopili kupnjom tečaja, 
                (b) vaše privole za primanje marketinških poruka, (c) naših legitimnih interesa za poboljšanje 
                usluga i (d) ispunjavanja zakonskih obveza (npr. čuvanje računovodstvene dokumentacije).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Dijeljenje podataka</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vaše podatke možemo dijeliti sa sljedećim kategorijama primatelja:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li><strong>Pružatelji platnih usluga:</strong> za obradu vaših plaćanja</li>
                <li><strong>Pružatelji usluga e-pošte:</strong> za slanje transakcijskih i marketinških poruka</li>
                <li><strong>Pružatelji hosting usluga:</strong> za pohranu podataka na sigurnim serverima</li>
                <li><strong>Državna tijela:</strong> kada to zahtijeva zakon</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Svi naši partneri obvezani su čuvati povjerljivost vaših podataka i koristiti ih isključivo 
                u svrhe za koje su im povjereni.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Vrijeme čuvanja podataka</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vaše osobne podatke čuvamo onoliko dugo koliko je potrebno za ispunjenje svrha za koje su 
                prikupljeni. Računovodstvenu dokumentaciju čuvamo 11 godina sukladno zakonskim propisima. 
                Marketinške privole čuvamo do povlačenja privole.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Vaša prava</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sukladno Općoj uredbi o zaštiti podataka (GDPR), imate sljedeća prava:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li><strong>Pravo pristupa:</strong> možete zatražiti kopiju svojih osobnih podataka</li>
                <li><strong>Pravo na ispravak:</strong> možete zatražiti ispravak netočnih podataka</li>
                <li><strong>Pravo na brisanje:</strong> možete zatražiti brisanje svojih podataka</li>
                <li><strong>Pravo na ograničenje obrade:</strong> možete zatražiti ograničenje obrade</li>
                <li><strong>Pravo na prenosivost:</strong> možete zatražiti prijenos podataka drugom voditelju</li>
                <li><strong>Pravo na prigovor:</strong> možete uložiti prigovor na obradu</li>
                <li><strong>Pravo na povlačenje privole:</strong> možete povući privolu u bilo kojem trenutku</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Za ostvarivanje svojih prava, kontaktirajte nas na: privacy@blok3.academy
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Sigurnost podataka</h2>
              <p className="text-muted-foreground leading-relaxed">
                Primjenjujemo odgovarajuće tehničke i organizacijske mjere za zaštitu vaših osobnih podataka 
                od neovlaštenog pristupa, gubitka ili uništenja. To uključuje enkripciju podataka, 
                sigurne servere i redovite sigurnosne provjere.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Pritužbe</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ako smatrate da je obrada vaših osobnih podataka u suprotnosti s GDPR-om, imate pravo 
                podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP), Selska cesta 136, 
                10000 Zagreb, www.azop.hr.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Kontakt</h2>
              <p className="text-muted-foreground leading-relaxed">
                Za sva pitanja vezana uz ovu Politiku privatnosti, obratite nam se na:
              </p>
              <ul className="text-muted-foreground mt-2 space-y-1">
                <li>Email: privacy@blok3.academy</li>
                <li>Telefon: +385 1 234 5678</li>
                <li>Adresa: Ulica blockchain tehnologije 42, 10000 Zagreb</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
