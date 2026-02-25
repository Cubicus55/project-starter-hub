import { Building2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const B2BSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Semi-transparent overlay for section separation */}
      <div className="absolute inset-0 bg-background/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-card border border-border relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Za tvrtke i organizacije
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Osim individualnih tečajeva, nudimo prilagođene radionice i predavanja uživo za tvrtke i organizacije. Edukaciju oblikujemo prema vašim specifičnim potrebama – od temeljnih koncepata blockchain tehnologije za zaposlenike do naprednih tema za voditelje, donositelje odluka i strateški razvoj.
                </p>
              </div>
              
              <div className="flex-shrink-0 w-full md:w-auto">
                <Button 
                  size="lg"
                  className="w-full md:w-auto font-semibold"
                  asChild
                >
                  <a href="mailto:info@blok3.hr">
                    <Mail className="w-5 h-5 mr-2" />
                    Kontaktiraj nas
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BSection;
