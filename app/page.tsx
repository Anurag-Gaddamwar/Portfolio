'use client';
import React, { useRef, useEffect, useState } from "react";
import { TracingBeam } from "./components/ui/tracing-beam"; // Import TracingBeamProps from the component file
import { AuroraBackground } from "./components/ui/aurora-background";
import { TextRevealCard } from "./components/ui/text-reveal-card";
import About from "./components/about-me";
import Skills from "./components/skills";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [aboutHeight, setAboutHeight] = useState<number>(0);

  useEffect(() => {
    if (aboutRef.current) {
      const height = aboutRef.current.offsetHeight;
      setAboutHeight(height);
    }
  }, []);

  return (
    <main className="flex min-h-screen w-screen flex-col items-center relative">
      <div className="rounded-xl w-full sm:text-5xl tracking-widest font-mono text-4xl h-40 z-10">
        <AuroraBackground>ANURAG GADDAMWAR</AuroraBackground>
      </div>
      <TextRevealCard text="Web Developer" revealText="Web Designer" />
      <TracingBeam {...{ svgHeight: aboutHeight }}>
        <About/>
        <Skills />
      </TracingBeam>
    </main>
  );
}
