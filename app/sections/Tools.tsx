import React from "react";
import "../animations/animate.css";
import { SiAdobephotoshop, SiFigma, SiCanva, SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiC, SiMysql, SiMongodb } from 'react-icons/si';
import { FaJava,FaAws } from 'react-icons/fa';
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedTools from "../animations/AnimatedTools.tsx";
import './tooltip.css'

const Tools = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="tools"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"TECHNICAL SKILLS"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />
    
                <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">

                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.3} text="Programming Languages" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.3} stepSize={0.1} iconSize={50}>
                                <div className="tooltip">
                                    <SiC size={50} />
                                    <span className="tooltiptext">C</span>
                                </div>
                                <div className="tooltip">
                                    <FaJava size={50} />
                                    <span className="tooltiptext">Java</span>
                                </div>
                            </AnimatedTools>
                        </div>
                    </div>

                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.2} text="Web Technologies" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.2} stepSize={0.1} iconSize={50}>
                                <div className="tooltip">
                                    <SiHtml5 size={50} />
                                    <span className="tooltiptext">HTML5</span>
                                </div>
                                <div className="tooltip">
                                    <SiCss3 size={50} />
                                    <span className="tooltiptext">CSS3</span>
                                </div>
                                <div className="tooltip">
                                    <SiJavascript size={50} />
                                    <span className="tooltiptext">JavaScript</span>
                                </div>
                                <div className="tooltip">
                                    <SiReact size={50} />
                                    <span className="tooltiptext">React</span>
                                </div>
                                <div className="tooltip">
                                    <SiTailwindcss size={50} />
                                    <span className="tooltiptext">Tailwind CSS</span>
                                </div>
                            </AnimatedTools>
                        </div>
                    </div>

                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.3} text="Database" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.3} stepSize={0.1} iconSize={50}>
                                <div className="tooltip">
                                    <SiMysql size={50} />
                                    <span className="tooltiptext">MySQL</span>
                                </div>
                                <div className="tooltip">
                                    <SiMongodb size={50} />
                                    <span className="tooltiptext">MongoDB</span>
                                </div>
                            </AnimatedTools>
                        </div>
                    </div>

                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.1} text="Design Tools" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.1} stepSize={0.1} iconSize={50}>
                                <div className="tooltip">
                                    <SiAdobephotoshop size={50} />
                                    <span className="tooltiptext">Adobe Photoshop</span>
                                </div>
                                <div className="tooltip">
                                    <SiFigma size={50} />
                                    <span className="tooltiptext">Figma</span>
                                </div>
                                <div className="tooltip">
                                    <SiCanva size={50} />
                                    <span className="tooltiptext">Canva</span>
                                </div>
                            </AnimatedTools>
                        </div>
                    </div>

                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.1} text="Cloud Computing" />
                        <div>
                        <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.1} stepSize={0.1} iconSize={50}>
    <div className="tooltip">
        <FaAws size={50} />
        <span className="tooltiptext">AWS</span>
    </div>
    <div>
        
    </div>
</AnimatedTools>


                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Tools;
