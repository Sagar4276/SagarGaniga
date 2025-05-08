// If your images are in the public folder - path is relative to public folder
export const user = {
  name: "Sagar Ganiga",
  title: "Full Stack Web Developer",
  email: "ganigasagar7@gmail.com",
  phone: "+91 996449904",
  logo: "/images/logo-removebg-preview.png",
  image: "/images/personal-image.jpeg",
  socials: [
    { icon: "fa-github", url: "https://github.com/Sagar4276" },
    { icon: "fa-linkedin", url: "https://www.linkedin.com/in/sagar-ganiga-aa8512264" },
    { icon: "fa-instagram", url: "https://www.instagram.com/ganigasagar7/" }
  ],
  resume: "/images/Sagar Ganiga - Resume.pdf"
};

export const about = {
  description: `I am Currently pursing my Btech in Computer Science and Enginnering Course from RV Institiute of Technology and Management, Bangalore. 
  
  I am currently working on full stack, Generative AI, Data Structures and have a quick enthusiasm in visualising different sorts of Algorithms`
};

export const tabs = [
  {
    label: "Skills",
    id: "skills",
    content: [
      {
        title: "Web Development",
        details: "HTML, CSS, JavaScript, Node.js, Express.js, EJS, jQuery, React.js"
      },
      {
        title: "Programming Languages",
        details: "C, C++, Java, Python, MySQL, PSQL, MongoDB, PHP"
      },
      {
        title: "Data Analysis",
        details: "Numpy, Matplotlib, Seaborn, Pandas, Bokeh"
      }
    ]
  },
  {
    label: "Certifications",
    id: "certification",
    content: [
      { title: "Full Stack Web Development Bootcamp", details: "from Udemy" },
      { title: "Python - Generative AI, Data Science", details: "Udemy" },
      { title: "Data Structures and Algorithms", details: "From Udemy" }
    ]
  },
  {
    label: "Education",
    id: "education",
    content: [
      { 
        title: "2022-2026 Bachelor of Engineering", 
        details: "R V Institute of Technology and Management Bangalore\nCGPA: 8.6" 
      },
      { 
        title: "2020-2022 Pre University Education", 
        details: "Sri Venkatramana English Medium PU College Kundapur\nPercentage : 94%" 
      }
    ]
  }
];

export const projects = [
  {
    title: "Box Shadow Visualizer",
    desc: "Visualise the CSS box shadow property using this project",
    img: "/images/projects/images.jpeg",
    link: "/images/projects/2.Box Shadow Generator/index.html",
    github: "https://github.com/Sagar4276/BoxShadow", // Added
    tech: ["HTML", "CSS", "JavaScript"] // Added
  },
  {
    title: "Notes Application",
    desc: "A simple note app which helps us to keep our notes",
    img: "/images/projects/images.jpeg",
    link: "/images/projects/3. Notes Application/index.html",
    github: "https://github.com/Sagar4276/NotesApp", // Added
    tech: ["React", "Local Storage", "CSS"] // Added
  },
  {
    title: "Gradient Generator",
    desc: "Similar to box shadow i have created a gradient generator which i have made it such that you can check different types of gradients",
    img: "/images/projects/tree-736885_640.jpg",
    link: "/images/projects/5. Gradient Generator/index.html",
    github: "https://github.com/Sagar4276/GradientGen", // Added
    tech: ["JavaScript", "CSS", "HTML"] // Added
  }
];

export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  },
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 }
  },
  logoSpin: {
    animate: { 
      rotateY: [0, 180, 360],
      scale: [1, 1.1, 1]
    },
    transition: { 
      repeat: Infinity, 
      repeatType: "loop",
      duration: 6,
      ease: "easeInOut" 
    }
  },
  pulse: {
    animate: { 
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0 rgba(229, 9, 20, 0)",
        "0 0 20px rgba(229, 9, 20, 0.5)",
        "0 0 0 rgba(229, 9, 20, 0)"
      ]
    },
    transition: { 
      repeat: Infinity, 
      duration: 2,
      ease: "easeInOut" 
    }
  }
};

export const theme = {
  colors: {
    primary: "#e50914",
    secondary: "#b20710",
    dark: "#141414",
    darker: "#0b0b0b",
    light: "#ffffff",
    gray: "#808080",
    lightGray: "#d3d3d3",
    overlay: "rgba(0,0,0,0.7)"
  },
  shadows: {
    glow: "0 0 10px #e50914, 0 0 20px #e50914, 0 0 30px #e50914",
    subtleGlow: "0 0 5px rgba(229, 9, 20, 0.5)",
    card: "0 10px 30px -15px rgba(0, 0, 0, 0.5)",
    hover: "0 10px 30px -10px rgba(229, 9, 20, 0.4)"
  },
  transitions: {
    fast: "0.2s ease",
    medium: "0.3s ease",
    slow: "0.5s ease",
    bounce: "0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  },
  gradients: {
    primary: "linear-gradient(to right, #e50914, #b20710)",
    dark: "linear-gradient(to bottom, #141414, #0b0b0b)",
    overlay: "linear-gradient(to top, rgba(0,0,0,1), transparent)"
  }
};