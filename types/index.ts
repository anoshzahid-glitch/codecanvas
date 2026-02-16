export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  codeSnippet: string;
  language: string;
  githubUrl?: string;
  liveUrl?: string;
  color: string;
  position: [number, number, number];
}

export interface CodeExecution {
  code: string;
  language: string;
  output?: string;
  error?: string;
}

export interface AIExplanation {
  summary: string;
  keyFeatures: string[];
  complexity: 'beginner' | 'intermediate' | 'advanced';
}
