import { useState, useEffect, useMemo } from "react";
import { Globe, Mail } from "lucide-react";
import { Github, Linkedin, Instagram, Youtube } from "./BrandIcons";

/* ════════════════════════════════════════════════════════════════
   ★ EDIT YOUR DETAILS HERE — everything below is yours to change ★
   ════════════════════════════════════════════════════════════════ */
const CONFIG = {
  brand: "Chandan Chaudhary",
  tagline: "Software Engineer & Tech Freelancer",
  messageTop: "THIS WEBSITE",
  messageMain: "Deploying soon.",
  // Featured "player select" platforms
  featured: [
    {
      player: "1P",
      label: "PORTFOLIO",
      sub: "chandanchaudhary.in",
      href: "https://www.chandanchaudhary.in",
      Icon: Globe,
      // color: #00f0ff
      cardCls:
        "border-arcade-cyan text-arcade-cyan shadow-[0_0_14px_#00f0ff,inset_0_0_18px_rgba(0,0,0,0.6)] hover:shadow-[0_0_26px_#00f0ff,inset_0_0_18px_rgba(0,0,0,0.6)]",
      badgeCls: "border-arcade-cyan",
      labelCls: "[text-shadow:0_0_8px_#00f0ff]",
    },
    {
      player: "2P",
      label: "C2 EXPLAINS",
      sub: "YouTube Channel",
      href: "https://www.youtube.com/@c2explains",
      Icon: Youtube,
      // color: #ff3355
      cardCls:
        "border-[#ff3355] text-[#ff3355] shadow-[0_0_14px_#ff3355,inset_0_0_18px_rgba(0,0,0,0.6)] hover:shadow-[0_0_26px_#ff3355,inset_0_0_18px_rgba(0,0,0,0.6)]",
      badgeCls: "border-[#ff3355]",
      labelCls: "[text-shadow:0_0_8px_#ff3355]",
    },
  ],
  // Social buttons — swap in your real usernames
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/iamchandanchaudhary",
      Icon: Github,
      // color: #39ff14
      cls: "border-arcade-green text-arcade-green shadow-[0_5px_0_rgba(0,0,0,0.7),0_0_12px_#39ff14] active:shadow-[0_1px_0_rgba(0,0,0,0.7),0_0_12px_#39ff14]",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chandan--chaudhary",
      Icon: Linkedin,
      // color: #2b9fff
      cls: "border-[#2b9fff] text-[#2b9fff] shadow-[0_5px_0_rgba(0,0,0,0.7),0_0_12px_#2b9fff] active:shadow-[0_1px_0_rgba(0,0,0,0.7),0_0_12px_#2b9fff]",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/_.chandan_chaudhary",
      Icon: Instagram,
      // color: #ff2bd6
      cls: "border-arcade-pink text-arcade-pink shadow-[0_5px_0_rgba(0,0,0,0.7),0_0_12px_#ff2bd6] active:shadow-[0_1px_0_rgba(0,0,0,0.7),0_0_12px_#ff2bd6]",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@c2explains",
      Icon: Youtube,
      // color: #ff3355
      cls: "border-[#ff3355] text-[#ff3355] shadow-[0_5px_0_rgba(0,0,0,0.7),0_0_12px_#ff3355] active:shadow-[0_1px_0_rgba(0,0,0,0.7),0_0_12px_#ff3355]",
    },
    {
      label: "Email",
      href: "mailto:chandanchaudhary533@gmail.com",
      Icon: Mail,
      // color: #ffe600
      cls: "border-arcade-yellow text-arcade-yellow shadow-[0_5px_0_rgba(0,0,0,0.7),0_0_12px_#ffe600] active:shadow-[0_1px_0_rgba(0,0,0,0.7),0_0_12px_#ffe600]",
    },
  ],
  tickerText:
    "★ NEW WEBSITE LOADING ★ MERN • NEXT.JS • TAILWIND ★ FREELANCE PROJECTS AVILABLE ★ SUBSCRIBE TO C2CODEBASE ★ ",
};

/* ── Pixel space invader (two animation frames, pure CSS pixels) ── */
const FRAME_A = [
  [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0],
];
const FRAME_B = [
  [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
];

function Invader({ alt, className, size = 5 }) {
  const grid = alt ? FRAME_B : FRAME_A;
  return (
    <div aria-hidden="true" className={className}>
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

  // Deployment "loading" bar — climbs then holds at 95%
  useEffect(() => {
    const t = setInterval(() => {
      setProgress((p) => (p >= 95 ? 95 : Math.min(95, p + Math.floor(Math.random() * 4) + 1)));
    }, 180);
    return () => clearInterval(t);
  }, []);

  // Invader march animation
  useEffect(() => {
    const t = setInterval(() => setAlt((f) => !f), 500);
    return () => clearInterval(t);
  }, []);

  const filled = Math.round((progress / 100) * 20);
  const status =
    progress < 30
      ? "BOOTING SERVERS..."
      : progress < 60
        ? "BUNDLING ASSETS..."
        : progress < 95
          ? "DEPLOYING BUILD..."
          : "FINAL TOUCH: PENDING...";

  return (
    <>
      {/* arcade score bar */}


      <main className="flex flex-1 flex-col items-center justify-center px-4 py-6 text-center">
        <div className="mb-5.5 flex gap-8.5">
          <div className="animate-floaty motion-reduce:animate-none">
            <Invader alt={alt} className="text-arcade-green drop-shadow-[0_0_6px_#39ff14]" />
          </div>
          <div className="animate-floaty [animation-delay:0.5s] motion-reduce:animate-none">
            <Invader alt={!alt} className="text-arcade-pink drop-shadow-[0_0_6px_#ff2bd6]" />
          </div>
          <div className="animate-floaty [animation-delay:1s] motion-reduce:animate-none">
            <Invader alt={alt} className="text-arcade-cyan drop-shadow-[0_0_6px_#00f0ff]" />
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
          <span className="animate-neon-pulse text-[clamp(26px,7vw,62px)] uppercase leading-[1.2] tracking-[3px] text-arcade-amber [text-shadow:0_0_6px_#ffb300,0_0_22px_#ff7a00,4px_4px_0_#a30057] motion-reduce:animate-none">
            {CONFIG.messageMain}
          </span>
        </h2>

        {/* deployment loading bar */}
        <div className="mx-auto mt-7 mb-1 w-[min(300px,95vw)] md:w-[min(560px,95vw)]">
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

        <a
          href="mailto:chandanchaudhary533@gmail.com"
          className="mx-auto mt-7.5 mb-1 block animate-blink-coin cursor-pointer text-[clamp(9px,2vw,13px)] tracking-[2px] text-white [text-shadow:0_0_10px_rgba(255,255,255,0.8)] hover:text-arcade-yellow hover:[animation-play-state:paused] active:scale-[0.96] motion-reduce:animate-none"
        >
          ▶ LEAVE MESSAGE ◀
        </a>

        {/* featured platforms */}
        <div className="mt-6.5 mb-5 text-[10px] tracking-[3px] uppercase text-arcade-pink">
          — Meanwhile, Explore my other platforms —
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
          <a
            href="https://www.chandanchaudhary.in"
            target="_blank"
            className={`font-pixel inline-flex items-center justify-center gap-2 border-2 px-4 md:px-6 py-3.5 md:py-4 text-[10px] uppercase transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_currentColor] active:translate-x-1 active:translate-y-1 active:shadow-none border-[#34e5f0] bg-[#34e5f0]/10 text-[#34e5f0] shadow-[4px_4px_0_0_#34e5f0] hover:bg-[#34e5f0]/20`}
          >
            Portfolio
          </a>

          <a
            href="https://c2codebase.chandanchaudhary.in"
            target="_blank"
            className={`font-pixel inline-flex items-center justify-center gap-2 border-2 px-4 md:px-6 py-3.5 md:py-4 text-[10px] uppercase transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_currentColor] active:translate-x-1 active:translate-y-1 active:shadow-none border-arcade-pink bg-arcade-pink/10 text-arcade-pink shadow-[4px_4px_0_0_#ff2bd6] hover:bg-arcade-pink/20`}
          >
            Client Portal
          </a>

          <a
            href="https://clientportal.chandanchaudhary.in"
            target="_blank"
            className={`font-pixel inline-flex items-center justify-center gap-2 border-2 px-4 md:px-6 py-3.5 md:py-4 text-[10px] uppercase transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_currentColor] active:translate-x-1 active:translate-y-1 active:shadow-none border-arcade-green bg-arcade-green/10 text-arcade-green shadow-[4px_4px_0_0_#39ff14] hover:bg-arcade-green/20`}
          >
            C2Codebase
          </a>

          <a
            href="https://stackgallery.chandanchaudhary.in"
            target="_blank"
            className={`font-pixel inline-flex items-center justify-center gap-2 border-2 px-4 md:px-6 py-3.5 md:py-4 text-[10px] uppercase transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_currentColor] active:translate-x-1 active:translate-y-1 active:shadow-none border-arcade-yellow bg-arcade-yellow/10 text-arcade-yellow shadow-[4px_4px_0_0_#ffe600] hover:bg-arcade-yellow/20`}
          >
            Stack Gallery
          </a>
        </div>

        {/* social row */}
        <div className="mt-10 mb-1.5 flex flex-wrap justify-center gap-3.5">
          {CONFIG.socials.map((s) => (
            <a
              key={s.label}
              className={
                "flex h-10 md:h-12 w-10 md:w-12 items-center justify-center border-3 bg-black/40 transition-[transform,box-shadow,filter] duration-60 hover:brightness-[1.35] active:translate-y-1 " +
                s.cls
              }
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              aria-label={s.label}
            >
              <s.Icon size={22} />
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
