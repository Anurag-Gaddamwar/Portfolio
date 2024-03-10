import {
    SiCplusplus,
    SiFigma,
    SiMysql,
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiXcode,
    SiMongodb,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
 id: number;
 name: string;
 description: string;
 technologies: IconType[];
 techNames: string[];
 techLinks: string[];
 github: string;
 demo: string;
 image: string;
 available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Cypher AI",
        description: "Developing an AI-powered interview preparation tool that uses both voice and text inputs for natural interaction.",
        technologies: [SiMongodb, SiFigma, SiNextdotjs, SiReact, SiTailwindcss],
        techNames: ["MongoDB", "Figma", "Next.js", "React.js", "Tailwind CSS", "Machine Learning"],
        techLinks: ["https://www.mysql.com/", "https://www.figma.com/", "https://nextjs.org/", "https://reactjs.org/", "https://tailwindcss.com/", "https://en.wikipedia.org/wiki/Machine_learning"],
        github: "https://github.com/nuIIpointerexception/www.seekvisualartist.com",
        demo: "https://www.seekvisualartist.com/",
        image: "/projects/portfolio.webp",
        available: true,
    },
    {
        id: 1,
        name: "EVOLVE",
        description: "Led a team of five in analyzing YouTube comments for sentiment analysis, aiding content creators in making informed content decisions.",
        technologies: [ SiXcode, SiMysql, SiReact],
        techNames: ["Machine Learning", "MySQL", "React.js"],
        techLinks: ["https://en.wikipedia.org/wiki/Machine_learning", "https://www.mysql.com/", "https://reactjs.org/"],
        github: "https://github.com/nuIIpointerexception/codewars",
        demo: "https://www.codewars.com/",
        image: "/projects/codewars.webp",
        available: true,
    },
    // Add more projects here if needed
];
