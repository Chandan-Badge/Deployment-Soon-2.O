import React, { useMemo } from 'react'
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

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
        <Header />
        <ComingSoon />
        <Footer />
      </div>
    </div>
  )
}

export default App;