"use client";
import { useState, useRef, useEffect } from "react";
import { TracingBeam } from "./components/ui/tracing-beam";
import { AuroraBackground } from "./components/ui/aurora-background";
import { TextRevealCard } from "./components/ui/text-reveal-card";
import About from "./components/about-me";

export default function Home() {
  const aboutRef = useRef(null);
  const [aboutHeight] = useState(0);
  
  return (
    <main className="flex min-h-screen w-screen flex-col items-center relative">
      <div className="rounded-xl w-full sm:text-5xl tracking-widest font-mono text-4xl h-40 z-10">
        <AuroraBackground>ANURAG GADDAMWAR</AuroraBackground>
      </div>
      <TextRevealCard text="Web Developer" revealText="Web Designer" />
      <TracingBeam className="mt-10 relative w-full" svgHeight={aboutHeight}>
        <About ref={aboutRef} />
      </TracingBeam>
    </main>
  );
}
