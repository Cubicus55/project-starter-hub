import { Linkedin, Youtube } from "lucide-react";

const instructors = [
  {
    name: "Vedran Mijatović",
    project: "MOJ KRIPTO",
    description:
      "Vedran Mijatović je kriptoanalitičar i osnivač YouTube kanala \"MojKripto\" kroz koji tisućama pratitelja približava svijet digitalne imovine i WEB3 tehnologije. Također Vedran je edukator i čest gost raznih kripto radionica u Hrvatskoj i regiji.",
    image: "https://i.imgur.com/KcaQ85e.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/vedran-mijatovic/",
      youtube: "https://www.youtube.com/@mojkripto",
    },
  },
  {
    name: "Veljko Skenderija",
    project: "CRYPTOVERSE",
    description:
      "Veljko Skenderija novinarstvom se bavi 20+ godina. S političkih migrirao na (makro)ekonomske teme a već neko vrijeme u fokusu interesa mu je svijet kripta i blockchaina. Osnivač YouTube kanala Cryptoverse te urednik i voditelj istoimene televizijske emisije.",
    image: "https://i.imgur.com/XFLp1RE.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/veljko-skenderija-23b058137/",
      youtube: "https://www.youtube.com/@cryptoverse2022",
    },
  },
  {
    name: "Dean Rogulja",
    project: "KRIPTO EVOLUCIJA",
    description:
      "Dean Rogulja je ekonomist s više od deset godina iskustva u bankarskom sektoru. Kriptovalute i blockchain tehnologiju prati jednako dugo, a svoje iskustvo i razumijevanje tržišta dijeli kroz YouTube kanal Kripto Evolucija, čiji je osnivač.",
    image: "https://i.imgur.com/ixQtwgz.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/dean-valentine-rogulja-560a122a3/",
      youtube: "https://www.youtube.com/@KriptoEvolucija",
    },
  },
];

const InstructorsSection = () => {
  return (
    <section id="instructors" className="relative py-20 md:py-32 overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container relative z-10 px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-gradient font-semibold text-sm uppercase tracking-wider">Predavači</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 mb-4 md:mb-6">
            Tvoji mentori kroz <span className="text-gradient">kripto edukaciju</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg px-4">
            Naši predavači su praktičari s iskustvom u edukaciji, analizi tržišta i blockchain industriji.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 max-w-5xl mx-auto">
          {instructors.map((instructor, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_30px_hsl(199_89%_48%/0.15)]">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                {instructor.name}
              </h3>
              <span className="text-primary text-xs md:text-sm font-semibold uppercase tracking-widest mb-4">
                {instructor.project}
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-5">
                {instructor.description}
              </p>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => window.open(instructor.socials.linkedin, "_blank", "noopener,noreferrer")}
                  className="w-9 h-9 rounded-full bg-secondary/80 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => window.open(instructor.socials.youtube, "_blank", "noopener,noreferrer")}
                  className="w-9 h-9 rounded-full bg-secondary/80 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer"
                >
                  <Youtube className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
