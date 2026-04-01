import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Trebam li ikakvo predznanje?",
    a: "Ne! Razina 1 je dizajnirana za potpune početnike. Vodimo te od samih osnova — što je blockchain, kako funkcionira Bitcoin i kako sigurno čuvati kriptovalute.",
  },
  {
    q: "Što dobijem kupnjom?",
    a: "Doživotan pristup svim video modulima odabrane razine, kvizove za provjeru znanja i mjesečne live pozive s predavačima.",
  },
  {
    q: "Mogu li kupiti samo jednu razinu?",
    a: "Da, svaka razina se može kupiti zasebno. Ako želiš sve, Bundle opcija nudi kompletan program po povoljnijoj cijeni.",
  },
  {
    q: "Koliko traje program?",
    a: "Svaka razina ima 5-7 video modula koje možeš proći u 2-4 tjedna, ali nema vremenskog ograničenja — uči vlastitim tempom.",
  },
  {
    q: "Nudite li online grupne i 1 na 1 konzultacije?",
    a: "Da! Nudimo i grupne i individualne online konzultacije. Kontaktirajte nas direktno pa ćemo dogovoriti najbolju opciju za vas.",
  },
  {
    q: "Je li sadržaj na hrvatskom?",
    a: "Da, sav sadržaj je u potpunosti na hrvatskom jeziku — moduli, kvizovi i live pozivi.",
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
