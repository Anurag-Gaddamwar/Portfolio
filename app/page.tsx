'use client';
import { cn } from "@/app/utils/cn";
import React, { useRef, useEffect, useState } from "react";
import { TracingBeam } from "./components/ui/tracing-beam"; 
import { AuroraBackground } from "./components/ui/aurora-background";
import { TextRevealCard } from "./components/ui/text-reveal-card";
import About from "./components/about-me";
import Skills from "./components/skills";
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
      <TextRevealCard text="Web Developer" revealText="Web Designer" />
      <div className="mt-8">
        <TracingBeam {...{ svgHeight: aboutHeight }}>
          <About />
          <Skills />
          <h1 className="text-sky-300 font-mono tracking-widest mt-10 text-2xl md:text-3xl mx-10 mb-10">Projects</h1>
          <BentoGrid>
            <BentoGridItem 
              title="Cypher AI" 
              description="AI-Powered Interview and Resume Preparation Platform" 
              detailedDescription={
                <>
                  <ul className="list-disc text-sm text-justify">
                    <li>
                      Implemented an interactive chatbot (both text-based and voice-based) utilizing the Gemini API to provide
                      personalized responses and guidance for technical and interpersonal interview questions.
                    </li>
                    <li>
                      Developed a resume analysis feature that accepts job roles and resumes (in PDF or image format) from users.
                      This feature extracts text from uploaded documents and uses the Gemini API to evaluate resumes against specific
                      job roles, offering detailed feedback including ATS (Applicant Tracking System) compatibility scores, structure
                      analysis, and content relevance scores.
                    </li>
                    <li>
                      <span className="font-semibold">Outcome:</span> Created a comprehensive tool that empowers job seekers with tailored interview practice
                      and resume enhancement suggestions, significantly increasing their chances of success in the job application process.
                    </li>
                    <li>
                      <span className="font-semibold">Tech Stack:</span> Next.js, React, react-markdown, WebKitSpeech API, OCR, Express.js, Node.js, MongoDB, Gemini API
                    </li>
                  </ul>
                </>
              }
              icon={<i className="fas fa-robot"></i>}
              image="cypher.png"
              carouselItems={[ // Add carousel items here
                { image: "c1.png", caption: "Caption for Image 1" },
                { image: "c2.png", caption: "Caption for Image 1" },
                { image: "c3.png", caption: "Caption for Image 1" },
                { image: "c4.png", caption: "Caption for Image 1" },
              ]}
            />
            <BentoGridItem 
              title="EVOLVE" 
              description="YouTube Optimizer" 
              detailedDescription={
                <>
                  <ul className="list-disc text-sm text-justify">
                    <li>
                      Developed a web application designed to streamline content creation by summarizing audience feedback
                      from YouTube comments and providing data-driven recommendations to creators.
                    </li>
                    <li>
                      Integrated the Gemini API and YouTube Data API to collect and evaluate comments, highlighting key insights
                      and understanding audience perceptions. Features were developed to identify and filter out spam and abusive
                      comments, ensuring that creators receive only relevant and constructive feedback.
                    </li>
                    <li>
                      <span className="font-semibold">Outcome:</span> Created a powerful tool that enables creators to understand audience sentiment, identify
                      areas for improvement, receive content recommendations, and maintain a positive comment section. This
                      enhances content quality and viewer engagement.
                    </li>
                    <li>
                      <span className="font-semibold">Tech Stack:</span> Next.js, MongoDB, Express.js, Node.js, React.js, Gemini API, YouTube Data API
                    </li>
                  </ul>
                </>
              }
              icon={<i className="fas fa-video"></i>}
              image="evolve.png"
              carouselItems={[ // Add carousel items here
                { image: "e7.png", caption: "Caption for Image 1" },
                { image: "e6.png", caption: "Caption for Image 1" },
                { image: "e5.png", caption: "Caption for Image 1" },
                { image: "e4.png", caption: "Caption for Image 1" },
                { image: "e3.png", caption: "Caption for Image 1" },
                { image: "e2.png", caption: "Caption for Image 1" },
                { image: "e1.png", caption: "Caption for Image 1" },

              ]}
            />
          </BentoGrid>
        </TracingBeam>
      </div>
    </main>
  );
}
