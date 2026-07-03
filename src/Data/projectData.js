import projectImg1 from "../assets/Images/projectImg1.png";
import projectImg2 from "../assets/Images/projectImg2.png";
import projectImg3 from "../assets/Images/projectImg3.png";
import projectImg4 from "../assets/Images/projectImg4.png";
import projectImg5 from "../assets/Images/projectImg5.png";
import projectImg6 from "../assets/Images/projectImg6.png";
import projectImg7 from "../assets/Images/projectImg7.png";

import reactIcon from "../assets/Icons/reactIcon.png";
import jsIcon from "../assets/Icons/jsIcon.png";
import cssIcon from "../assets/Icons/cssIcon.png";
import figmaIcon from "../assets/Icons/figmaIcon.png";

const projectData = [
 {
  id: 1,
  title: "Portfolio",
  category: "Frontend",
  image: projectImg1,

  description:
    "This project is a portfolio website developed using ReactJS. The website is designed to showcase skills, projects, and services with a modern, responsive layout.",

  technologies: [
    reactIcon,
    jsIcon,
    cssIcon,
    figmaIcon,
  ],

  demo: "https://your-demo-link.com",

  github: "https://github.com/yourusername/portfolio",

  features: [
  {
    title: "Responsive Design",
    description:
      "The website is designed to be fully responsive, ensuring a seamless user experience across desktops, tablets, and mobile devices. Every section automatically adjusts to different screen sizes while maintaining a clean and consistent layout.",
  },
  {
    title: "Modern UI/UX",
    description:
      "The portfolio features a modern and visually appealing user interface with intuitive navigation, balanced typography, and a consistent color scheme. The clean design enhances usability while providing an engaging browsing experience.",
  },
],
 },

  {
    id: 2,
    title: "Weather App",
    category: "Full Stack",
    image: projectImg2,
    description:
      "Developed a full-stack weather application using NodeJS and ReactJS. Provides real-time weather information.",
    technologies: [reactIcon, jsIcon, cssIcon, figmaIcon],
  },

  {
    id: 3,
    title: "Cred Clone",
    category: "Frontend",
    image: projectImg3,
    description:
      "Crafted a responsive CRED landing page using ReactJS, styled with CSS to closely match the original design.",
    technologies: [reactIcon, jsIcon, cssIcon, figmaIcon],
  },

  {
    id: 4,
    title: "User Authentication System",
    category: "Full Stack",
    image: projectImg4,
    description:
      "Built a secure login and registration system with authentication using ReactJS and backend integration.",
    technologies: [reactIcon, jsIcon, cssIcon, figmaIcon],
  },

  {
    id: 5,
    title: "Todo List",
    category: "Frontend",
    image: projectImg5,
    description:
      "Created a responsive Todo List application with task management features using ReactJS.",
    technologies: [reactIcon, jsIcon, cssIcon, figmaIcon],
  },

  {
    id: 6,
    title: "QR Scanner",
    category: "Frontend",
    image: projectImg6,
    description:
      "Designed a QR Scanner interface using ReactJS with a clean, responsive layout.",
    technologies: [reactIcon, jsIcon, cssIcon, figmaIcon],
  },

  {
    id: 7,
    title: "Playlist Generator",
    category: "Frontend",
    image: projectImg7,
    description:
      "Developed a playlist generator UI with a modern design using ReactJS and CSS.",
    technologies: [reactIcon, jsIcon, cssIcon, figmaIcon],
  },
];

export default projectData;