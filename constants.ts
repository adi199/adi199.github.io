
import { ExperienceItem, ProjectItem, SkillCategory } from './types';

export const RESUME_URL = "https://drive.google.com/file/d/15OL7-ICUACfg_yiMwx422BQ6H29636FF/view?usp=sharing";

export const EXPERIENCE: ExperienceItem[] = [
  {
    year: "May 2024 - Present",
    role: "Senior Software Engineer",
    company: "Gently US Inc",
    location: "Los Angeles, CA",
    achievements: [
      "Designing, implementing emerging feature & resolving critical bugs for Warehouse & Transportation Management Systems",
      "Developed phone number masking service using Twilio Voice API to ensure the privacy of personally identifiable information",
      "Engineered solution to optimize Last Mile delivery routing, achieving 50% increase in operational efficiency",
      "Conducted comprehensive data collection & analysis, presenting insights through interactive dashboards on Grafana Cloud",
      "Designed intricate order scheduling logic in the Transportation Management System, streamlining order life cycle"
    ],
    isCurrent: true
  },
  {
    year: "Aug 2023 - May 2024",
    role: "Software Developer",
    company: "Helping Hands",
    location: "AZ, USA",
    achievements: [
      "Developed professional social media platform using MERN stack, serving 1000+ users, fostering professional networking",
      "Crafted RESTful APIs utilizing Express.js, handling staggering 106 QPS, optimizing user experience and system efficiency",
      "Deployed ML for resume skills extraction, boosting job recommendations by 30%, showcasing innovative talent acquisition",
      "Applied Identity Access Management capability through JWT/OAUTH, resulting in advance security enhancement",
      "Built Mongodb/Node.js notification system handling 500 daily active users, enabling seamless real-time communication"
    ]
  },
  {
    year: "Jun 2020 - Aug 2021",
    role: "Software Developer",
    company: "Carrefour",
    location: "Dubai, UAE",
    achievements: [
      "Cut resource costs by 30% via designing and developing an in-house Spring Boot Seller management micro-service",
      "Boosted data processing with Azure ServiceBus, optimizing ETL pipelines across 6 microservices for enhanced performance",
      "Achieved 60% cost reduction through data analysis and Python script development for migration procedures",
      "Improved software reliability and testing effectiveness by achieving a 90% code coverage, ensuring robust code quality",
      "Strengthen existing archive system by creating a robust and high throughput micro-service in Spring Boot that routinely processes 10+ GB files and keeps a detailed record for each event.",
      "Boasted sales by implementing product variants to existing product models in SAP Hybris."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "AI Book Recommendation System",
    description: "System leverages word embeddings for semantic understanding, Retrieval-Augmented Generation (RAG) to combine knowledge retrieval with generative models, and vector search algorithms like FAISS for efficient similarity matching, enabling precise, context-aware personalized recommendation",
    image: "https://picsum.photos/seed/analytics/800/400",
    tags: ["Python", "RAG", "AI"]
  },
  {
    title: "AI-Powered Notebook Assistant",
    description: "Architected an AI-powered notebook assistant leveraging Langchain, Google Gemini, and PostgreSQL for efficient data processing and context extraction. Integrated with cloud-based systems like AWS Lambda and S3 for real-time document analysis, enabling seamless knowledge management and automation",
    image: "https://picsum.photos/seed/gateway/800/400",
    tags: ["AI", "LangChain", "PostgreSQL", "AWS"]
  },
  {
    title: "Java-Based Database Management System",
    description: "Designed a high-performance database management system (RDBMS) from the ground up using Java. Incorporated optimized data structures such as B+ Trees to enhance data storage, manipulation, and retrieval processes. Achieved a 15% improvement in query performance and reduced disk reads by 30%, demonstrating significant efficiency gains",
    image: "https://picsum.photos/seed/gateway/800/400",
    tags: ["Java", "Algorithms"]
  },
  {
    title: "Pose correction Trainer",
    description: "Programmed a Python application to identify and track body joints with minimum 50% confidence by utilizing MediaPipe.Effectively identified and categorized inaccurate poses with an 96% precision, using KNN model",
    image: "https://picsum.photos/seed/gateway/800/400",
    tags: ["Python", "Computer Vision", "KNN"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "devices",
    skills: ["React", "TypeScript", "Tailwind", "Next.js", "Redux"],
    colorClass: "from-purple-500/20 to-blue-500/10 text-purple-400"
  },
  {
    title: "Backend",
    icon: "dns",
    skills: ["Java", "Node.js", "Spring Boot", "Python", "Go", "Postgres", "Redis", "GraphQL"],
    colorClass: "from-blue-500/20 to-purple-500/10 text-blue-400"
  },
  {
    title: "DevOps",
    icon: "settings_suggest",
    skills: ["Docker", "Github Actions", "AWS", "CI/CD", "Terraform"],
    colorClass: "from-pink-500/20 to-orange-500/10 text-pink-400"
  }
];
