import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom';
import axios from 'axios';

function MainComponent() {
  const [topics, setTopics] = useState([]);

  async function fetchTopics() {
    try {
      const response = await axios.get('http://localhost:3000/api/topics');
      const topics = response.data;
      setTopics(topics);
    } catch (error) {
      console.error('Error fetching topics:', error);
    }
  }

  async function showTopics(topics) {
    const topicsContainer = document.getElementById('topicsContainer');
    topicsContainer.innerHTML = '';

    topics.forEach(topic => {
      const topicButton = (
        <button key={topic._id} onClick={() => showStages(topic._id)}>
          {topic.name}
        </button>
      );

      createRoot(topicsContainer).render(topicButton);
    });
  }

  async function showStages(topicId) {
    const topicsContainer = document.getElementById('topicsContainer');
    topicsContainer.innerHTML = '';

    try {
      const response = await axios.get(`http://localhost:3000/api/topics/${topicId}/stages`);
      const stages = response.data;

      stages.forEach(stage => {
        const stageButton = (
          <button key={stage._id} onClick={() => showQuestions(stage.questions)}>
            Stage {stage.stageId}
          </button>
        );

        createRoot(topicsContainer).render(stageButton);
      });
    } catch (error) {
      console.error('Error fetching stages:', error);
    }
  }

  async function showQuestions(questions) {
    const topicsContainer = document.getElementById('topicsContainer');
    topicsContainer.innerHTML = '';

    questions.forEach(questionId => {
      axios.get(`http://localhost:3000/api/questions/${questionId}`)
        .then(response => response.data)
        .then(question => {
          const questionButton = (
            <button key={question._id} onClick={() => showQuestionDetails(question)}>
              {question.question}
            </button>
          );

          createRoot(topicsContainer).render(questionButton);
        })
        .catch(error => {
          console.error('Error fetching question:', error);
        });
    });
  }

  function showQuestionDetails(question) {
    const topicsContainer = document.getElementById('topicsContainer');
    topicsContainer.innerHTML = '';

    const questionContainer = (
      <div className="question-details-container">
        <p>{question.question}</p>
        <ul>
          {question.options.map(option => (
            <li key={option}>{option}</li>
          ))}
        </ul>
        <p>Answer: {question.answer}</p>
        <p>Hint: {question.hint}</p>
        <p>Explanation: {question.explanation}</p>
      </div>
    );

    createRoot(topicsContainer).render(questionContainer);
  }
    fetchTopics();

  return <div id="topicsContainer"></div>;
}

export default MainComponent;
