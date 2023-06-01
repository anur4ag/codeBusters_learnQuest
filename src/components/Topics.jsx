import { useState, React } from 'react';
import Button from './Button';
import axios from "axios";

function Topics() {
  const [htmlPage, setHtmlPage] = useState("");

  function createElement(tag, text, className) {
    const element = document.createElement(tag);
    if (text) {
      element.textContent = text;
    }
    if (className) {
      element.className = className;
    }
    return element;
  }

  async function showTopics(topics) {
    setHtmlPage("");
    console.log(topics);

    function myFunction(topic) {
      showStages(topic.stages);
    }

    topics.forEach(topic => {
      let buttonHTML = "<button onclick='myFunction()' class='g-custom-pink hover:bg-custom-pink-dark text-white text-xl font-bold py-4 mt-6 px-8 rounded-lg drop-shadow-2xl hover:drop-shadow-xl'>"+ topic.name +"</button>";

      setHtmlPage(prevHtmlPage => prevHtmlPage + buttonHTML);
    });
  }

  async function showStages(stages) {
    setHtmlPage("");
    let count = 1;

    function myFunction(response) {
      showQuestions(response.questions);
    }

    for (const stageId of stages) {
      try {
        const response = await axios.get(`http://localhost:3000/api/stages/${stageId}`, {});

        let buttonHTML = "<button onclick='myFunction()' class='g-custom-pink hover:bg-custom-pink-dark text-white text-xl font-bold py-4 mt-6 px-8 rounded-lg drop-shadow-2xl hover:drop-shadow-xl'>"+ count +"</button>";

        setHtmlPage(prevHtmlPage => prevHtmlPage + buttonHTML);
      } catch (error) {
        console.error('Error fetching stage:', error);
      }
      count++;
    }
  }

  async function showQuestions(questions) {
    setHtmlPage("");
    let count = 1;

    function myFunction(response) {
      showQuestionDetails(response);
    }

    for (const questionId in questions) {
      if (questions.hasOwnProperty(questionId)) {
        try {
          const response = await axios.get(`http://localhost:3000/api/questions/${questionId}`, {});

          let buttonHTML = "<button onclick='myFunction()' class='g-custom-pink hover:bg-custom-pink-dark text-white text-xl font-bold py-4 mt-6 px-8 rounded-lg drop-shadow-2xl hover:drop-shadow-xl'>"+ count +"</button>";

          setHtmlPage(prevHtmlPage => prevHtmlPage + buttonHTML);
        } catch (error) {
          console.error('Error fetching question:', error);
        }
      }
      count++;
    }
  }

  function showQuestionDetails(question) {
    setHtmlPage("");
    let htmlPage = "";

    htmlPage += "<div class='question-details-container'>";
    htmlPage += "<p>"+ question.question +"</p>";
    htmlPage += "<ul>";
    question.options.forEach(option => {
      htmlPage += "<li>"+ option +"</li>";
    });
    htmlPage += "</ul>";
    htmlPage += "<p> Answer:"+ question.answer +"</p>";
    htmlPage += "<p> Hint:"+ question.hint +"</p>";
    htmlPage += "<p> Explanation:"+ question.explanation +"</p>";
    htmlPage += "</div>";

    setHtmlPage(htmlPage);
  }

  async function fetchTopics() {
    try {
      const response = await axios.get(`http://localhost:3000/api/topics`, {});
      showTopics(response.data);
    } catch (error) {
      console.error('Error fetching topics:', error);
    }
  }

  fetchTopics();

  return htmlPage;
}

export default Topics;
