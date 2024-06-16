import React, { forwardRef, useImperativeHandle, useRef } from "react";

const About = forwardRef((props, ref) => {
  const aboutRef = useRef(null);

  useImperativeHandle(ref, () => ({
    getBoundingClientRect: () => aboutRef.current.getBoundingClientRect(),
  }));

  return (
    <div ref={aboutRef} className="mt-2 font-mono tracking-widest mx-16">
      <h1 className="text-sky-300 text-2xl md:text-3xl mb-4">About Me</h1>

      <p className="text-gray-400 text-lg md:text-xl">
        Hey there, I'm Anurag Gaddamwar, a final-year Computer Science and Design student fueled by a passion for blending technology and creativity. I thrive at the intersection of logic and aesthetics, where lines of code create captivating experiences.
      </p>

      <p className="text-gray-400 text-lg md:text-xl mt-4">
        With a curious mind and an open heart, I'm a lifelong learner constantly exploring new frontiers. My journey includes:
      </p>

      <ul className="list-disc list-inside text-gray-400 text-lg md:text-xl mt-4">
        <li>Crafting intuitive interfaces with React and Next.js</li>
        <li>Bringing designs to life with Figma and Illustrator</li>
        <li>Venturing into the cloud with AWS</li>
        <li>Building backend prowess with Express and Node.js</li>
      </ul>

      <p className="text-gray-400 text-lg md:text-xl mt-4">
        I'm eager to kickstart my career as a front-end developer, with an eye towards becoming a full-stack wizard in the future. My goal? To create impactful digital solutions that seamlessly merge functionality and beauty.
      </p>
    </div>
  );
});

export default About;
