import { Link } from "react-router-dom";
import { Mail, MapPin, AlertTriangle } from "lucide-react";
import blok3Logo from "@/assets/blok3-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="mb-4">
              <img src={blok3Logo} alt="Blok3 Logo" className="h-12 w-auto" />
            </div>
            <p className="text-muted-foreground max-w-md mb-6 text-sm md:text-base">
              Vodeći program za blockchain i Web3 edukaciju u regiji. Pripremamo te za budućnost digitalne ekonomije.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-muted-foreground">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Discord</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">YouTube</a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Navigacija</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">Početna</a></li>
              <li><a href="#curriculum" className="text-muted-foreground hover:text-primary transition-colors">Kurikulum</a></li>
              <li><a href="#instructors" className="text-muted-foreground hover:text-primary transition-colors">Predavači</a></li>
              <li><a href="#apply" className="text-muted-foreground hover:text-primary transition-colors">Prijava</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                info@blok3.eu
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                Petrinja, Hrvatska
              </li>
            </ul>
          </div>
        </div>

        {/* NFA Disclaimer */}
        <div className="mt-8 md:mt-12 p-4 md:p-6 rounded-xl bg-destructive/10 border border-destructive/20">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">Odricanje od odgovornosti (NFA)</h4>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Sadržaj Blok3 edukacije je isključivo edukativne prirode i ne predstavlja financijski, investicijski ili pravni savjet. 
                Nismo registrirani financijski savjetnici. Investiranje u kriptovalute nosi značajan rizik gubitka kapitala. 
                Savjetujte se s licenciranim financijskim savjetnikom prije donošenja investicijskih odluka.
              </p>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-xs md:text-sm text-muted-foreground">
              <p className="font-semibold text-foreground mb-2">Podaci o obrtu</p>
              <p>DIGITALNA EVOLUCIJA, obrt za savjetovanje i edukaciju</p>
              <p>vl. Dean Valentine Rogulja</p>
              <p>Petrinja, Brezje 14</p>
              <p className="mt-2">
                <span className="text-foreground">OIB:</span> 00000000
              </p>
              <p>
                <span className="text-foreground">Matični broj obrta:</span> 98665634
              </p>
              <p>
                <span className="text-foreground">Broj obrtnice:</span> 03010301574
              </p>
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">
              <p className="font-semibold text-foreground mb-2">Informacije o plaćanju</p>
              <p>Sve cijene su izražene u EUR i uključuju PDV.</p>
              <p className="mt-2">
                <span className="text-foreground">IBAN:</span> HR5924070001100672541
              </p>
              <p>
                <span className="text-foreground">Poslovna banka:</span> OTP Banka d.d.
              </p>
              <p className="mt-2 text-xs">
                Za svaku uplatu izdaje se fiskalizirani račun u skladu sa Zakonom o fiskalizaciji.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="mt-6 md:mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} DIGITALNA EVOLUCIJA. Sva prava pridržana.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
            <Link to="/uvjeti-poslovanja" className="hover:text-primary transition-colors">
              Uvjeti poslovanja
            </Link>
            <Link to="/politika-privatnosti" className="hover:text-primary transition-colors">
              Politika privatnosti
            </Link>
            <Link to="/politika-kolacica" className="hover:text-primary transition-colors">
              Politika kolačića
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
