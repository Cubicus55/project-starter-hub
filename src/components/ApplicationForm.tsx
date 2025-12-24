import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, Send, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [gdprAccepted, setGdprAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Prijava uspješno poslana!",
      description: "Javit ćemo vam se u roku od 48 sati.",
    });
  };

  const benefits = [
    "Lifetime pristup materijalima",
    "Certifikat po završetku",
    "Mentorstvo 1-na-1",
    "Pristup alumni mreži",
  ];

  if (isSubmitted) {
    return (
      <section id="apply" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container relative z-10 px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Hvala na prijavi!</h2>
            <p className="text-muted-foreground text-lg">
              Zaprimili smo vašu prijavu. Naš tim će pregledati vašu aplikaciju i javiti vam se u roku od 48 sati.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Prijava</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Postani dio <span className="text-gradient">Blok3 zajednice</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ispuni formu i započni svoju transformaciju u Web3 stručnjaka.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Benefits Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 p-6 rounded-2xl bg-gradient-card border border-border">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-lg">Što dobivaš</h3>
                </div>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="text-sm text-muted-foreground mb-2">Cijena programa</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-foreground">€1,499</span>
                    <span className="text-muted-foreground line-through">€1,999</span>
                  </div>
                  <p className="text-sm text-primary mt-1">Rani upis - uštedi 25%</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-gradient-card border border-border">
                <div className="grid gap-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Ime *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Vaše ime" 
                        required 
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Prezime *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Vaše prezime" 
                        required 
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="vas@email.com" 
                      required 
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+385 xx xxx xxxx" 
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Iskustvo s blockchainom</Label>
                    <Select>
                      <SelectTrigger className="bg-background border-border focus:border-primary">
                        <SelectValue placeholder="Odaberite razinu" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Početnik - tek sam čuo/la za blockchain</SelectItem>
                        <SelectItem value="intermediate">Srednja razina - koristim kripto</SelectItem>
                        <SelectItem value="advanced">Napredna - razumijem tehničke aspekte</SelectItem>
                        <SelectItem value="developer">Developer - imam iskustva s kodom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">Zašto želite pohađati Blok3 Akademiju?</Label>
                    <Textarea 
                      id="motivation" 
                      placeholder="Opišite svoju motivaciju i ciljeve..."
                      rows={4}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-start gap-3">
                      <Checkbox 
                        id="terms" 
                        checked={termsAccepted}
                        onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                        required
                        className="mt-1"
                      />
                      <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        Prihvaćam <a href="#" className="text-primary hover:underline">Uvjete poslovanja</a> *
                      </Label>
                    </div>
                    <div className="flex items-start gap-3">
                      <Checkbox 
                        id="gdpr" 
                        checked={gdprAccepted}
                        onCheckedChange={(checked) => setGdprAccepted(checked as boolean)}
                        required
                        className="mt-1"
                      />
                      <Label htmlFor="gdpr" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        Dajem privolu za obradu osobnih podataka u skladu s <a href="#" className="text-primary hover:underline">GDPR politikom</a> *
                      </Label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={isSubmitting || !termsAccepted || !gdprAccepted}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Šaljem prijavu...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Pošalji prijavu
                        <Send className="w-5 h-5" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
