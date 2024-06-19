import React, { ReactNode } from "react";

const AboutHeader = () => (

  <h1 className="text-sky-300 text-2xl md:text-3xl mb-4">About Me</h1>
);
interface AboutParagraphProps {
children: ReactNode;
}

const AboutParagraph = ({ children }: AboutParagraphProps) => (

  <p className="text-gray-400 text-base mt-4">{children}</p>
);
const AboutSkills = () => (

  <ul className="list-disc list-inside text-gray-400 text-base mt-4">
    <li key="frontend">Crafting intuitive interfaces with React and Next.js</li>
    <li key="design">Bringing designs to life with Figma and Illustrator</li>
    <li key="cloud">Venturing into the cloud with AWS</li>
    <li key="backend">Building backend prowess with Express and Node.js</li>
  </ul>
);
const About = () => {
return (
<div className="mt-2 font-mono tracking-widest text-base mx-16">
<AboutHeader />
<AboutParagraph>
Hey there, I am Anurag Gaddamwar, a final-year Computer Science and Design student fueled by a passion for blending technology and creativity. I thrive at the intersection of logic and aesthetics, where lines of code create captivating experiences.
</AboutParagraph>

vbnet
Copy code
  <AboutParagraph>
    With a curious mind and an open heart, I am a lifelong learner constantly exploring new frontiers. My journey includes:
  </AboutParagraph>

  <AboutSkills />

  <AboutParagraph>
    I am eager to kickstart my career as a front-end developer, with an eye towards becoming a full-stack wizard in the future. My goal? To create impactful digital solutions that seamlessly merge functionality and beauty.
  </AboutParagraph>
</div>
);
};

export default About;