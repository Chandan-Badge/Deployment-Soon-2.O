import { useState, useEffect, useMemo } from "react";
import { Globe, Mail } from "lucide-react";
import { Github, Linkedin, Instagram, Youtube } from "./BrandIcons";

/* ════════════════════════════════════════════════════════════════
   ★ EDIT YOUR DETAILS HERE — everything below is yours to change ★
   ════════════════════════════════════════════════════════════════ */
const CONFIG = {
  brand: "C2Codebase",
  tagline: "Software Engineer & Freelancer",
  messageTop: "NEW WEBSITE",
  messageMain: "COMING SOON",
  // Featured "player select" platforms
  featured: [
    {
      player: "1P",
      label: "PORTFOLIO",
      sub: "chandanchaudhary.in",
      href: "https://www.chandanchaudhary.in",
      Icon: Globe,
      color: "#00f0ff",
    },
    {
      player: "2P",
      label: "C2 EXPLAINS",
      sub: "YouTube Channel",
      href: "https://www.youtube.com/@c2explains",
      Icon: Youtube,
      color: "#ff3355",
    },
  ],
  // Social buttons — swap in your real usernames
  socials: [
    { label: "GitHub", href: "https://github.com/iamchandanchaudhary", Icon: Github, color: "#39ff14" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/chandan--chaudhary", Icon: Linkedin, color: "#2b9fff" },
    { label: "Instagram", href: "https://www.instagram.com/_.chandan_chaudhary", Icon: Instagram, color: "#ff2bd6" },
    { label: "YouTube", href: "https://www.youtube.com/@c2explains", Icon: Youtube, color: "#ff3355" },
    { label: "Email", href: "mailto:chandanchaudhary533@gmail.com", Icon: Mail, color: "#ffe600" },
  ],
  tickerText:
    "★ NEW WEBSITE LOADING ★ MERN • NEXT.JS • TAILWIND ★ FREELANCE PROJECTS OPEN ★ SUBSCRIBE TO C2 EXPLAINS ★ ",
};

/* ── Pixel space invader (two animation frames, pure CSS pixels) ── */
const FRAME_A = [
  [0,0,1,0,0,0,0,0,1,0,0],
  [0,0,0,1,0,0,0,1,0,0,0],
  [0,0,1,1,1,1,1,1,1,0,0],
  [0,1,1,0,1,1,1,0,1,1,0],
  [1,1,1,1,1,1,1,1,1,1,1],
  [1,0,1,1,1,1,1,1,1,0,1],
  [1,0,1,0,0,0,0,0,1,0,1],
  [0,0,0,1,1,0,1,1,0,0,0],
];
const FRAME_B = [
  [0,0,1,0,0,0,0,0,1,0,0],
  [1,0,0,1,0,0,0,1,0,0,1],
  [1,0,1,1,1,1,1,1,1,0,1],
  [1,1,1,0,1,1,1,0,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1],
  [0,1,1,1,1,1,1,1,1,1,0],
  [0,0,1,0,0,0,0,0,1,0,0],
  [0,1,0,0,0,0,0,0,0,1,0],
];

function Invader({ alt, color, size = 5 }) {
  const grid = alt ? FRAME_B : FRAME_A;
  return (
    <div
      aria-hidden="true"
      className="text-(--c) drop-shadow-[0_0_6px_var(--c)]"
      style={{ "--c": color }}
    >
      {grid.map((row, r) => (
        <div key={r} className="flex">
          {row.map((on, c) => (
            <div
              key={c}
              className={on ? "bg-current" : "bg-transparent"}
              style={{ width: size, height: size }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function ArcadeComingSoon() {
  const [progress, setProgress] = useState(0);
  const [alt, setAlt] = useState(false);
  const [credits, setCredits] = useState(0);

  // Deployment "loading" bar — climbs then holds at 88%
  useEffect(() => {
    const t = setInterval(() => {
      setProgress((p) => (p >= 88 ? 88 : Math.min(88, p + Math.floor(Math.random() * 4) + 1)));
    }, 180);
    return () => clearInterval(t);
  }, []);

  // Invader march animation
  useEffect(() => {
    const t = setInterval(() => setAlt((f) => !f), 500);
    return () => clearInterval(t);
  }, []);

  const stars = useMemo(
    () =>
      Array.from({ length: 90 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 4,
        dur: Math.random() * 3 + 2,
      })),
    []
  );

  const filled = Math.round((progress / 100) * 20);
  const status =
    progress < 30
      ? "BOOTING SERVERS..."
      : progress < 60
      ? "BUNDLING ASSETS..."
      : progress < 88
      ? "DEPLOYING BUILD..."
      : "FINAL BOSS: DNS...";

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(1200px_700px_at_50%_-10%,#2a0a4a_0%,#12042a_45%,#05010f_100%)] font-arcade text-arcade-fog">
      {/* atmosphere */}
      <div className="absolute inset-0 z-1">
        {stars.map((s) => (
          <span
            key={s.id}
            className="absolute rounded-full bg-white shadow-[0_0_6px_#9be7ff] [animation-delay:var(--delay)] animate-[twinkle_var(--dur)_ease-in-out_infinite] motion-reduce:animate-none"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              "--dur": `${s.dur}s`,
              "--delay": `${s.delay}s`,
            }}
          />
        ))}
      </div>
      <div className="absolute bottom-[-42%] left-[-50%] right-[-50%] z-1 h-[80%] animate-gridmove bg-[linear-gradient(rgba(255,43,214,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,43,214,0.3)_1px,transparent_1px)] bg-size-[48px_48px] mask-[linear-gradient(to_top,rgba(0,0,0,0.9),transparent_85%)] transform-[perspective(420px)_rotateX(60deg)] motion-reduce:animate-none" />
      <div className="pointer-events-none absolute inset-0 z-5 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.55)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-6 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.22)_0_1px,transparent_1px_3px)]" />

      <div className="relative z-4 flex min-h-screen flex-col">
        {/* arcade score bar */}
        <header className="flex flex-wrap justify-between gap-3 px-5 py-4 text-[10px] tracking-[1px]">
          <span className="text-arcade-cyan">
            <span className="animate-blink motion-reduce:animate-none">1UP</span>&nbsp;&nbsp;2026
          </span>
          <span className="text-arcade-yellow">HI-SCORE&nbsp;&nbsp;999999</span>
          <span className="text-arcade-pink">CREDIT&nbsp;&nbsp;{String(credits).padStart(2, "0")}</span>
        </header>

        <main className="flex flex-1 flex-col items-center justify-center px-4 py-6 text-center">
          <div className="mb-5.5 flex gap-8.5">
            <div className="animate-floaty motion-reduce:animate-none">
              <Invader alt={alt} color="#39ff14" />
            </div>
            <div className="animate-floaty [animation-delay:0.5s] motion-reduce:animate-none">
              <Invader alt={!alt} color="#ff2bd6" />
            </div>
            <div className="animate-floaty [animation-delay:1s] motion-reduce:animate-none">
              <Invader alt={alt} color="#00f0ff" />
            </div>
          </div>

          <h1 className="text-[clamp(20px,5vw,44px)] leading-[1.4] tracking-[2px] text-white [text-shadow:-3px_0_#ff2bd6,3px_0_#00f0ff,0_0_18px_rgba(0,240,255,0.8)]">
            {CONFIG.brand}
          </h1>
          <p className="mt-3 text-[clamp(8px,1.8vw,11px)] tracking-[3px] text-arcade-cyan [text-shadow:0_0_8px_rgba(0,240,255,0.6)]">
            {CONFIG.tagline}
          </p>

          <h2 className="mt-7.5 mb-1.5 flex flex-col gap-3">
            <span className="text-[clamp(11px,2.6vw,18px)] tracking-[2px] text-arcade-yellow [text-shadow:0_0_10px_rgba(255,230,0,0.7)]">
              {CONFIG.messageTop}
            </span>
            <span className="animate-neon-pulse text-[clamp(26px,7vw,62px)] leading-[1.2] tracking-[3px] text-arcade-amber [text-shadow:0_0_6px_#ffb300,0_0_22px_#ff7a00,4px_4px_0_#a30057] motion-reduce:animate-none">
              {CONFIG.messageMain}
            </span>
          </h2>

          {/* deployment loading bar */}
          <div className="mx-auto mt-7 mb-1 w-[min(560px,88vw)]">
            <div className="mb-2 flex justify-between text-[10px] tracking-[1px] text-arcade-ice">
              <span>LOADING</span>
              <span>{progress}%</span>
            </div>
            <div className="flex gap-1 border-[3px] border-arcade-ice p-1.5 shadow-[0_0_12px_rgba(0,240,255,0.5),inset_0_0_12px_rgba(0,240,255,0.12)]">
              {Array.from({ length: 20 }).map((_, i) => (
                <span
                  key={i}
                  className={
                    "h-4 flex-1 " +
                    (i < filled
                      ? "bg-linear-to-b from-[#7dff5e] to-arcade-green shadow-[0_0_8px_rgba(57,255,20,0.9)]"
                      : "bg-white/6")
                  }
                />
              ))}
            </div>
            <div className="mt-3 animate-blink-slow text-[9px] tracking-[2px] text-arcade-green motion-reduce:animate-none">
              {status}
            </div>
          </div>

          <button
            className="mx-auto mt-7.5 mb-1 block animate-blink-coin cursor-pointer text-[clamp(9px,2vw,13px)] tracking-[2px] text-white [text-shadow:0_0_10px_rgba(255,255,255,0.8)] hover:text-arcade-yellow hover:[animation-play-state:paused] active:scale-[0.96] motion-reduce:animate-none"
            onClick={() => setCredits((c) => Math.min(99, c + 1))}
          >
            ▶ INSERT COIN TO CONTINUE ◀
          </button>

          {/* featured platforms */}
          <div className="mt-6.5 mb-5 text-[10px] tracking-[3px] text-arcade-pink">— SELECT YOUR PLAYER —</div>
          <div className="flex flex-wrap justify-center gap-5">
            {CONFIG.featured.map((f) => (
              <a
                key={f.label}
                className="relative flex w-[min(240px,80vw)] flex-col items-center gap-2.5 border-[3px] border-(--c) bg-black/35 px-3.5 pt-5.5 pb-4 text-(--c) no-underline shadow-[0_0_14px_var(--c),inset_0_0_18px_rgba(0,0,0,0.6)] transition-[transform,box-shadow] duration-120 hover:-translate-y-1 hover:shadow-[0_0_26px_var(--c),inset_0_0_18px_rgba(0,0,0,0.6)] active:translate-y-0.5"
                href={f.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ "--c": f.color }}
              >
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 border-2 border-(--c) bg-arcade-void px-2.5 py-1 text-[10px]">
                  {f.player}
                </span>
                <f.Icon size={30} strokeWidth={2} />
                <span className="text-xs tracking-[1px] text-white [text-shadow:0_0_8px_var(--c)]">{f.label}</span>
                <span className="text-[8px] leading-[1.7] break-all opacity-90">{f.sub}</span>
              </a>
            ))}
          </div>

          {/* social row */}
          <div className="mt-7 mb-1.5 flex flex-wrap justify-center gap-3.5">
            {CONFIG.socials.map((s) => (
              <a
                key={s.label}
                className="flex h-13 w-13 items-center justify-center border-[3px] border-(--c) bg-black/40 text-(--c) shadow-[0_5px_0_rgba(0,0,0,0.7),0_0_12px_var(--c)] transition-[transform,box-shadow,filter] duration-60 hover:brightness-[1.35] active:translate-y-1 active:shadow-[0_1px_0_rgba(0,0,0,0.7),0_0_12px_var(--c)]"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                aria-label={s.label}
                style={{ "--c": s.color }}
              >
                <s.Icon size={22} />
              </a>
            ))}
          </div>
        </main>

        <footer className="mt-auto text-center">
          <div className="overflow-hidden border-y-2 border-[rgba(255,43,214,0.5)] bg-[rgba(255,43,214,0.06)]">
            <span className="inline-block animate-ticker whitespace-nowrap py-2 text-[9px] tracking-[2px] text-arcade-rose motion-reduce:animate-none">
              {CONFIG.tickerText + CONFIG.tickerText}
            </span>
          </div>
          <p className="px-2.5 pt-3.5 pb-4.5 text-[8px] leading-[1.8] tracking-[1px] text-arcade-slate">
            © 2026 {CONFIG.brand} • GAME OVER? NEVER. • MADE WITH ❤ &amp; ☕
          </p>
        </footer>
      </div>
    </div>
  );
}
