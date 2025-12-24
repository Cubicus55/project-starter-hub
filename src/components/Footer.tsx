import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">B3</span>
              </div>
              <span className="font-bold text-xl text-foreground">Blok3 Akademija</span>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Vodeći program za blockchain i Web3 edukaciju u regiji. Pripremamo te za budućnost digitalne ekonomije.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors">Discord</a>
              <a href="#" className="hover:text-primary transition-colors">YouTube</a>
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
                info@blok3.academy
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +385 1 234 5678
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                Zagreb, Hrvatska
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Blok3 Akademija. Sva prava pridržana.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Uvjeti korištenja</a>
            <a href="#" className="hover:text-primary transition-colors">Privatnost</a>
            <a href="#" className="hover:text-primary transition-colors">Kolačići</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
