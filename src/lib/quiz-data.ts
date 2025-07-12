
import { Question } from './types';

export const quizzes: { [key: string]: { [key: string]: Question[] } } = {
  'JavaScript': {
    'Beginner': [
      {
        id: 'js-b-1',
        question: 'Which of the following is NOT a primitive data type in JavaScript?',
        options: [
          'String',
          'Number',
          'Object',
          'Boolean',
        ],
        correctAnswer: 'Object',
      },
      {
        id: 'js-b-2',
        question: 'What does the `===` operator do?',
        options: [
          'Compares two values for equality, without performing type conversion.',
          'Assigns a value to a variable.',
          'Compares two values for equality, after performing type conversion.',
          'Checks if a value is greater than another.',
        ],
        correctAnswer: 'Compares two values for equality, without performing type conversion.',
      },
    ],
  },
  'Python': {
    'Intermediate': [
       {
        id: 'py-i-1',
        question: 'What is a dictionary in Python?',
        options: [
          'An ordered collection of items.',
          'A collection of key-value pairs.',
          'A collection of unique items.',
          'A first-in, first-out data structure.',
        ],
        correctAnswer: 'A collection of key-value pairs.',
      },
    ]
  },
  'React': {
    'Beginner': [
      {
        id: '1',
        question: 'What is JSX?',
        options: [
          'A JavaScript extension for writing HTML-like code.',
          'A database query language.',
          'A CSS preprocessor.',
          'A templating engine for Node.js.',
        ],
        correctAnswer: 'A JavaScript extension for writing HTML-like code.',
      },
      {
        id: '2',
        question: 'What is the virtual DOM?',
        options: [
          'A direct representation of the actual DOM.',
          'A lightweight copy of the DOM kept in memory.',
          'A server-side rendering technique.',
          'A way to style components in React.',
        ],
        correctAnswer: 'A lightweight copy of the DOM kept in memory.',
      },
    ],
    'Advanced': [
      {
        id: '1',
        question: 'What are higher-order components (HOCs)?',
        options: [
          'Functions that take a component and return a new component.',
          'Components that render other components.',
          'A replacement for Redux.',
          'A way to handle routing in React.',
        ],
        correctAnswer: 'Functions that take a component and return a new component.',
      },
      {
        id: '2',
        question: 'What is the purpose of the `useCallback` hook?',
        options: [
          'To memoize functions.',
          'To memoize values.',
          'To perform side effects in function components.',
          'To manage state in function components.',
        ],
        correctAnswer: 'To memoize functions.',
      },
    ],
    'Pro': [
        {
            id: '1',
            question: 'What is concurrent rendering in React?',
            options: [
                'A new feature in React 18 that allows React to work on multiple state updates concurrently.',
                'A way to render components on the server.',
                'A technique for optimizing performance in React Native.',
                'A method for fetching data in React.',
            ],
            correctAnswer: 'A new feature in React 18 that allows React to work on multiple state updates concurrently.',
        },
        {
            id: '2',
            question: 'What is the purpose of the `useTransition` hook?',
            options: [
                'To mark state updates as non-urgent.',
                'To create smooth animations.',
                'To handle routing transitions.',
                'To fetch data asynchronously.',
            ],
            correctAnswer: 'To mark state updates as non-urgent.',
        },
    ]
  },
  'TypeScript': {
    'Beginner': [
        {
            id: '1',
            question: 'What is a key feature of TypeScript?',
            options: [
                'It adds static typing to JavaScript.',
                'It is a completely new programming language.',
                'It can only be used with React.',
                'It does not require a compiler.',
            ],
            correctAnswer: 'It adds static typing to JavaScript.',
        },
        {
            id: '2',
            question: 'How do you define an interface in TypeScript?',
            options: [
                'Using the `interface` keyword.',
                'Using the `type` keyword.',
                'Using the `class` keyword.',
                'Using the `enum` keyword.',
            ],
            correctAnswer: 'Using the `interface` keyword.',
        },
    ]
  }
};
