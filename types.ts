
export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  location: string;
  achievements: string[];
  isCurrent?: boolean;
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  colorClass: string;
}

// Fix: Added missing Message interface for chatbot components
export interface Message {
  role: 'user' | 'model';
  text: string;
}
