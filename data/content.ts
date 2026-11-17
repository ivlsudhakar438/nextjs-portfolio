export type Project = { name: string; industry: string; region: string; stack: string[]; desc: string };

// Edit your content here
export const links = {
  linkedin: "https://www.linkedin.com/in/v-l-sudhakar-inampudi-63527944",
  github: "https://github.com/ivlsudhakar438",
};

export const experience = [
  { role: "Vue Developer (freelance, US client)", org: "Remote", when: "Oct 2025 – Apr 2026",
    points: ["Resolved production issues and optimized application performance.", "Built reusable, scalable UI components with Vue.js and Nuxt.js.", "Integrated RESTful APIs and rendered dynamic data across modules."] },
  { role: "Software Engineer", org: "Capital Numbers Infotech Limited", when: "Nov 2020 – Oct 2025",
    points: ["Built large-scale Vue.js and Nuxt.js applications with modular components.", "Implemented TypeScript for type-safe codebases.", "Improved performance through code splitting and lazy loading."] },
  { role: "Front-End Developer", org: "Orotron Technologies", when: "Jan 2019 – Nov 2020",
    points: ["Developed interactive UIs with Vue.js and Bootstrap for multiple client projects.", "Designed dynamic UI elements integrated with backend services."] },
  { role: "Junior Software Engineer", org: "Axon ML Private Ltd", when: "Oct 2016 – Dec 2018",
    points: ["Developed dashboards with R and R Shiny.", "Built interactive UIs with Angular 5."] },
];

export const projects: Project[] = [
  { name: "Alhisba", industry: "Real estate", region: "Kuwait", stack: ["Vue 3", "Nuxt.js", "Pinia", "TypeScript"], desc: "Dashboards and API integrations for real-time property analytics, with efficient state handling and dynamic routing." },
  { name: "Market Alert Pro", industry: "Finance", region: "Analytics", stack: ["Vue 2", "Tailwind CSS", "Vuex"], desc: "Real-time financial dashboards and alert systems, tuned for performance and responsiveness." },
  { name: "Hoopla", industry: "Education", region: "Insurance", stack: ["Vue 2", "Bootstrap", "Vuex"], desc: "Role-based access and state synchronization across modules." },
  { name: "Nutron", industry: "E-commerce", region: "New Zealand", stack: ["Vue 2", "Element UI", "Vuex"], desc: "Authentication and checkout flows, with Vuex store modules for API-driven data." },
  { name: "Rubato", industry: "E-commerce", region: "Watches", stack: ["Vue 2", "Razorpay", "Element UI"], desc: "Secure payments through the Razorpay gateway, plus product filtering and navigation." },
  { name: "Interviewtask", industry: "GitHub projects", region: "Vue", stack: ["Vue", "JavaScript"], desc: "Interview call task built with Vue. Public repository on GitHub." },
  { name: "learn-react", industry: "GitHub projects", region: "React", stack: ["React", "JavaScript"], desc: "React practice project built with JavaScript. Public repository on GitHub." },
  { name: "L-square-QTify", industry: "GitHub projects", region: "Music streaming", stack: ["JavaScript"], desc: "Music streaming web app, forked from the CrioDo QTify project. Public repository on GitHub." },
  { name: "todolist", industry: "GitHub projects", region: "Task management", stack: ["JavaScript"], desc: "Todo list app for adding and managing tasks. Public repository on GitHub." },
];

export const skills = [
  ["Frameworks", "Vue.js 2 and 3, Nuxt.js, React.js"],
  ["Languages", "JavaScript, TypeScript, HTML5, CSS3"],
  ["State management", "Pinia, Vuex"],
  ["Styling and UI", "Tailwind CSS, Bootstrap 4 and 5, Element UI"],
  ["Data and APIs", "RESTful APIs, Axios, data-driven components"],
  ["Tools", "Git, VS Code, Postman"],
];

export const education = [
  { degree: "Master of Computer Applications (MCA)", school: "CJJ College, Guntur. Acharya Nagarjuna University." },
  { degree: "Bachelor of Science (B.Sc)", school: "KVR College, Nandigama. Acharya Nagarjuna University." },
];
