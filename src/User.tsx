import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
const Info = {
  name: "Piyush Kaushal",
  stack: [
    "Front end Developer"
  
  ],
  bio: "I am a second-year B.Tech student at Rishihood University (Newton School of Technology), My academic journey is focused on full-stack development, where I am currently expanding my skill set in both front-end and back-end technologies. I am passionate about creating dynamic and user-friendly web applications that enhance user experiences. With a solid foundation in programming languages such as HTML, CSS, and JavaScript, I am eager to delve deeper into frameworks like React. I am dedicated to continuous learning and growth, looking forward to applying my skills in real-world projects and contributing to the tech community."
};

const ProjectInfo = [
  {
    title: "Shoppy",
    desc: "A dynamic shopping website built with React, featuring a responsive design for seamless use across devices. Includes real-time shopping cart management with an intuitive user interface.",
    img: "/note.png", // Changed to 'img' for consistency
    live: true,
    technologies: ["HTML", "CSS","JS","React"],
    link: "https://shopping-website-five-red.vercel.app/",
    github: "https://github.com/Piyush-NST/Shopping_website",
  },
  
  {
    title: "Tomato",
    desc: "Developed a responsive food delivery app with an intuitive interface, enabling real-time order tracking and user feedback for enhanced customer satisfaction.",
  
    live: true,
    technologies: ["HTML", "CSS","React JS"],
    link: "https://delivery-plum.vercel.app/",
    github: "https://github.com/Piyush-NST/Delivery",
  },
];

const skillsData = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Tailwind",
  "MySQL",
  "Git"
  
];

// AVAILABLE SKILLS

/* 
  HTML
  CSS
  JS 
  React
  Next JS
  Nuxt JS
  Node JS
  Vue
  Angular
  Docker
  Photoshop
  Illustrator
  Svelte
  GCP
  Azure
  Fastify
  Haxe
  Ionic
  Markdown
  Microsoft Office
  Picsart
  Sketch
  Unity
  WolframAlpha
  Adobe XD
  After Effects
  Bootstrap
  Bulma
  CapacitorJs
  Coffeescript
  MemSQL
  C
  C++
  C#
  Python
  Java
  Julia
  Matlab
  Swift
  Ruby
  Kotlin
  Go
  PHP
  Flutter
  Dart
  Typescript
  Swift
  Git
  Figma
  Canva
  Ubuntu
  Bootstrap
  MongoDB
  Tailwind
  ViteJS
  VuetifyJS
  MySQL
  PostgreSQL
  AWS
  Firebase
  Blender
  Premiere Pro
  Adobe Audition
  Deno
  Django
  Gimp
  Graphql
  Lightroom
  MaterialUI
  Nginx
  Numpy
  OpenCV
  Pytorch
  Selenium
  Strapi
  Tensorflow
  Webex
  Wordpress
*/

const socialLinks = [
  { link: "https://github.com/Piyush-NST", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/piyush-kaushal-6232b82b8/",
    icon: IconBrandLinkedin,
  },
  {
    link: "https://www.instagram.com/piyushkaushal30/",
    icon: IconBrandInstagram,
  },
  
  { link: "https://leetcode.com/u/Piyushk12/", icon: IconBrandLeetcode }
];


export const EducationInfo = [
  {
    id: 0,
    img: "images.png",
    school: "Newton School of Technology",
    date: "August 2023 - April 2027",
    desc: "I am currently pursuing a B.Tech in Computer Science with a specialization in AI and Machine Learning from Rishihood University, in collaboration with Newton School of Technology. My academic journey has equipped me with a strong foundation in programming languages and web technologies, including Python, HTML, CSS, JavaScript, and React. I am passionate about leveraging data to develop impactful solutions and am eager to apply my knowledge to real-world challenges. I am committed to continuous learning in the field of programming and aspire to contribute meaningfully to technology-driven innovations. .",
    degree: "Bachelor of Technology - CS and AI",
  },
  {
    id: 1,
    img: "dps.png",
    school: "Duhan Public School, Jassia",
    date: "May 2021 - Apr 2022",
    desc: "I completed my class 12 education at Duhan Public School, Jassia where I studied Science with Information Technology.",
    degree: "Higher Secondary Certificate (Class 12)",
  },
  {
    id: 2,
    img: "dgv.jpeg",
    school: "DGV Sr Sec Public School,Rohtak",
    date: "May 2019 - Apr 2020",
    desc: "I completed my class 10 education at St.Judes College, Unnao where I studied Science with Computer Application.",
    degree: "Secondary School Certificate (Class 10)",
  },
];

export { Info, ProjectInfo, socialLinks, skillsData };
