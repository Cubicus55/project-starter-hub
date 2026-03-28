const steps = [
  {
    number: "01",
    title: "Odaberi razinu",
    description: "Pregledaj sadržaj i odaberi razinu koja odgovara tvom znanju — ili uzmi sve tri.",
  },
  {
    number: "02",
    title: "Dovrši kupnju",
    description: "Jednostavan i siguran proces plaćanja. Bez pretplate, bez skrivenih troškova.",
  },
  {
    number: "03",
    title: "Dobij pristup i kreni učiti",
    description: "Nakon kupnje dobivaš pristup svim materijalima i možeš odmah krenuti učiti.",
  },
];

const HowItWorksSection = () => (
  <section className="relative py-20 md:py-28">
    <div className="absolute inset-0 bg-background/30" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    <div className="container relative z-10 px-4">
      <div className="text-center mb-14">
        <span className="text-gradient font-semibold text-sm uppercase tracking-wider">Kako funkcionira</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-4">
          Tri jednostavna <span className="text-gradient">koraka</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-5xl font-extrabold text-gradient mb-4">{s.number}</div>
            <h3 className="font-semibold text-lg text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
