import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
    Coffee,
    Globe,
    Heart,
    Mail
} from "lucide-react";
import { Github, Linkedin, Instagram, Youtube } from "./BrandIcons";

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
    tickerItems: [
        "★ NEW WEBSITE LOADING",
        "★ MERN",
        "★ NEXT.JS",
        "★ TAILWIND",
        "★ REACT NATIVE",
        "★ AVILABLE FOR NEW PROJECTS",
        "★ SUBSCRIBE TO C2CODEBASE",
    ],
    tickerSpeed: 120, // pixels per second
};

function Footer() {
    const viewportRef = useRef(null);
    const trackRef = useRef(null);
    const unitRef = useRef(null);
    const offsetRef = useRef(0);
    const unitWidthRef = useRef(0);
    const pausedRef = useRef(false);
    const [copies, setCopies] = useState(2);

    // enough copies to cover the strip plus one spare waiting off-screen
    useLayoutEffect(() => {
        const viewport = viewportRef.current;
        const unit = unitRef.current;
        if (!viewport || !unit) return;

        let cancelled = false;
        const measure = () => {
            if (cancelled) return;
            const unitWidth = unit.offsetWidth;
            if (!unitWidth) return;
            unitWidthRef.current = unitWidth;
            setCopies(Math.ceil(viewport.clientWidth / unitWidth) + 1);
        };

        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(viewport);
        observer.observe(unit);
        document.fonts?.ready.then(measure).catch(() => { });

        return () => {
            cancelled = true;
            observer.disconnect();
        };
    }, []);

    // advance by real elapsed time, wrapping at exactly one copy width
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        let frame = 0;
        let last = 0;

        const step = (now) => {
            const unitWidth = unitWidthRef.current;
            if (last && !pausedRef.current && unitWidth) {
                const moved = (CONFIG.tickerSpeed * (now - last)) / 1000;
                offsetRef.current = (offsetRef.current + moved) % unitWidth;
                track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
            }
            last = now;
            frame = requestAnimationFrame(step);
        };

        frame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frame);
    }, []);

    const pause = () => {
        pausedRef.current = true;
    };
    const resume = () => {
        pausedRef.current = false;
    };

    return (
        <footer className="mt-auto text-center">
            <div
                ref={viewportRef}
                onMouseEnter={pause}
                onMouseLeave={resume}
                onTouchStart={pause}
                onTouchEnd={resume}
                className="overflow-hidden border-y-2 border-[rgba(255,43,214,0.5)] bg-[rgba(255,43,214,0.06)]"
            >
                <div ref={trackRef} className="flex w-max will-change-transform">
                    {Array.from({ length: copies }, (_, copy) => (
                        <ul
                            key={copy}
                            ref={copy === 0 ? unitRef : undefined}
                            aria-hidden={copy > 0 ? true : undefined}
                            className="flex shrink-0 items-center gap-x-6 py-2 pr-6"
                        >
                            {CONFIG.tickerItems.map((item) => (
                                <li
                                    key={item}
                                    className="whitespace-nowrap text-[9px] tracking-[2px] text-arcade-rose"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center pt-3 pb-4 text-[8px] leading-[1.8] tracking-[1px] text-arcade-slate">
                <span className='flex justify-center items-center gap-2 md:pr-2'>
                    © 2024-2026
                    <a href="https://www.chandanchaudhary.in" className='uppercase hover:underline'>
                        {CONFIG.brand}
                    </a>
                </span>

                <span className='flex justify-center items-center gap-2'>
                    • MADE WITH
                    <Heart className='w-4' />
                    &amp;
                    <Coffee className='w-4' />
                </span>
            </div>
        </footer>
    )
}

export default Footer;
