import { useState } from "react";
import { Linkedin, Youtube, ExternalLink, X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import vedranImg from "@/assets/vedran.png";
import veljkoImg from "@/assets/veljko.png";
import deanImg from "@/assets/dean.png";

const InstructorsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const instructors = [
    {
      name: "Vedran Mijatović",
      project: "Moj Kripto",
      role: "Blockchain Edukator",
      bio: "Osnivač Moj Kripto platforme. Stručnjak za kripto edukaciju i blockchain tehnologiju.",
      image: vedranImg,
      socials: { 
        linkedin: "https://www.linkedin.com/in/vedran-mijatovic/",
        youtube: "https://www.youtube.com/@mojkripto"
      },
    },
    {
      name: "Veljko Skenderija",
      project: "Cryptoverse",
      role: "Kripto Analitičar",
      bio: "Voditelj Cryptoverse projekta. Specijalizacija za kripto tržišta i analizu.",
      image: veljkoImg,
      socials: { 
        linkedin: "https://www.linkedin.com/in/veljko-skenderija-23b058137/",
        youtube: "https://www.youtube.com/@cryptoverse2022"
      },
    },
    {
      name: "Dean Rogulja",
      project: "Kripto Evolucija",
      role: "Web3 Stručnjak",
      bio: "Osnivač Kripto Evolucija projekta. Ekspert za tehničku analizu i ulaganje.",
      image: deanImg,
      socials: { 
        linkedin: "https://www.linkedin.com/in/dean-valentine-rogulja-560a122a3/",
        youtube: "https://www.youtube.com/@KriptoEvolucija"
      },
    },
  ];

  return (
    <section id="instructors" className="relative py-16 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-glow)' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="text-gradient font-semibold text-sm uppercase tracking-wider">Predavači</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 mb-4 md:mb-6">
            Tvoji mentori kroz <span className="text-gradient">kripto edukaciju</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg px-4">
            Naši predavači su praktičari s godinama iskustva u blockchain industriji.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-gradient-card border border-border card-hover"
            >
              {/* Image */}
              <div 
                className="aspect-square overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(instructor.image)}
              >
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Zoom hint on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-background/80 backdrop-blur-sm rounded-full p-3">
                    <ExternalLink className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1">
                  <span className="text-primary text-xs sm:text-sm font-medium">{instructor.role}</span>
                  <span className="text-muted-foreground text-xs">•</span>
                  <span className="text-muted-foreground text-xs">{instructor.project}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">{instructor.name}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                  {instructor.bio}
                </p>

                {/* Socials */}
                <div className="flex gap-3 mt-4">
                  {instructor.socials.linkedin && (
                    <a 
                      href={instructor.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {instructor.socials.youtube && (
                    <a 
                      href={instructor.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Youtube className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors">
            <X className="h-6 w-6" />
            <span className="sr-only">Zatvori</span>
          </DialogClose>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Predavač"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default InstructorsSection;
