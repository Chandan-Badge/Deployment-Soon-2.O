import React from 'react'
import { CalendarDays } from "lucide-react";
import logo from "../assets/c2codebase.png";

function Header() {

    return (
        <header className="flex flex-wrap items-center justify-between gap-3 px-6 md:px-14 py-4 text-[10px] tracking-[1px]">
            {/* left — brand mark */}
            <a
                href="https://www.chandanchaudhary.in"
                className="group flex items-center gap-2.5 sm:gap-3"
            >
                <img
                    src={logo}
                    alt="C2Codebase logo"
                    className="h-10 w-10 drop-shadow-[0_0_10px_rgba(0,240,255,0.75)]"
                />
                <span className="hidden sm:flex flex-col gap-1 text-left">
                    <span className="text-[10px] sm:text-xs leading-none tracking-[2px] text-white [text-shadow:-2px_0_#ff2bd6,2px_0_#00f0ff]">
                        C2CODEBASE
                    </span>
                    <span className="text-[7px] leading-none tracking-[3px] text-arcade-slate">
                        CHANDAN CHAUDHARY
                    </span>
                </span>
            </a>

            {/* right — consultation CTA (static for now) */}
            <a
                href='https://clientportal.chandanchaudhary.in/consultation'
                target='_blank'
                className="cursor-pointer inline-flex items-center gap-2 border-2 border-arcade-green bg-[rgba(57,255,20,0.08)] hover:bg-[rgba(57,255,20,0.2)] px-3 py-2.5 sm:px-4 text-[8px] sm:text-[10px] uppercase tracking-[2px] text-arcade-green shadow-[0_5px_0_rgba(0,0,0,0.7),0_0_12px_#39ff14] transition-transform active:translate-y-1 active:shadow-[0_1px_0_rgba(0,0,0,0.7),0_0_12px_#39ff14] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-arcade-green motion-reduce:transition-none"
            >
                <CalendarDays aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
                Book Consultation
            </a>
        </header>
    )
}

export default Header;
