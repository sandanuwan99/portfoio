export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Enterprise ERP / FinTech' | 'Enterprise Software' | 'Enterprise Systems' | 'Retail / POS' | 'Distributed Systems';
  summary: string;
  problem: string;
  solution: string;
  architecture: string;
  myContribution: string;
  engineeringChallenges: string[];
  businessRequirements: string[];
  databaseDesign: {
    description: string;
    schemaHighlights: string[];
    storedProcedures?: string[];
  };
  apiDesign: {
    pattern: string;
    endpoints: { method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'; path: string; description: string }[];
  };
  testingStrategy: string;
  deploymentStrategy: string;
  keyLearnings: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl: string;
  featured: boolean;
  orderIndex: number;
  architectureDiagram?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  orderIndex: number;
}

export interface Skill {
  name: string;
  level?: 'Production' | 'Advanced' | 'Proficient';
  icon?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: Skill[];
}

export interface EngineeringPrinciple {
  id: string;
  title: string;
  category: string;
  description: string;
  enterpriseContext: string;
  patterns: string[];
  codeInsight?: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  problem: string;
  investigation: string;
  solution: string;
  implementation: string;
  implementationCode?: string;
  codeLanguage?: string;
  result: string;
  lessonsLearned: string[];
  tags: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  coursework?: string[];
  gradeOrRank?: string;
  highlights?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  receivedAt?: string;
}
