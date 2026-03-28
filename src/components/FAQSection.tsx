import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Trebam li ikakvo predznanje?",
    a: "Ne! Razina 1 je dizajnirana za potpune početnike. Vodimo te od samih osnova blockchaina i Bitcoina.",
  },
  {
    q: "Koliko traje program?",
    a: "Svaka razina je osmišljena da se završi u 4-6 tjedana, ali učiš vlastitim tempom — pristup materijalima je neograničen.",
  },
  {
    q: "Što ako mi ne odgovara?",
    a: "Nudimo potpuni povrat novca unutar 14 dana od kupnje, bez pitanja.",
  },
  {
    q: "Je li program dostupan na hrvatskom?",
    a: "Da, sav sadržaj je u potpunosti na hrvatskom jeziku.",
  },
  {
    q: "Kako izgleda Bundle ponuda?",
    a: "Full Bundle uključuje sve tri razine po povlaštenoj cijeni s uštedom od €70, prioritetnu mentorsku podršku i certifikat o završetku.",
  },
  {
    q: "Mogu li koristiti program za edukaciju svog tima?",
    a: "Apsolutno! Imamo posebne B2B pakete za tvrtke. Kontaktirajte nas za prilagođenu ponudu.",
  },
];

const FAQSection = () => (
  <section className="relative py-20 md:py-28">
    <div className="absolute inset-0 bg-background/30" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    <div className="container relative z-10 px-4">
      <div className="text-center mb-14">
        <span className="text-gradient font-semibold text-sm uppercase tracking-wider">FAQ</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-4">
          Česta <span className="text-gradient">pitanja</span>
        </h2>
      </div>
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-xl px-5 bg-gradient-card"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-5 text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
