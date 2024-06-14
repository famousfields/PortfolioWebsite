import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  nodejs,
  mongodb,
  git,
  maximumEntertainment,
  knighted,
  threejs,
  unrealEngine,
  cpp,
  akai,
  disney,
  aslive
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Game Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Optimist",
    icon: backend,
  },
  {
    title: "Level Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name:"Unreal Engine",
    icon: unrealEngine,
  },
  {
    name:"C++",
    icon: cpp,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "Dealers Associate",
    company_name: "Knighted Gaming",
    icon: knighted,
    iconBg: "#E6DEDD",
    date: "April 2021 - January 2022",
    points: [
      "I was given the role of the banker at a poker room, this involved extreme attention to detail when calculating payments on a per hand basis for players at the table.",
      "Collaborated in meetings and worked as part of a team to guarantee and maintain integrity in the poker room at all times.",
      ,
    ],
  },
  {
    title: "Gameplay Engineer Intern",
    company_name: "Maximum Games",
    icon: maximumEntertainment,
    iconBg: "#383E56",
    date: "August 2023 - January 2024",
    points: [
      "Worked on the Development and implementation of playtest features in dynamic environments, which includes gameplay environments with live actors.",
      "Was involved in a large scale project that consisted of a database, communication with team members, and agile development methodologies.",
      "Imported and integrated animations and gameplay. ",
      "Improved debugging skills through the identification and resolution of software issues. ",
      "Documented and introduced UE and UX.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "My nephew",
    name: "Greg Fields",
    designation: "Software Engineer",
    company: "Walt Disney Company",
    //image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
 
];

const projects = [
  {
    name: "Akai's Adventures",
    description:
      "Level based action and adventure game using Unreal Engine 5 and C++",
    tags: [
      {
        name: "Unreal Engine 5",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "Visual Studio",
        color: "pink-text-gradient",
      },
    ],
    image: akai,
    source_code_link: "https://github.com/",
  },
  {
    name: "ASLive",
    description:
      "Natural language processing browser extension that aims to bridge the gap in communication for ASL users. Providing live ASL-to-text translation through computer vision and machine learning",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Mediapipe",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
    ],
    image: aslive,
    source_code_link: "https://github.com/NrgNinja/ASLive",
  },
  {
    name: "Swift Jump",
    description:
      "Action and adventure endless runner with dynamic environments and live actors",
    tags: [
      {
        name: "Unreal Engine",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "Visual Studio",
        color: "pink-text-gradient",
      },
    ],
    image: disney,
    source_code_link: "https://github.com/famousfields/DisneyPlusClone",
  },
];

export { services, technologies, experiences, testimonials, projects };
