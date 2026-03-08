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
    modules: ["Ethos & History of Bitcoin","Blockchain & Crypto Types","Security & Self-Custody","Legal & Tax Framework","Intro to Technical Analysis","FIAT On-ramp & Off-ramp","Practical Workshop: MetaMask"],
  },
  {
    level: "Level 2 — Active Participation",
    color: GREEN,
    modules: ["Ethereum & Layer 2 Solutions","Mining & Halving Cycles","Tokenomics","Technical Analysis for Investors","Categories & Trends","Crypto Culture & Slang"],
  },
  {
    level: "Level 3 — Advanced User",
    color: VIOLET,
    modules: ["DeFi Architecture","Cross-Chain Communication","AI & Crypto Synergy","Advanced Security & Scam Defence","Global Regulation & Institutions","Regulatory Systems: MiCA, US & Region","The Ready Investor"],
  },
];

const PitchDeck = () => {
  return (
    <div className="pitch-deck-root font-sans" style={{ background: BG, color: "#e2e8f0", minHeight: "100vh" }}>
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

      <div className="pitch-deck-page max-w-5xl mx-auto px-8 py-8 flex flex-col gap-6">

        {/* ── HEADER ── */}
        <header className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <img src={blok3Logo} alt="Blok3" className="h-9 w-auto" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: BLUE }}>
              Partnership Deck · 2026
            </span>
          </div>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl font-extrabold leading-tight text-white mb-1">
                The Only Structured{" "}
                <span style={{ backgroundImage: GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Blockchain &amp; Crypto Education Platform
                </span>
              </h1>
              <p className="text-slate-400 text-xs max-w-xl leading-relaxed">
                A rare opportunity to reach a captive audience of crypto-curious retail users and forward-thinking companies — before they've formed brand loyalties.
              </p>
            </div>
            <div className="flex gap-6 shrink-0">
              {[
                { num: "19", label: "Modules" },
                { num: "3", label: "Levels" },
                { num: "B2C+B2B", label: "Audience" },
                { num: "#1", label: "Region" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <span className="text-xl font-extrabold" style={{ backgroundImage: GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.num}</span>
                  <span className="text-[9px] text-slate-500 mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="h-px w-full" style={{ background: "linear-gradient(90deg,#333aed44,#0d9ee044,transparent)" }} />
        </header>

        {/* ── 3-column main body ── */}
        <div className="grid grid-cols-3 gap-4">

          {/* Col 1: Opportunity + Audience */}
          <div className="flex flex-col gap-4">
            <MiniSection title="The Opportunity" accent={PURPLE}>
              <p className="text-[10px] text-slate-300 leading-relaxed mb-2">
                Most newcomers enter crypto <strong className="text-white">without education</strong>. Blok3 solves this with a <strong className="text-white">structured, progression-based curriculum</strong> — the first of its kind in the region.
              </p>
              <div className="flex flex-col gap-1.5">
                {[
                  { icon: "📈", t: "High-Intent Audience — actively looking to buy & trade." },
                  { icon: "🎓", t: "Education = Trust — your brand aligned with quality." },
                  { icon: "🌍", t: "Regional First-Mover — no structured competitor." },
                  { icon: "🏢", t: "B2B Pipeline — direct access to institutional adoption." },
                ].map((i) => (
                  <div key={i.t} className="flex gap-1.5 items-start">
                    <span className="text-sm shrink-0">{i.icon}</span>
                    <p className="text-[10px] text-slate-400 leading-tight">{i.t}</p>
                  </div>
                ))}
              </div>
            </MiniSection>

            <MiniSection title="Who We Reach" accent={PURPLE}>
              <div className="flex flex-col gap-2">
                <div className="p-2 rounded-lg" style={{ background: "rgba(51,58,237,0.1)", border: "1px solid rgba(51,58,237,0.2)" }}>
                  <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: PURPLE }}>👤 B2C — Individuals</p>
                  {["Professionals 25–45 curious about crypto","People burned by scams seeking structure","Active investors adding crypto strategically"].map((t) => (
                    <p key={t} className="text-[10px] text-slate-400 leading-tight flex gap-1"><span style={{ color: PURPLE }}>→</span>{t}</p>
                  ))}
                </div>
                <div className="p-2 rounded-lg" style={{ background: "rgba(110,231,183,0.07)", border: "1px solid rgba(110,231,183,0.2)" }}>
                  <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: GREEN }}>🏢 B2B — Companies</p>
                  {["Financial institutions & MiCA compliance","Tech companies onboarding Web3 tools","HR teams upskilling on emerging tech"].map((t) => (
                    <p key={t} className="text-[10px] text-slate-400 leading-tight flex gap-1"><span style={{ color: GREEN }}>→</span>{t}</p>
                  ))}
                </div>
              </div>
            </MiniSection>
          </div>

          {/* Col 2: What is Blok3 + Curriculum */}
          <div className="flex flex-col gap-4">
            <MiniSection title="What is Blok3?" accent={BLUE}>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { icon: "🎬", t: "Video-First Learning", d: "19 modules as professional video content." },
                  { icon: "📡", t: "Live Calls & Q&A", d: "Regular live sessions with instructors." },
                  { icon: "💬", t: "Telegram Community", d: "Private, instructor-led group." },
                  { icon: "🏗️", t: "Structured Progression", d: "3 levels from zero to confident." },
                  { icon: "🏢", t: "Corporate Workshops", d: "Tailored on-site or remote sessions." },
                  { icon: "⚖️", t: "Regulation-Ready", d: "Dedicated MiCA & SEC modules." },
                ].map((item) => (
                  <div key={item.t} className="p-1.5 rounded-lg" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <p className="text-sm">{item.icon}</p>
                    <p className="text-[9px] font-bold text-white leading-tight">{item.t}</p>
                    <p className="text-[9px] text-slate-400 leading-tight">{item.d}</p>
                  </div>
                ))}
              </div>
            </MiniSection>

            <MiniSection title="Curriculum — 19 Modules / 3 Levels" accent={GREEN}>
              <div className="flex flex-col gap-2">
                {curriculum.map((lvl) => (
                  <div key={lvl.level}>
                    <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: lvl.color }}>{lvl.level}</p>
                    <div className="flex flex-wrap gap-1">
                      {lvl.modules.map((mod) => (
                        <span key={mod} className="text-[9px] px-1.5 py-0.5 rounded-full text-slate-200" style={{ background: `${lvl.color}18`, border: `1px solid ${lvl.color}40` }}>
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </MiniSection>
          </div>

          {/* Col 3: Why Partner + CTA */}
          <div className="flex flex-col gap-4">
            <MiniSection title="Why Partner With Blok3?" accent={BLUE}>
              <div className="flex flex-col gap-1.5">
                {[
                  { icon: "🎯", t: "Pre-qualified, High-Intent Users", d: "Graduates actively exploring exchanges & tools." },
                  { icon: "🏆", t: "Brand Visibility at Entry", d: "First exchange they see — before signing up elsewhere." },
                  { icon: "📚", t: "Association with Quality", d: "Your brand aligned with trusted, structured content." },
                  { icon: "🌍", t: "New Regional Market", d: "Croatia, Bosnia, Serbia, Slovenia — MiCA-compliant." },
                  { icon: "🤝", t: "B2B Pipeline Access", d: "Exposure to decision-makers adopting crypto." },
                  { icon: "📣", t: "Authentic Integration", d: "Partners integrated into curriculum & live sessions." },
                ].map((item) => (
                  <div key={item.t} className="flex gap-2 items-start">
                    <span className="text-sm shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-[10px] font-semibold text-white leading-tight">{item.t}</p>
                      <p className="text-[9px] text-slate-400 leading-tight">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </MiniSection>

            {/* CTA */}
            <div className="rounded-xl p-4 flex flex-col gap-3 text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-sm font-extrabold text-white leading-tight">
                We're not looking for transactional sponsorships.{" "}
                <span style={{ backgroundImage: GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  We're building long-term partnerships.
                </span>
              </p>
              <p className="text-[10px] text-slate-400">
                Exchange, wallet, DeFi protocol — if your brand benefits from educated users, let's talk.
              </p>
              <div className="flex gap-4 justify-center">
                {[
                  { icon: "📧", label: "Email", value: "contact@blok3.hr" },
                  { icon: "🌐", label: "Web", value: "blok3.hr" },
                  { icon: "💬", label: "Telegram", value: "@blok3academy" },
                ].map((c) => (
                  <div key={c.label} className="flex flex-col items-center gap-0.5">
                    <span className="text-base">{c.icon}</span>
                    <p className="text-[8px] text-slate-500 uppercase tracking-wide font-semibold">{c.label}</p>
                    <p className="text-[10px] font-bold text-slate-200">{c.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer className="flex items-center justify-between pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <img src={blok3Logo} alt="Blok3" className="h-6 w-auto" />
          <p className="text-[10px] text-slate-600">Confidential · Partnership Deck 2026 · blok3.hr</p>
        </footer>

      </div>
    </div>
  );
};

const MiniSection = ({ title, accent, children }: { title: string; accent: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <div className="w-1 h-4 rounded-full shrink-0" style={{ background: accent }} />
      <h2 className="text-xs font-extrabold text-white">{title}</h2>
      <div className="h-px flex-1 opacity-10 bg-white" />
    </div>
    {children}
  </div>
);

export default PitchDeck;
