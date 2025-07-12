
import type { User, CodingTrack, Assessment, SoftSkill, News, Tool, AptitudeCategory, DSAProblem } from './types';
import { Code, Bot, BarChart, Mic, Users, BrainCircuit, Type, Sigma } from 'lucide-react';

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
    questions: [], // Questions are loaded from quiz-data.ts
  },
  {
    id: 'assess2',
    title: 'Python Data Structures',
    topic: 'Python',
    level: 'Intermediate',
    questions: [], // Questions are loaded from quiz-data.ts
  },
  {
    id: 'assess3',
    title: 'Advanced React Concepts',
    topic: 'React',
    level: 'Advanced',
    questions: [], // Questions are loaded from quiz-data.ts
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


export const aptitudeCategories: AptitudeCategory[] = [
  {
    id: 'verbal',
    title: 'Verbal Ability',
    icon: Type,
    questions: [
      { id: 'v1', question: 'Which word is a synonym for "ephemeral"?', options: ['Eternal', 'Transient', 'Permanent', 'Enduring'], correctAnswer: 'Transient' },
      { id: 'v2', question: 'Complete the analogy: Pen is to Writer as ____ is to Painter.', options: ['Canvas', 'Brush', 'Studio', 'Color'], correctAnswer: 'Brush' },
    ],
  },
  {
    id: 'logical',
    title: 'Logical Reasoning',
    icon: BrainCircuit,
    questions: [
      { id: 'l1', question: 'If all Zips are Zaps and some Zaps are Zops, can we conclude that some Zips are Zops?', options: ['Yes', 'No', 'Cannot be determined'], correctAnswer: 'No' },
      { id: 'l2', question: 'Find the next number in the series: 2, 6, 12, 20, 30, ?', options: ['40', '42', '44', '46'], correctAnswer: '42' },
    ],
  },
  {
    id: 'quantitative',
    title: 'Quantitative Aptitude',
    icon: Sigma,
    questions: [
      { id: 'q1', question: 'A car travels at 60 km/h and covers a distance in 4 hours. How long will it take to cover the same distance at 80 km/h?', options: ['2 hours', '3 hours', '5 hours', '6 hours'], correctAnswer: '3 hours' },
      { id: 'q2', question: 'If the price of an item is increased by 20% and then decreased by 20%, what is the net percentage change?', options: ['0%', '4% increase', '4% decrease', '2% decrease'], correctAnswer: '4% decrease' },
    ],
  },
];


export const dsaProblems: DSAProblem[] = [
  {
    id: 'dsa1',
    title: 'Two Sum',
    difficulty: 'Easy',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    url: 'https://leetcode.com/problems/two-sum/',
    tags: ['Array', 'Hash Table'],
  },
  {
    id: 'dsa2',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    description: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
    url: 'https://leetcode.com/problems/valid-parentheses/',
    tags: ['String', 'Stack'],
  },
  {
    id: 'dsa3',
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    description: 'Merge two sorted linked lists and return it as a new sorted list.',
    url: 'https://leetcode.com/problems/merge-two-sorted-lists/',
    tags: ['Linked List', 'Recursion'],
  },
  {
    id: 'dsa4',
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'Easy',
    description: 'You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.',
    url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
    tags: ['Array', 'Dynamic Programming'],
  },
  {
    id: 'dsa5',
    title: 'Valid Palindrome',
    difficulty: 'Easy',
    description: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.',
    url: 'https://leetcode.com/problems/valid-palindrome/',
    tags: ['Two Pointers', 'String'],
  },
  {
    id: 'dsa6',
    title: 'Invert Binary Tree',
    difficulty: 'Easy',
    description: 'Given the root of a binary tree, invert the tree, and return its root.',
    url: 'https://leetcode.com/problems/invert-binary-tree/',
    tags: ['Tree', 'DFS', 'BFS'],
  },
  {
    id: 'dsa7',
    title: 'Valid Anagram',
    difficulty: 'Easy',
    description: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
    url: 'https://leetcode.com/problems/valid-anagram/',
    tags: ['Hash Table', 'String', 'Sorting'],
  },
  {
    id: 'dsa8',
    title: 'Binary Search',
    difficulty: 'Easy',
    description: 'Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.',
    url: 'https://leetcode.com/problems/binary-search/',
    tags: ['Array', 'Binary Search'],
  },
  {
    id: 'dsa9',
    title: 'Linked List Cycle',
    difficulty: 'Easy',
    description: 'Given head, the head of a linked list, determine if the linked list has a cycle in it.',
    url: 'https://leetcode.com/problems/linked-list-cycle/',
    tags: ['Hash Table', 'Linked List', 'Two Pointers'],
  },
  {
    id: 'dsa10',
    title: 'Maximum Depth of Binary Tree',
    difficulty: 'Easy',
    description: 'Given the root of a binary tree, return its maximum depth.',
    url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
    tags: ['Tree', 'DFS', 'BFS'],
  },
  {
    id: 'dsa11',
    title: 'Single Number',
    difficulty: 'Easy',
    description: 'Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.',
    url: 'https://leetcode.com/problems/single-number/',
    tags: ['Array', 'Bit Manipulation'],
  },
  {
    id: 'dsa12',
    title: 'Reverse Linked List',
    difficulty: 'Easy',
    description: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
    url: 'https://leetcode.com/problems/reverse-linked-list/',
    tags: ['Linked List', 'Recursion'],
  },
];
