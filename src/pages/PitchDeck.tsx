import blok3Logo from "@/assets/blok3-logo.svg";
import { Download } from "lucide-react";

const BG = "linear-gradient(145deg,#0c1324 0%,#0d1f3c 60%,#091929 100%)";
const GRAD = "linear-gradient(90deg,#333aed,#0d9ee0,#6ee7b7)";
const BLUE = "#0d9ee0";
const PURPLE = "#333aed";
const GREEN = "#6ee7b7";
const VIOLET = "#a78bfa";

const curriculum = [
  {
    level: "Level 1 — Foundations",
    color: BLUE,
    modules: [
      "Ethos & History of Bitcoin",
      "Blockchain & Crypto Types",
      "Security & Self-Custody",
      "Legal & Tax Framework",
      "Intro to Technical Analysis",
      "FIAT On-ramp & Off-ramp",
      "Practical Workshop: MetaMask",
    ],
  },
  {
    level: "Level 2 — Active Participation",
    color: GREEN,
    modules: [
      "Ethereum & Layer 2 Solutions",
      "Mining & Halving Cycles",
      "Tokenomics",
      "Technical Analysis for Investors",
      "Categories & Trends",
      "Crypto Culture & Slang",
    ],
  },
  {
    level: "Level 3 — Advanced User",
    color: VIOLET,
    modules: [
      "DeFi Architecture",
      "Cross-Chain Communication",
      "AI & Crypto Synergy",
      "Advanced Security & Scam Defence",
      "Global Regulation & Institutions",
      "Regulatory Systems: MiCA, US & Region",
      "The Ready Investor",
    ],
  },
];

const PitchDeck = () => {
  return (
    <div
      className="pitch-deck-root font-sans"
      style={{ background: BG, color: "#e2e8f0", minHeight: "100vh" }}
    >
      {/* Print button */}
      <div className="no-print fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-5 py-3 rounded-full text-white text-sm font-semibold shadow-xl"
          style={{ background: GRAD }}
        >
          <Download size={16} />
          Save as PDF
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-14 flex flex-col gap-16">

        {/* ── HEADER ── */}
        <header className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <img src={blok3Logo} alt="Blok3" className="h-12 w-auto" />
            <span
              className="text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: BLUE }}
            >
              Partnership Deck · 2025
            </span>
          </div>

          <div>
            <h1 className="text-5xl font-extrabold leading-tight text-white mb-4">
              The Only Structured<br />
              <span
                style={{
                  backgroundImage: GRAD,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Blockchain &amp; Crypto Education Platform
              </span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              A rare opportunity to reach a captive audience of crypto-curious retail users and forward-thinking companies — before they've formed brand loyalties.
            </p>
          </div>

          <div className="flex gap-10">
            {[
              { num: "19", label: "Structured Modules" },
              { num: "3", label: "Proficiency Levels" },
              { num: "B2C + B2B", label: "Dual Audience" },
              { num: "#1", label: "In the Region" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span
                  className="text-3xl font-extrabold"
                  style={{
                    backgroundImage: GRAD,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.num}
                </span>
                <span className="text-xs text-slate-500 mt-1">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="h-px w-full" style={{ background: "linear-gradient(90deg,#333aed44,#0d9ee044,transparent)" }} />
        </header>

        {/* ── THE OPPORTUNITY ── */}
        <section className="flex flex-col gap-6">
          <SectionTitle title="The Opportunity" accent={PURPLE} />
          <div className="grid grid-cols-2 gap-6">
            <p className="text-slate-300 text-sm leading-relaxed col-span-2">
              The global crypto market is growing fast — but most newcomers enter <strong className="text-white">without any real education</strong>. They follow influencers, fall for scams, and exit frustrated.
              Blok3 solves this with a <strong className="text-white">structured, progression-based curriculum</strong> — the first of its kind in Croatia and the broader region.
            </p>
            {[
              { icon: "📈", title: "High-Intent Audience", desc: "Students actively looking to buy, trade, and explore the ecosystem." },
              { icon: "🎓", title: "Education = Trust", desc: "Users who learn through us associate your brand with quality and credibility." },
              { icon: "🌍", title: "Regional First-Mover", desc: "No structured competitor exists in Croatia, Bosnia, Slovenia, or Serbia." },
              { icon: "🏢", title: "B2B Pipeline", desc: "We train company teams — direct access to institutional and SME crypto adoption." },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-semibold text-white text-sm">{item.title}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHAT IS BLOK3 ── */}
        <section className="flex flex-col gap-6">
          <SectionTitle title="What is Blok3?" accent={BLUE} />
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: "🎬", title: "Video-First Learning", desc: "19 modules as professionally produced video content — accessible anytime." },
              { icon: "📡", title: "Live Calls & Q&A", desc: "Regular live sessions with instructors for real-time guidance and market discussion." },
              { icon: "💬", title: "Telegram Community", desc: "Private, instructor-led group for peer learning, market alerts, and ongoing support." },
              { icon: "🏗️", title: "Structured Progression", desc: "Three levels guide users from zero knowledge to confident, independent market participants." },
              { icon: "🏢", title: "Corporate Workshops", desc: "Tailored on-site or remote workshops for companies, teams, and organisations." },
              { icon: "⚖️", title: "Regulation-Ready", desc: "Dedicated modules on MiCA, SEC policy, and regional regulation." },
            ].map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-xl flex flex-col gap-2"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="font-bold text-white text-sm">{item.title}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CURRICULUM ── */}
        <section className="flex flex-col gap-6">
          <SectionTitle title="Curriculum Overview — 19 Modules Across 3 Levels" accent={GREEN} />
          <div className="flex flex-col gap-5">
            {curriculum.map((lvl) => (
              <div key={lvl.level}>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: lvl.color }}
                >
                  {lvl.level}
                </p>
                <div className="flex flex-wrap gap-2">
                  {lvl.modules.map((mod) => (
                    <span
                      key={mod}
                      className="text-xs px-3 py-1.5 rounded-full text-slate-200"
                      style={{ background: `${lvl.color}18`, border: `1px solid ${lvl.color}40` }}
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── AUDIENCE ── */}
        <section className="flex flex-col gap-6">
          <SectionTitle title="Who We Reach" accent={PURPLE} />
          <div className="grid grid-cols-2 gap-6">
            <div
              className="p-5 rounded-xl flex flex-col gap-4"
              style={{ background: "rgba(51,58,237,0.1)", border: "1px solid rgba(51,58,237,0.25)" }}
            >
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: PURPLE }}>👤 B2C — Individual Learners</p>
              {[
                "Professionals aged 25–45 curious about crypto but overwhelmed by complexity",
                "People who've been burned by scams and want to learn properly",
                "Active investors looking to add crypto strategically to their portfolio",
                "Crypto beginners searching for a trusted, structured starting point",
              ].map((t) => (
                <p key={t} className="text-xs text-slate-300 leading-relaxed flex gap-2">
                  <span style={{ color: PURPLE }}>→</span> {t}
                </p>
              ))}
            </div>
            <div
              className="p-5 rounded-xl flex flex-col gap-4"
              style={{ background: "rgba(110,231,183,0.07)", border: "1px solid rgba(110,231,183,0.2)" }}
            >
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: GREEN }}>🏢 B2B — Companies & Organisations</p>
              {[
                "Financial institutions exploring crypto products and MiCA compliance",
                "Tech companies onboarding Web3 tools for internal teams",
                "HR & L&D teams upskilling employees on emerging technologies",
                "Management and decision-makers who need strategic crypto literacy",
              ].map((t) => (
                <p key={t} className="text-xs text-slate-300 leading-relaxed flex gap-2">
                  <span style={{ color: GREEN }}>→</span> {t}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY PARTNER ── */}
        <section className="flex flex-col gap-6">
          <SectionTitle title="Why Partner With Blok3?" accent={BLUE} />
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: "🎯", title: "Pre-qualified, High-Intent Users", desc: "Graduates actively exploring exchanges, tools, and services — not passive viewers." },
              { icon: "🏆", title: "Brand Visibility at Entry", desc: "Your brand is the first exchange they see — before they sign up anywhere else." },
              { icon: "📚", title: "Association with Quality", desc: "In a space full of noise, your brand is aligned with trusted, structured content." },
              { icon: "🌍", title: "New Regional Market", desc: "Croatia, Bosnia, Serbia, and Slovenia — a largely untapped, MiCA-compliant market." },
              { icon: "🤝", title: "B2B Pipeline Access", desc: "Exposure to company decision-makers adopting crypto — institutional-level touchpoint." },
              { icon: "📣", title: "Authentic Integration", desc: "Partners are integrated naturally into curriculum, community, and live sessions." },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 p-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span className="text-xl">{item.icon}</span>
                <p className="font-bold text-white text-sm">{item.title}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="rounded-2xl p-10 flex flex-col items-center gap-6 text-center"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <p className="text-2xl font-extrabold text-white max-w-2xl leading-tight">
            We're not looking for transactional sponsorships. <br />
            <span
              style={{
                backgroundImage: GRAD,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              We're building long-term partnerships.
            </span>
          </p>
          <p className="text-slate-400 text-sm max-w-xl">
            Whether you're an exchange, wallet provider, DeFi protocol, or any crypto-native business — if your brand benefits from educated, confident users, we should talk.
          </p>

          <div className="flex gap-12 justify-center mt-2">
            {[
              { icon: "📧", label: "Email", value: "contact@blok3.hr" },
              { icon: "🌐", label: "Website", value: "blok3.hr" },
              { icon: "💬", label: "Telegram", value: "@blok3academy" },
            ].map((c) => (
              <div key={c.label} className="flex flex-col items-center gap-1">
                <span className="text-xl">{c.icon}</span>
                <p className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold">{c.label}</p>
                <p className="text-sm font-bold text-slate-200">{c.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <img src={blok3Logo} alt="Blok3" className="h-7 w-auto" />
          <p className="text-xs text-slate-600">Confidential · Partnership Deck 2025 · blok3.hr</p>
        </footer>

      </div>
    </div>
  );
};

// ── Helper ────────────────────────────────────────────────────────────────────
const SectionTitle = ({ title, accent }: { title: string; accent: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-1 h-6 rounded-full shrink-0" style={{ background: accent }} />
    <h2 className="text-lg font-extrabold text-white">{title}</h2>
    <div className="h-px flex-1 opacity-10 bg-white" />
  </div>
);

export default PitchDeck;
