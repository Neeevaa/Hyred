export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  xp: number;
  progress: {
    [trackId: string]: {
      completedModules: string[];
      progress: number;
    };
  };
  interests: string;
  codingTrack: string;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Assessment {
  id: string;
  title: string;
  topic: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  questions: Question[];
}

export interface SoftSkill {
  id: string;
  title: string;
  type: 'Article' | 'Video';
  skillTag: string;
  url: string;
  thumbnailUrl: string;
}

export interface Module {
  id: string;
  title: string;
  duration: string;
  xp: number;
}

export interface CodingTrack {
  id: string;
  language: string;
  icon: React.ComponentType<{ className?: string }>;
  modules: Module[];
  totalXp: number;
}

export interface News {
  id: string;
  title: string;
  summary: string;
  sourceUrl: string;
  publishedAt: string;
  imageUrl: string;
}

export interface Tool {
  name: string;
  description: string;
  tryNowURL: string;
}
