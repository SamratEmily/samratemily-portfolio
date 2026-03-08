
import { Project, Achievement, Experience, SkillGroup, PersonalProject } from './types';

export const PERSONAL_INFO = {
  name: "MD. Samrat Hossen",
  role: "Software Engineer",
  email: "nayakemily50@gmail.com",
  phone: "01833249268",
  location: "Mirpur, Dhaka",
  github: "https://github.com/SamratEmily",
  linkedin: "https://linkedin.com/in/samrat-hossen",
  coverPhoto: "/assets/cover-photo.jpg", // Add your cover photo here
  liveProjectUrl: "https://your-portfolio-url.com", // Add your live project URL here
  summary: "Detail-oriented and versatile Software Engineer specializing in WordPress plugin development, backend customization, and API integration. Adept in PHP, React.js, and Vue.js, with a strong foundation in data structures, algorithms, and problem-solving."
};

export const SKILLS: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["C", "C++", "PHP", "MySQL", "JavaScript", "TypeScript"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React.js", "Vue.js", "Laravel", "Tailwind CSS"]
  },
  {
    category: "Web Technologies",
    items: ["HTML5", "CSS3", "REST APIs", "JSON", "Ajax"]
  },
  {
    category: "CMS & Platforms",
    items: ["WordPress", "WooCommerce", "Dokan", "WePos"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "WordPress Developer",
    company: "weLabs Ltd. (Sister Concern of weDevs Ltd.)",
    duration: "May 2024 – Present",
    description: "Specializing in WordPress plugin development, backend customization, and high-performance API integration for enterprise-level products like Dokan and WePos."
  }
];

export const PROJECTS: Project[] = [
  {
    title: "FajrFair - Online Books Store",
    technologies: ["HTML", "CSS", "JS", "PHP", "MySQL"],
    description: "Turned a Figma design into a functional multi-page e-commerce bookstore with smooth browsing and easy checkout.",
    tools: ["Figma", "WooCommerce"],
  },
  {
    title: "SoHa-Living",
    technologies: ["WordPress", "PHP"],
    description: "Built numerous REST APIs for project management, HR management, and Portfolio management.",
    tools: ["REST API, PHP"]
  },
  {
    title: "Booxos",
    technologies: ["WordPress", "PHP", "Vue.js"],
    description: "Integrated Vue.js to generate and download PDFs using vue-html2pdf. Customized settings for WooCommerce, WePos, and Dokan.",
    tools: ["Woocommerce","Dokan","vue-html2pdf"]
  },
  {
    title: "Vengo",
    technologies: ["WordPress", "PHP"],
    description: "Customized automated financial tools, flexible coupon management, and cron job schedulers for WooCommerce and Dokan.",
    tools: ["Woocommerce","vue-html2pdf"]
  },
  {
    title: "Exernium",
    technologies: ["WordPress", "PHP"],
    description: "Developed REST APIs to customize WooCommerce and Dokan for use in a Mobile App environment.",
    tools: ["Dokan","Postman"]
  },
  {
    title: "Bazaarica-Kozmetica",
    technologies: ["WordPress", "PHP"],
    description: "Extended lots of features based on WooCommerce and dokan Plugins.",
    tools: ["Dokan","WooCommerce"]
  }
];

export const PersonalProjects: PersonalProject[] = [
  {
    title: "Mail Tracker",
    technologies: ["WordPress Plugin","HTML", "CSS", "JS", "PHP", "MySQL"],
    description: "Created a plugin to track emails sent from WooCommerce, Wordpress which are triggered by wp_mail function.",
    tools: ["Wordpress"],
    link: "https://wordpress.org/plugins/samrat-emily-mail-tracker/",
  },
  {
    title: "Website Cache Plugin",
    technologies: ["WordPress Plugin","HTML", "CSS", "JS", "PHP", "MySQL"],
    description: "Created a simple lightweight plugin to cache Pages, minifying html css js.",
    tools: ["WordPress"],
    link: "https://github.com/samratEmily/samrat-website-cache/",
  },
  {
    title: "URL Blocker/Redirect",
    technologies: ["WordPress Plugin","HTML", "CSS", "JS", "PHP", "MySQL"],
    description: "Created a simple lightweight plugin to block or redirect any specific ULR.",
    tools: ["WordPress"],
    link: "https://github.com/samratEmily/url-blocker/",
  },
  {
    title: "Profit Calculation for WooCommerce",
    technologies: ["WordPress Plugin","HTML", "CSS", "JS", "PHP", "MySQL"],
    description: "Created a WooCommerce plugin extention to calculate profit. Added an admin dashboard to see and export reports.",
    tools: ["WooCommerce"],
    link: "https://wordpress.org/plugins/samrat-profit-calculator-for-woocommerce/",
  },
  
  {
    title: "Sohoj Biye",
    technologies: ["laravel","React.js", "Tailwind CSS"],
    description: "It serves as a marriage helper website with a strong privacy and verification",
    tools: ["laravel","React.js"],
    link: "https://github.com/samratEmily/sohoj-biye/",
  },
  {
    title: "Donation Campaign Platform",
    technologies: ["laravel","React.js", "Tailwind CSS"],
    description: "It serves as a donation platform for non-profit organizations. It allows users to donate to various causes and organizations by maintaining campaign and donation history.",
    tools: ["laravel","React.js"],
    link: "https://github.com/samratEmily/donation/",
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { rank: "7th", contest: "CoU Intra Programming Contest 2019", team: "CoU_3_Dimension" },
  { rank: "12th", contest: "NWU CSE FEST 2023 (IUPC)", team: "CoU_LastShot" },
  { rank: "17th", contest: "Britannia University Inter University Contest 2020", team: "CoU_3_Dimension" },
  { rank: "45th", contest: "Tech Carnival 1.0, CUET 2021 (Regional)", team: "CoU_3_Dimension" },
  { rank: "137th", contest: "NCPC 2023", team: "CoU_LastShot" }
];

export const PROBLEM_SOLVING = {
  contests: "7+ National and Regional level programming contests including NCPC, ICPC preli.",
  onlineContests: "150+ online programming contests (Codeforces, Atcoder, etc.)",
  problemsSolved: "1500+ problems solved across Codeforces, LightOJ, Leetcode, Spoj."
};
