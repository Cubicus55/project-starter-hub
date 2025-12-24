import { Linkedin, Twitter, Globe } from "lucide-react";

const InstructorsSection = () => {
  const instructors = [
    {
      name: "Dr. Marko Horvat",
      role: "Blockchain Arhitekt",
      bio: "15+ godina iskustva u softveru. Vodio razvoj blockchain rješenja za Fortune 500 kompanije.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      socials: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Ana Petković",
      role: "DeFi Stručnjakinja",
      bio: "Bivša voditeljica proizvoda u Aave protokolu. Specijalizacija za decentralizirane financije.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
      socials: { linkedin: "#", twitter: "#", website: "#" },
    },
    {
      name: "Ivan Marić",
      role: "Smart Contract Developer",
      bio: "Solidity developer s 5+ godina iskustva. Sudjelovao u auditu 50+ smart contracta.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      socials: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Lana Tomić",
      role: "Web3 Product Manager",
      bio: "Vodila razvoj NFT platformi i metaverse projekata. Ex-ConsenSys.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      socials: { linkedin: "#", website: "#" },
    },
  ];

  return (
    <section id="instructors" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-glow)' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Predavači</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Uči od <span className="text-gradient">najboljih u industriji</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Naši predavači su praktičari s godinama iskustva u blockchain industriji.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-gradient-card border border-border card-hover"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-primary text-sm font-medium">{instructor.role}</span>
                <h3 className="text-xl font-bold text-foreground mt-1">{instructor.name}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {instructor.bio}
                </p>

                {/* Socials */}
                <div className="flex gap-3 mt-4">
                  {instructor.socials.linkedin && (
                    <a 
                      href={instructor.socials.linkedin}
                      className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {instructor.socials.twitter && (
                    <a 
                      href={instructor.socials.twitter}
                      className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {instructor.socials.website && (
                    <a 
                      href={instructor.socials.website}
                      className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
