import { FaJs, FaReact, FaPython, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiFlask, SiFastapi } from "react-icons/si";
import myImage from "./assets/images/max.png";
import studybuddy from "./assets/images/studybuddy.png";
import Tracewise from "./assets/images/tracewise.png";

const logotext = "MAXWEL";

const meta = {
    title: "Maxwel Kirimi",
    description: "I’m Maxwel Kirimi, a software engineer and cybersecurity officer, specializing in web and mobile app development.",
};

const introdata = {
    title: "I’m Maxwel Kirimi",
    animated: {
        first: "I build secure applications",
        second: "I develop full-stack solutions",
        third: "I create mobile apps with React Native",
    },
    description: "Passionate about crafting efficient and scalable solutions, I specialize in full-stack development and cybersecurity. I enjoy turning complex problems into simple, beautiful, and intuitive designs.",
    your_img_url:  myImage, 
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am a versatile software engineer with a strong focus on full-stack development. I thrive on building robust and scalable applications using technologies like React, Python, Flask, and FastAPI.",
};

const worktimeline = [
    {
        jobtitle: "Software Engineer",
        where: "StudyBuddy",
        date: "2025",
    },
    {
        jobtitle: "Full Stack Developer",
        where: "Bodaa Riders Saving App",
        date: "2024",
    },
    {
        jobtitle: "Full stack Developer",
        where: "Automated Donation Platform",
        date: "2024",
    },
];

const skills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
    { name: "React Native", icon: <FaReact className="text-blue-500" /> },
    { name: "Python", icon: <FaPython className="text-green-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    { name: "Flask", icon: <SiFlask className="text-black" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-green-500" /> },
];

const services = [
    {
        title: "Web Development",
        description: "Building responsive and dynamic websites with modern technologies like React and Flask.",
    },
    {
        title: "Mobile App Development",
        description: "Creating cross-platform mobile applications using React Native.",
    },
];

const dataportfolio = [
    {
        img: studybuddy, 
        description: "StudyBuddy - An E-learning platform that helps students across the country access quality education.",
        link: "https://studybuddy.africa",
    },

    {
        img: Tracewise, 
        description: "Tracewise is a decentralized SaaS platform enabling transparent, traceable supply chain management, leveraging blockchain for data integrity and security.",
        link: "tracewise.vercel.app",
    },
];

const contactConfig = {
    YOUR_EMAIL: "maxwelkirimii@gmail.com",
    YOUR_FONE: "+254704400263",
    description: "Feel free to reach out to me for collaboration or project inquiries. I'm always open to new opportunities!",
    YOUR_SERVICE_ID: "service_pys2gte",
    YOUR_TEMPLATE_ID: "template_d3aq21q",
    YOUR_USER_ID: "pK5655bhceemsy3P-",
};

const socialprofils = {
    github: "https://github.com/hamaxwel",
    linkedin: "https://linkedin.com/in/maxwelkirimi",
    twitter: "https://twitter.com/hamaxwel",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
