import blok3Logo from "@/assets/blok3-logo.svg";
import { Download } from "lucide-react";

const curriculum = [
  {
    level: "Level 1",
    subtitle: "Foundations",
    color: "#0d9ee0",
    modules: [
      { code: "1.1", title: "Ethos & History of Bitcoin", outcome: "Understand Bitcoin's origin, Satoshi Nakamoto, and core properties of digital money." },
      { code: "1.2", title: "Blockchain & Crypto Types", outcome: "Distinguish Bitcoin, Ethereum, newer networks and learn about coins, tokens, and stablecoins." },
      { code: "1.3", title: "Security & Self-Custody", outcome: "Master self-custody, understand CEX vs. wallets, and adopt core security principles." },
      { code: "1.4", title: "Legal & Tax Framework", outcome: "Navigate Croatian tax rules and EU MiCA regulation basics." },
      { code: "1.5", title: "Introduction to Technical Analysis", outcome: "Read charts through context, structure, and timeframes — make rational decisions without relying on signals." },
      { code: "1.6", title: "FIAT On-ramp & Off-ramp", outcome: "Understand how fiat enters and exits the crypto ecosystem for full capital control." },
      { code: "1.7", title: "Practical Workshop: MetaMask", outcome: "Install and use a wallet, manage multiple networks, send/receive tokens, and secure a seed phrase." },
    ],
  },
  {
    level: "Level 2",
    subtitle: "Active Participation",
    color: "#6ee7b7",
    modules: [
      { code: "2.1", title: "Ethereum & Layer 2 Solutions", outcome: "Understand network evolution, smart contracts, dApps, and Layer 2 scaling." },
      { code: "2.2", title: "Mining & Halving Cycles", outcome: "Grasp Bitcoin mining, four-year halving cycles, and their impact on price and market dynamics." },
      { code: "2.3", title: "Tokenomics — Reading Supply Before Buying", outcome: "Understand how supply, distribution, and unlocks affect investment risk." },
      { code: "2.4", title: "Technical Analysis for Investors", outcome: "Build an investor decision-making process through top-down context, structure, cycle, momentum, and invalidation." },
      { code: "2.5", title: "Categories & Trends", outcome: "Explore DeFi, RWA, NFTs, Metaverse, AI agents, ZK privacy, DePIN, and DeSci trends." },
      { code: "2.6", title: "Crypto Culture & Slang", outcome: "Master community vocabulary (FOMO, FUD, HODL, Whale) for seamless participation in the ecosystem." },
    ],
  },
  {
    level: "Level 3",
    subtitle: "Advanced User",
    color: "#a78bfa",
    modules: [
      { code: "3.1", title: "DeFi Architecture", outcome: "Deep-dive into AMM algorithms, yield farming, looping strategies, and Impermanent Loss mitigation." },
      { code: "3.2", title: "Cross-Chain Communication (Bridging)", outcome: "Understand and safely execute cross-chain bridging in practice." },
      { code: "3.3", title: "AI & Crypto Synergy", outcome: "Analyze AI×blockchain projects and identify real AI tool use cases in crypto." },
      { code: "3.4", title: "Advanced Security & Scam Defence", outcome: "Recognize phishing, social engineering, and honeypots; use smart contract auditing tools." },
      { code: "3.5", title: "Global Regulation & Institutions", outcome: "Understand SEC impact, commodity vs. security distinction, ETFs, and institutional adoption." },
      { code: "3.6", title: "Regulatory Systems: MiCA, US & Region", outcome: "Compare EU MiCA and the US approach, with a clear view of crypto legal status in the Western Balkans." },
      { code: "3.7", title: "The Ready Investor", outcome: "Build a stable investment framework connecting exposure management, exit planning, and emotional discipline." },
    ],
  },
];

const PitchDeck = () => {
  return (
    <div className="pitch-deck-root bg-white text-[#0f172a] font-sans">

      {/* Print button — hidden in print */}
      <div className="no-print fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-5 py-3 rounded-full text-white text-sm font-semibold shadow-xl"
          style={{ background: "linear-gradient(90deg,#333aed,#0d9ee0)" }}
        >
          <Download size={16} />
          Save as PDF
        </button>
      </div>

      {/* ───────── SLIDE 1 – COVER ───────── */}
      <section className="pitch-page relative flex flex-col justify-between overflow-hidden"
        style={{ background: "linear-gradient(145deg,#0c1324 0%,#091929 100%)" }}>

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(13,158,224,0.6) 1px, transparent 1px),
                              linear-gradient(90deg,rgba(13,158,224,0.6) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }} />

        {/* Glow blobs */}
        <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle,#333aed,transparent 70%)" }} />
        <div className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle,#0d9ee0,transparent 70%)" }} />

        <div className="relative z-10 flex flex-col justify-center items-start h-full px-16 py-16 gap-8">
          <img src={blok3Logo} alt="Blok3" className="h-14 w-auto" />

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4"
              style={{ color: "#0d9ee0" }}>
              Partnership Deck · 2025
            </p>
            <h1 className="text-5xl font-extrabold leading-tight text-white mb-4">
              The Only Structured<br />
              <span style={{
                backgroundImage: "linear-gradient(90deg,#333aed,#0d9ee0,#6ee7b7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Blockchain &amp; Crypto<br />
                Education Platform
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              A rare opportunity to reach a captive audience of crypto-curious retail users and forward-thinking companies — before they've formed brand loyalties.
            </p>
          </div>

          <div className="flex gap-6 mt-2">
            {[
              { num: "19", label: "Structured Modules" },
              { num: "3", label: "Proficiency Levels" },
              { num: "B2C + B2B", label: "Dual Audience" },
            ].map(s => (
              <div key={s.label} className="flex flex-col">
                <span className="text-3xl font-extrabold text-white">{s.num}</span>
                <span className="text-xs text-slate-400 mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 px-16 py-5 border-t border-white/10">
          <p className="text-xs text-slate-500">blok3.hr · contact@blok3.hr</p>
        </div>
      </section>

      {/* ───────── SLIDE 2 – THE OPPORTUNITY ───────── */}
      <section className="pitch-page flex flex-col justify-between bg-white">
        <div className="px-16 py-14 flex flex-col gap-10 flex-1">
          <PageHeader index="01" title="The Opportunity" accent="#333aed" />

          <div className="grid grid-cols-2 gap-8 flex-1">
            <div className="flex flex-col gap-6">
              <p className="text-base text-slate-600 leading-relaxed">
                The global crypto market is growing fast — but most newcomers enter <strong className="text-slate-900">without any real education</strong>. They follow influencers, fall for scams, and exit frustrated.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Blok3 solves this with a <strong className="text-slate-900">structured, progression-based curriculum</strong> — the first of its kind in the Croatian and regional market — covering everything from Bitcoin history and self-custody to DeFi architecture, MiCA regulation, and investor psychology.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Our students don't just hear about crypto. They <strong className="text-slate-900">understand it, trust it, and use it</strong> — making them the most valuable audience for any exchange or crypto-native business.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { icon: "📈", title: "High-Intent Audience", desc: "Students actively looking to buy, trade, and explore the ecosystem." },
                { icon: "🎓", title: "Education = Trust", desc: "Users who learn through us associate quality brands with quality education." },
                { icon: "🌍", title: "Regional First-Mover", desc: "No structured competitor exists in Croatia, Bosnia, Slovenia, or Serbia." },
                { icon: "🏢", title: "B2B Pipeline", desc: "We train company teams — direct line to institutional and SME crypto adoption." },
              ].map(item => (
                <div key={item.title} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <SlideFooter page={2} />
      </section>

      {/* ───────── SLIDE 3 – WHAT IS BLOK3 ───────── */}
      <section className="pitch-page flex flex-col justify-between"
        style={{ background: "#f8faff" }}>
        <div className="px-16 py-14 flex flex-col gap-10 flex-1">
          <PageHeader index="02" title="What is Blok3?" accent="#0d9ee0" />

          <div className="grid grid-cols-3 gap-6">
            {[
              {
                icon: "🎬",
                title: "Video-First Learning",
                desc: "All 19 modules are delivered as professionally produced video content — accessible anytime, at the learner's own pace.",
              },
              {
                icon: "📡",
                title: "Live Calls & Q&A",
                desc: "Students join regular live sessions with instructors for real-time guidance, market discussion, and questions.",
              },
              {
                icon: "💬",
                title: "Telegram Community",
                desc: "A private, instructor-led Telegram group for peer learning, market alerts, and ongoing support between modules.",
              },
              {
                icon: "🏗️",
                title: "Structured Progression",
                desc: "Three proficiency levels guide users from zero knowledge to independent, confident market participants.",
              },
              {
                icon: "🏢",
                title: "Corporate Workshops",
                desc: "Tailored on-site or remote workshops for companies, teams, and organisations — from basics to compliance.",
              },
              {
                icon: "⚖️",
                title: "Regulation-Ready",
                desc: "Dedicated modules on MiCA, SEC policy, and regional regulation — essential for compliant onboarding.",
              },
            ].map(item => (
              <div key={item.title} className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col gap-3">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <p className="font-bold text-slate-900 text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-6 flex items-center gap-6"
            style={{ background: "linear-gradient(90deg,#0c1324,#0d2240)" }}>
            <div className="text-4xl">💡</div>
            <p className="text-white text-sm leading-relaxed">
              <strong>Blok3 is the only platform in the region</strong> that combines structured video curriculum, live instructor access, community, and regulatory education into a single, progressive learning journey — for both individuals and businesses.
            </p>
          </div>
        </div>
        <SlideFooter page={3} />
      </section>

      {/* ───────── SLIDE 4 – CURRICULUM OVERVIEW ───────── */}
      <section className="pitch-page flex flex-col justify-between bg-white">
        <div className="px-16 py-14 flex flex-col gap-8 flex-1">
          <PageHeader index="03" title="Curriculum Overview" accent="#6ee7b7" dark />

          <div className="flex flex-col gap-5 flex-1">
            {curriculum.map(lvl => (
              <div key={lvl.level}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-8 rounded-full" style={{ background: lvl.color }} />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: lvl.color }}>{lvl.level}</span>
                    <span className="text-sm font-semibold text-slate-700 ml-2">— {lvl.subtitle}</span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {lvl.modules.map(mod => (
                    <div key={mod.code} className="p-3 rounded-xl border border-slate-100 bg-slate-50">
                      <p className="text-[10px] font-bold uppercase tracking-wide mb-1" style={{ color: lvl.color }}>M {mod.code}</p>
                      <p className="text-xs font-semibold text-slate-800 leading-snug">{mod.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <SlideFooter page={4} />
      </section>

      {/* ───────── SLIDE 5 – OUR AUDIENCE ───────── */}
      <section className="pitch-page flex flex-col justify-between"
        style={{ background: "#f8faff" }}>
        <div className="px-16 py-14 flex flex-col gap-10 flex-1">
          <PageHeader index="04" title="Who We Reach" accent="#333aed" />

          <div className="grid grid-cols-2 gap-10 flex-1">
            {/* B2C */}
            <div className="flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold w-fit"
                style={{ background: "#eff6ff", color: "#333aed" }}>
                👤 B2C — Individual Learners
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { emoji: "🧑‍💼", desc: "Professionals aged 25–45 curious about crypto but overwhelmed by complexity" },
                  { emoji: "🛡️", desc: "People who have been burned by scams or bad decisions and want to learn properly" },
                  { emoji: "📊", desc: "Active investors looking to add crypto strategically to their portfolio" },
                  { emoji: "🌐", desc: "Crypto beginners searching for a trusted, structured starting point" },
                ].map(i => (
                  <div key={i.desc} className="flex gap-3 items-start p-3 rounded-xl bg-white border border-slate-100">
                    <span className="text-lg shrink-0">{i.emoji}</span>
                    <p className="text-xs text-slate-600">{i.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* B2B */}
            <div className="flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold w-fit"
                style={{ background: "#f0fdf4", color: "#16a34a" }}>
                🏢 B2B — Companies & Organisations
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { emoji: "🏦", desc: "Financial institutions exploring crypto products and MiCA compliance" },
                  { emoji: "💻", desc: "Tech companies onboarding Web3 tools for internal teams" },
                  { emoji: "📋", desc: "HR & L&D teams looking to upskill employees on emerging technologies" },
                  { emoji: "🤝", desc: "Management and decision-makers who need strategic crypto literacy" },
                ].map(i => (
                  <div key={i.desc} className="flex gap-3 items-start p-3 rounded-xl bg-white border border-slate-100">
                    <span className="text-lg shrink-0">{i.emoji}</span>
                    <p className="text-xs text-slate-600">{i.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <SlideFooter page={5} />
      </section>

      {/* ───────── SLIDE 6 – WHY PARTNER WITH US ───────── */}
      <section className="pitch-page flex flex-col justify-between"
        style={{ background: "linear-gradient(145deg,#0c1324 0%,#091929 100%)" }}>

        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(13,158,224,0.6) 1px, transparent 1px),
                              linear-gradient(90deg,rgba(13,158,224,0.6) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }} />

        <div className="relative z-10 px-16 py-14 flex flex-col gap-10 flex-1">
          <PageHeader index="05" title="Why Partner With Blok3?" accent="#0d9ee0" onDark />

          <div className="grid grid-cols-2 gap-6 flex-1">
            {[
              {
                icon: "🎯",
                title: "Pre-qualified, High-Intent Users",
                desc: "Our graduates are actively exploring the crypto ecosystem. They're not scrolling past ads — they're actively looking for exchanges, tools, and services to use.",
              },
              {
                icon: "🏆",
                title: "Brand Visibility at the Moment of Entry",
                desc: "Sponsoring Blok3 means your brand is the first exchange they see — before they sign up anywhere. First-mover advantage in education = lifetime loyalty.",
              },
              {
                icon: "📚",
                title: "Association with Quality Education",
                desc: "In a space filled with noise, your brand is aligned with structured, trustworthy content — rare and deeply valuable for credibility.",
              },
              {
                icon: "🌍",
                title: "Reach a New Regional Market",
                desc: "Croatia, Bosnia, Serbia, and Slovenia represent a largely untapped, regulated (MiCA-compliant) EU and Western Balkans market for exchanges.",
              },
              {
                icon: "🤝",
                title: "B2B Pipeline Access",
                desc: "Through our corporate training arm, you gain indirect exposure to company decision-makers adopting crypto — an institutional-level touchpoint.",
              },
              {
                icon: "📣",
                title: "Authentic Integration",
                desc: "We don't do banner ads. We integrate partners naturally into our curriculum, community, and live sessions — for genuine, trusted engagement.",
              },
            ].map(item => (
              <div key={item.title} className="flex gap-4 p-5 rounded-2xl border border-white/10 bg-white/5">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-white text-sm mb-1">{item.title}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SlideFooter page={6} onDark />
      </section>

      {/* ───────── SLIDE 7 – CTA ───────── */}
      <section className="pitch-page flex flex-col justify-between bg-white">
        <div className="px-16 py-14 flex flex-col flex-1 justify-between">
          <PageHeader index="06" title="Let's Start a Conversation" accent="#333aed" />

          <div className="flex flex-col items-center justify-center flex-1 gap-10 text-center">
            <div>
              <p className="text-2xl font-extrabold text-slate-900 max-w-2xl mx-auto leading-tight mb-4">
                We're not looking for transactional sponsorships. <br />
                <span style={{ color: "#0d9ee0" }}>We're building long-term partnerships</span> with brands that believe in educating the next generation of crypto users.
              </p>
              <p className="text-slate-500 text-base max-w-xl mx-auto">
                Whether you're an exchange, a wallet provider, a DeFi protocol, or any crypto-native business — if your brand benefits from educated, confident users, we should talk.
              </p>
            </div>

            <div className="flex gap-12 justify-center">
              {[
                { icon: "📧", label: "Email", value: "contact@blok3.hr" },
                { icon: "🌐", label: "Website", value: "blok3.hr" },
                { icon: "💬", label: "Telegram", value: "@blok3academy" },
              ].map(c => (
                <div key={c.label} className="flex flex-col items-center gap-1">
                  <span className="text-2xl">{c.icon}</span>
                  <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold">{c.label}</p>
                  <p className="text-sm font-bold text-slate-800">{c.value}</p>
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <img src={blok3Logo} alt="Blok3" className="h-10 w-auto opacity-40 invert" />
          </div>

          <SlideFooter page={7} />
        </div>
      </section>

    </div>
  );
};

// ── Helpers ──────────────────────────────────────────────────────────────────

const PageHeader = ({
  index,
  title,
  accent,
  onDark = false,
  dark = false,
}: {
  index: string;
  title: string;
  accent: string;
  onDark?: boolean;
  dark?: boolean;
}) => (
  <div className="flex items-center gap-4">
    <span className="text-xs font-bold tracking-[0.2em] opacity-40"
      style={{ color: onDark ? "#fff" : "#0f172a" }}>
      {index}
    </span>
    <div className="h-px flex-1 opacity-20" style={{ background: onDark ? "#fff" : "#0f172a" }} />
    <h2 className="text-2xl font-extrabold"
      style={{ color: onDark ? "#fff" : "#0f172a" }}>
      {title}
    </h2>
    <div className="w-8 h-1 rounded-full" style={{ background: accent }} />
  </div>
);

const SlideFooter = ({ page, onDark = false }: { page: number; onDark?: boolean }) => (
  <div className={`px-16 py-4 flex items-center justify-between border-t ${onDark ? "border-white/10" : "border-slate-100"}`}>
    <img src={blok3Logo} alt="Blok3" className={`h-6 w-auto ${onDark ? "" : "invert"}`} />
    <p className={`text-xs ${onDark ? "text-slate-500" : "text-slate-400"}`}>
      Confidential · Partnership Deck 2025 · {page} / 7
    </p>
  </div>
);

export default PitchDeck;
