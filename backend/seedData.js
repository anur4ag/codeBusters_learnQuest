const mongoose = require('mongoose');
const Question = require('./models/question');
const Stage = require('./models/stage');
const Topic = require('./models/topic');

const MONGODB_URI = 'mongodb://localhost:27017/mydatabase';

const questions = [
  {
    questionId: 1,
    question: 'What is ReactJS?',
    options: [
      'A JavaScript library for building user interfaces.',
      'A programming language for front-end development.',
      'A database management system.',
    ],
    answer: 0,
    hint: 'Think about the purpose of ReactJS.',
    explanation: 'ReactJS is a JavaScript library for building user interfaces.',
    status: 0,
  },
  {
    questionId: 2,
    question: 'What are components in React?',
    options: [
      'Reusable blocks of code that describe how a part of the user interface should be rendered.',
      'Functions used to define the structure of a React application.',
      'Methods used for handling user interactions in React.',
    ],
    answer: 0,
    hint: 'Think about the modular nature of React applications.',
    explanation: 'Components in React are reusable blocks of code that describe how a part of the user interface should be rendered.',
    status: 0,
  },
  {
    questionId: 3,
    question: 'What is JSX in React?',
    options: [
      'A programming language for building user interfaces in React.',
      'A templating engine used for rendering React components.',
      'A syntax extension for JavaScript that allows you to write HTML-like code in JavaScript.',
    ],
    answer: 0,
    hint: 'Think about the syntax used for writing components in React.',
    explanation: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in JavaScript.',
    status: 0,
  },
  {
    questionId: 4,
    question: 'What is the virtual DOM in React?',
    options: [
      'A JavaScript object representing the structure of a user interface.',
      'A lightweight version of the actual DOM used for efficient updates in React.',
      'A virtual representation of the server-side rendering process in React.',
    ],
    answer: 0,
    hint: 'Think about the performance optimizations in React.',
    explanation: 'The virtual DOM in React is a lightweight version of the actual DOM used for efficient updates.',
    status: 0,
  },
  {
    questionId: 5,
    question: 'What is state in React?',
    options: [
      'A way to manage data within a component and track changes over time.',
      'A global storage for sharing data across multiple components in React.',
      'A method for defining the structure of a React component.',
    ],
    answer: 0,
    hint: 'Think about the concept of stateful components in React.',
    explanation: 'State in React allows you to manage data within a component and track changes over time.',
    status: 0,
  },
  {
    questionId: 6,
    question: 'What are props in React?',
    options: [
      'A way to pass data from a parent component to its child components.',
      'A type of HTML element used for rendering content in React.',
      'A method for defining default values for component properties.',
    ],
    answer: 0,
    hint: 'Think about how components communicate with each other in React.',
    explanation: 'Props in React are used to pass data from a parent component to its child components.',
    status: 0,
  },
  {
    questionId: 7,
    question: 'What is the purpose of React Router?',
    options: [
      'To handle client-side routing in React applications.',
      'To manage the state of React components.',
      'To optimize the performance of React applications.',
    ],
    answer: 0,
    hint: 'Think about the navigation and routing capabilities in React.',
    explanation: 'React Router is used to handle client-side routing in React applications.',
    status: 0,
  },
  {
    questionId: 8,
    question: 'What is the useEffect hook in React?',
    options: [
      'A hook used for handling asynchronous operations in React.',
      'A hook used for managing side effects in React components.',
      'A hook used for styling components in React.',
    ],
    answer: 0,
    hint: 'Think about the lifecycle of React components.',
    explanation: 'The useEffect hook in React is used for managing side effects in components.',
    status: 0,
  },
  {
    questionId: 9,
    question: 'What is the purpose of the useState hook in React?',
    options: [
      'To handle form input validation in React.',
      'To manage local state within functional components in React.',
      'To perform AJAX requests in React applications.',
    ],
    answer: 0,
    hint: 'Think about the use of state in React components.',
    explanation: 'The useState hook in React is used to manage local state within functional components.',
    status: 0,
  },
  {
    questionId: 10,
    question: 'What is the difference between controlled and uncontrolled components in React?',
    options: [
      'Controlled components are rendered by React, while uncontrolled components are rendered by the browser.',
      'Controlled components have their state managed by React, while uncontrolled components have their state managed by the browser.',
      'Controlled components use class-based syntax, while uncontrolled components use functional syntax.',
    ],
    answer: 0,
    hint: 'Think about how state is handled in different types of components.',
    explanation: 'Controlled components in React have their state managed by React, while uncontrolled components have their state managed by the browser.',
    status: 0,
  },
  {
    questionId: 11,
    question: 'What is the purpose of the useCallback hook in React?',
    options: [
      'To optimize the performance of React components.',
      'To handle form submission events in React applications.',
      'To memoize functions and prevent unnecessary re-renders in React components.',
    ],
    answer: 0,
    hint: 'Think about function optimization and re-rendering in React.',
    explanation: 'The useCallback hook in React is used to memoize functions and prevent unnecessary re-renders in components.',
    status: 0,
  },
  {
    questionId: 12,
    question: 'What is the purpose of the useContext hook in React?',
    options: [
      'To manage component hierarchy and nesting in React applications.',
      'To share data across multiple components without prop drilling in React.',
      'To handle user interactions and events in React components.',
    ],
    answer: 0,
    hint: 'Think about how data can be passed between components in React.',
    explanation: 'The useContext hook in React is used to share data across multiple components without the need for prop drilling.',
    status: 0,
  },
  {
    questionId: 13,
    question: 'What is the purpose of the useRef hook in React?',
    options: [
      'To create references to DOM elements in React components.',
      'To manage the state of functional components in React.',
      'To define custom hooks for reusable logic in React.',
    ],
    answer: 0,
    hint: 'Think about interacting with the DOM in React components.',
    explanation: 'The useRef hook in React is used to create references to DOM elements within components.',
    status: 0,
  },
  {
    questionId: 14,
    question: 'What is the purpose of the useMemo hook in React?',
    options: [
      'To optimize the rendering performance of React components.',
      'To manage side effects and asynchronous operations in React components.',
      'To memoize expensive calculations in React components.',
    ],
    answer: 0,
    hint: 'Think about performance optimization and memoization in React.',
    explanation: 'The useMemo hook in React is used to memoize expensive calculations in components.',
    status: 0,
  },
  {
    questionId: 15,
    question: 'What is Redux?',
    options: [
      'A state management library for JavaScript applications, commonly used with React.',
      'A build tool for bundling JavaScript modules in React applications.',
      'A testing framework for unit testing React components.',
    ],
    answer: 0,
    hint: 'Think about state management in complex React applications.',
    explanation: 'Redux is a state management library for JavaScript applications, commonly used with React.',
    status: 0,
  },
];


const stages = [
  {
    stageId: 1,
    questionIds: [1, 2, 3, 4, 5],
  },
  {
    stageId: 2,
    questionIds: [6, 7, 8, 9, 10],
  },
  {
    stageId: 3,
    questionIds: [11, 12, 13, 14, 15],
  },
  // Add more stage objects here
];

const seedData = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    for (const question of questions) {
      try {
        const createdQuestion = await Question.create(question);
        console.log(`Question with ID ${createdQuestion.questionId} added.`);
      } catch (error) {
        console.log(`Skipping duplicate question with ID ${question.questionId}.`);
      }
    }

    const topic = new Topic({
      name: 'react',
      description: 'React topic',
    });

    for (const stage of stages) {
      const stageQuestions = [];
      for (const questionId of stage.questionIds) {
        const question = await Question.findOne({ questionId });
        if (question) {
          stageQuestions.push(question._id);
        }
      }
      const newStage = new Stage({
        stageId: stage.stageId,
        questions: stageQuestions,
      });
      topic.stages.push(newStage);
    }

    await topic.save();
    console.log('Seed data inserted successfully.');

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

seedData();