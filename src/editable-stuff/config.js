// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Rafiya",
  middleName: "",
  lastName: "Shahana",
  message:
    " A Front-End Web Developer passionate about creating interactive applications and experiences on the web.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/rafiyashahana",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/rafiya.shahana23",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/t_shahana23/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/rafiya-shahana/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/t_shahana23",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/rafiyashahana.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/rafiyashahana.png"),
  imageSize: 375,
  message:
    " Hi, my name is Rafiya and I'm a web developer with a passion for front end development and design. My main expertise is in front-end development, which includes a firm understanding of HTML, CSS, and Javascript. I also have been expanding my skills in different modern frameworks, libraries, and tools. When I'm not glued to the computer, I find solace in the pages of a new book or the engaging world of insightful tech blogs.",

  resume: "https://rafiyashahana.github.io/online-resume-react/",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "rafiyashahana", //i.e."johnDoe12Gh"
  reposLength: 10,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/rafiyashahana.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/rafiyashahana.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "HTML", value: 90 },
    { name: "CSS/ SASS", value: 89 },
    { name: "JavaScript/ ES6", value: 84 },
    { name: "React JS", value: 80 },
    { name: "TypeScript", value: 80 },
    { name: "Bootstrap", value: 85 },
    { name: "C/C++", value: 45 },
    { name: "SQL", value: 45 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Front-End / Web Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "rafiyashahana@gmail.com",
};

const experiences = {
  show: true,
  // heading: "Experiences",
  heading: "Skills",
  // data: [
  //   {
  //     role: "React Developer", // Here Add Company Name
  //     companylogo: require("../assets/img/algotrady.png"),
  //     webPage: "https://www.algotrady.io/",
  //     date: "December 2020 – Present",
  //   },
  //   {
  //     role: "Freelance",
  //     webPage: "https://analysiscopilot.com/",
  //     companylogo: require("../assets/img/analysiscopilot.png"),
  //     date: "November 2022",
  //   },
  // ],

  data: [
    {
      name: "ReactJS",
      icon: "devicon-react-original colored",
    },
    {
      name: "HTML5",
      icon: "devicon-html5-plain colored",
    },
    {
      name: "CSS3",
      icon: "devicon-css3-plain colored",
    },
    {
      name: "JavaScript",
      icon: "devicon-javascript-plain colored",
    },
    {
      name: "Tailwind",
      icon: "devicon-tailwindcss-plain colored",
    },
    {
      name: "SASS",
      icon: "devicon-sass-original colored",
    },
    {
      name: "Bootstrap",
      icon: "devicon-bootstrap-plain colored",
    },
    {
      name: "Typescript",
      icon: "devicon-typescript-plain colored",
    },
    {
      name: "Redux",
      icon: "devicon-redux-original colored",
    },
    {
      name: "Git",
      icon: "devicon-git-plain colored",
    },
    // {
    //   name: "Jest",
    //   icon: "devicon-jest-plain colored",
    // },
  ],
};

// // Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
