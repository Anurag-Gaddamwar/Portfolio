'use client';
import React, { useRef, useEffect, useState } from "react";
import { TracingBeam } from "./components/ui/tracing-beam"; 
import { AuroraBackground } from "./components/ui/aurora-background";
import { TextRevealCard } from "./components/ui/text-reveal-card";
import About from "./components/about-me";
import Skills from "./components/skills";
// import { BackgroundBeams } from "./components/ui/background-beam";
import { BentoGrid, BentoGridItem } from "./components/ui/project-grid";

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

      <div className="rounded-xl w-full sm:text-5xl tracking-widest font-mono text-4xl sm:h-32 z-10">
        <AuroraBackground>ANURAG GADDAMWAR</AuroraBackground>
      </div>
      {/* <BackgroundBeams className="absolute top-0 w-full h-full mb-40" /> */}

      <TextRevealCard text="Web Developer" revealText="Web Designer" />
      <div className="mt-8">
        <TracingBeam {...{ svgHeight: aboutHeight }}>
          <About />
          <Skills />
          <h1 className="text-sky-300 mt-10 text-2xl md:text-3xl  mx-10 mb-10">Projects</h1>

          <BentoGrid>
            <BentoGridItem 
              title="Cypher AI" 
              description="AI-Powered Interview and Resume Preparation Platform" 
              icon={<i className="fas fa-robot"></i>} // Add your preferred icon here
            />
            <BentoGridItem 
              title="DU GUIDEBOOK" 
              description="A Delhi University Magazine" 
              icon={<i className="fas fa-book"></i>} // Add your preferred icon here
            />

            <BentoGridItem 
              title="EVOLVE" 
              description="YouTube Optimizer" 
              icon={<i className="fas fa-video"></i>} // Add your preferred icon here
            />
          </BentoGrid>
        </TracingBeam>
      </div>
    </main>
  );
}
