import React, { useEffect } from 'react';
import axios from 'axios';

function Topics() {
  let htmlPage = '';

  // Function to display topics
  async function showTopics(topics) {
    topics.forEach((topic) => {
      htmlPage += `<button onclick="showStages(${JSON.stringify(topic.stages)})">${topic.name}</button>`;
    });
    renderHtmlPage();
  }

  // Function to display stages for a topic
  async function showStages(stages) {
    let html = '';
    for (const stageId of stages) {
      try {
        const response = await axios.get(`http://localhost:3000/api/stages/${stageId}`);
        html += `<button onclick="showQuestions(${JSON.stringify(response.data.questions)})">Stage ${stageId}</button>`;
      } catch (error) {
        console.error('Error fetching stage:', error);
      }
    }
    htmlPage = html;
    renderHtmlPage();
  }

  // Function to display questions for a stage
  async function showQuestions(questions) {
    let html = '';
    for (const questionId of questions) {
      try {
        const response = await axios.get(`http://localhost:3000/api/questions/${questionId}`);
        const question = response.data;
        html += `
          <div class="question-details-container">
            <p>${question.question}</p>
            <ul>
              ${question.options.map(option => `<li>${option}</li>`).join('')}
            </ul>
            <p>Answer: ${question.answer}</p>
            <p>Hint: ${question.hint}</p>
            <p>Explanation: ${question.explanation}</p>
          </div>
        `;
      } catch (error) {
        console.error('Error fetching question:', error);
      }
    }
    htmlPage = html;
    renderHtmlPage();
  }

  // Function to render the HTML page
  function renderHtmlPage() {
    const finalPage = `<div>${htmlPage}</div>`;
    document.getElementById('topicsContainer').innerHTML = finalPage;
  }

  // Retrieve the topics data from the server
  async function fetchTopics() {
    try {
      const response = await axios.get(`http://localhost:3000/api/topics`);
      showTopics(response.data);
    } catch (error) {
      console.error('Error fetching topics:', error);
    }
  }

  useEffect(() => {
    fetchTopics();
  }, []);

  return <div id="topicsContainer" />;
}

export default Topics;
