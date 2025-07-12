import type { User, CodingTrack, Assessment, SoftSkill, News, Tool } from './types';
import { Code, Bot, BarChart, Mic, Users } from 'lucide-react';

export const mockUser: User = {
  id: 'user123',
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  avatarUrl: 'https://placehold.co/100x100.png',
  xp: 1250,
  progress: {
    'js-track': {
      completedModules: ['js-mod1', 'js-mod2'],
      progress: 40,
    },
    'py-track': {
      completedModules: ['py-mod1'],
      progress: 25,
    },
  },
  interests: 'Web Development, Machine Learning',
  codingTrack: 'JavaScript',
};

export const codingTracks: CodingTrack[] = [
  {
    id: 'js-track',
    language: 'JavaScript',
    icon: Code,
    totalXp: 3000,
    modules: [
      { id: 'js-mod1', title: 'JS Fundamentals', duration: '2h', xp: 200 },
      { id: 'js-mod2', title: 'ES6+ Features', duration: '3h', xp: 300 },
      { id: 'js-mod3', title: 'Asynchronous JavaScript', duration: '4h', xp: 500 },
      { id: 'js-mod4', title: 'DOM Manipulation', duration: '3h', xp: 400 },
      { id: 'js-mod5', title: 'React Basics', duration: '5h', xp: 800 },
      { id: 'js-mod6', title: 'Advanced React Patterns', duration: '4h', xp: 800 },
    ],
  },
  {
    id: 'py-track',
    language: 'Python',
    icon: Bot,
    totalXp: 4000,
    modules: [
      { id: 'py-mod1', title: 'Python Syntax', duration: '2h', xp: 200 },
      { id: 'py-mod2', title: 'Data Structures', duration: '4h', xp: 400 },
      { id: 'py-mod3', title: 'Object-Oriented Programming', duration: '4h', xp: 600 },
      { id: 'py-mod4', title: 'Working with APIs', duration: '3h', xp: 500 },
      { id: 'py-mod5', title: 'Intro to Data Science', duration: '6h', xp: 1000 },
      { id: 'py-mod6', title: 'Machine Learning Basics', duration: '8h', xp: 1300 },
    ],
  },
];

export const assessments: Assessment[] = [
  {
    id: 'assess1',
    title: 'JavaScript Basics Quiz',
    topic: 'JavaScript',
    level: 'Beginner',
    questions: [{ question: 'What is a closure?', options: ['A', 'B', 'C'], correctAnswer: 'A' }],
  },
  {
    id: 'assess2',
    title: 'Python Data Structures',
    topic: 'Python',
    level: 'Intermediate',
    questions: [{ question: 'What is a dictionary?', options: ['A', 'B', 'C'], correctAnswer: 'B' }],
  },
  {
    id: 'assess3',
    title: 'Advanced React Concepts',
    topic: 'React',
    level: 'Advanced',
    questions: [{ question: 'What are hooks?', options: ['A', 'B', 'C'], correctAnswer: 'C' }],
  },
];

export const softSkills: SoftSkill[] = [
  {
    id: 'ss1',
    title: 'Effective Communication for Developers',
    type: 'Article',
    skillTag: 'Communication',
    url: '#',
    thumbnailUrl: 'https://placehold.co/600x400.png',
  },
  {
    id: 'ss2',
    title: 'Teamwork in Agile Environments',
    type: 'Video',
    skillTag: 'Teamwork',
    url: '#',
    thumbnailUrl: 'https://placehold.co/600x400.png',
  },
  {
    id: 'ss3',
    title: 'Problem-Solving Strategies',
    type: 'Article',
    skillTag: 'Problem-Solving',
    url: '#',
    thumbnailUrl: 'https://placehold.co/600x400.png',
  },
];

export const news: News[] = [
  {
    id: 'news1',
    title: 'AI in 2024: The Top Trends to Watch',
    summary: 'From generative models to ethical considerations, the AI landscape is evolving faster than ever.',
    sourceUrl: '#',
    publishedAt: '2024-05-20T09:00:00Z',
    imageUrl: 'https://placehold.co/600x400.png',
  },
  {
    id: 'news2',
    title: 'The Rise of WebAssembly',
    summary: 'Discover how WebAssembly is enabling near-native performance in web applications.',
    sourceUrl: '#',
    publishedAt: '2024-05-19T14:30:00Z',
    imageUrl: 'https://placehold.co/600x400.png',
  },
];

export const tools: Tool[] = [
  {
    name: 'GitHub Copilot',
    description: 'An AI pair programmer that helps you write code faster and with less work.',
    tryNowURL: 'https://github.com/features/copilot',
  },
  {
    name: 'Vercel',
    description: 'A platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database.',
    tryNowURL: 'https://vercel.com',
  },
  {
    name: 'Figma',
    description: 'A collaborative interface design tool that helps teams create, test, and ship better designs from start to finish.',
    tryNowURL: 'https://www.figma.com',
  },
  {
    name: 'Jupyter Notebook',
    description: 'An open-source web application that allows you to create and share documents that contain live code, equations, visualizations and narrative text.',
    tryNowURL: 'https://jupyter.org/',
  },
   {
    name: 'Google Colab',
    description: 'A free Jupyter notebook environment that requires no setup and runs entirely in the cloud, especially useful for machine learning.',
    tryNowURL: 'https://colab.research.google.com/',
  },
];
