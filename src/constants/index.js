import { meta, shopify, starbucks, tesla } from "../assets/images";
import edu from "../assets/images/edu.jpg";
import udemy from "../assets/images/udemy.png";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  //   {
  //     imageUrl: motion,
  //     name: "Motion",
  //     type: "Animation",
  //   },
  //   {
  //     imageUrl: mui,
  //     name: "Material-UI",
  //     type: "Frontend",
  //   },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  //   {
  //     imageUrl: sass,
  //     name: "Sass",
  //     type: "Frontend",
  //   },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  //   {
  //     imageUrl: typescript,
  //     name: "TypeScript",
  //     type: "Frontend",
  //   },
];

export const experiences = [
  {
    title: "The Complete Full-Stack Web Development",
    company_name: "Eduonix",
    icon: edu,
    iconBg: "#accbe1",
    date: "March 2023 - April 2024",
    points: [
      "Explore full-stack web development with Edunix's immersive course, covering HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. Gain hands-on experience in creating dynamic web applications and mastering both front-end and back-end technologies. Unlock your potential as a skilled full-stack developer and embark on a rewarding journey in the world of web development.",
    ],
  },
  {
    title: "The Complete Web Development Bootcamp",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#accbe1",
    date: "March 2023 - April 2024",
    points: [
      "Explore full-stack web development with Edunix's immersive course, covering HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. Gain hands-on experience in creating dynamic web applications and mastering both front-end and back-end technologies. Unlock your potential as a skilled full-stack developer and embark on a rewarding journey in the world of web development.",
    ],
  },
  {
    title: "The Complete Android Developer Course-Build 23 Apps!",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#accbe1",
    date: "March 2021 - April 2022",
    points: [
      "Embark on a transformative journey in Android development with 'The Complete Android Developer Course-Build 23 Apps!' Master Java, XML, SQLite, Firebase, and Google Maps API to craft 23 real-world Android applications. Gain hands-on experience in app development and unleash your creativity with Material Design. Elevate your skills and become a proficient Android developer through this comprehensive course.",
    ],
  },
  {
    title: "100 Days of Python",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#accbe1",
    date: "Present",
    points: [
      "Embark on a Python journey with '100 Days of Python,' a comprehensive course covering Python fundamentals, data structures, algorithms, and more. Dive into real-world projects and challenges to reinforce your learning. Master Python programming and build a strong foundation in software development. Join a vibrant community and level up your coding skills in just 100 days!",
    ],
  },
  //   {
  //     title: "React Native Developer",
  //     company_name: "Tesla",
  //     icon: tesla,
  //     iconBg: "#fbc3bc",
  //     date: "Jan 2021 - Feb 2022",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#b7e4c7",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#a2d2ff",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Pranavjoshi8999",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/pranavjoshi8999",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "RestoGuru",
    description:
      " RestoGuru is a web-based application designed for restaurant and cafe owners with features such as a Powerful Dashboard, Billing, Inventory, and Expenses management.",
    link: "https://github.com/Pranavjoshi8999/RestoGuru-Admin.git",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Aesthetic(E-com site)",
    description:
      "Aesthetic Express: A cutting-edge e-commerce site blending style and functionality. Built with HTML, CSS, JavaScript, and React.js for a visually appealing and interactive interface. Powered by Express.js for efficient server-side operations, ensuring fast and secure transactions. Experience seamless shopping with Aesthetic Express, where aesthetics meet technology.",
    link: " ",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Psychological Disorders and Threats Detection using the Twitter Dataset",
    description:
      "Research that combines mental health, sentiment analysis, the identification of hate speech, and suicidal behavior on the Twitter dataset.",
    link: " ",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Jeta Group Static web-site",
    description:
      "Built a complete static web-site,for Jeta Group to be used to show the information",
    link: " ",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "URL-QR generater",
    description: "Develope For converting url into QR code .",
    link: " ",
  },
  //{
  //iconUrl: summiz,
  //theme: "btn-back-yellow",
  //name: "AI Summarizer Application",
  //description:
  // "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
  //link: "https://github.com/adrianhajdin/project_ai_summarizer",
  //},
];

// export const courses = [
//     name: "Jeta Group",
//     description:"",
// ];
