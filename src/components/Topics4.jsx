import React from 'react'
import Button from './Button'
import axios from "axios"


function topics() {
    // const [allTopics,setAllTopics] = useState("");
    let html1 = "<div> <h1> HELLO </h1> </div>";
    let htmlPage = "";

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
    
    // Function to display topics
    async function showTopics(topics) {
      // const topicsContainer = document.getElementById('topicsContainer');
      // topicsContainer.innerHTML = '';
      htmlPage = "";
      console.log(topics);
    
      // Iterate over each topic
      topics.forEach(topic => {
        // Create a button for the topic
        let buttonHTML = "<button onclick='myFunction()' class='g-custom-pink hover:bg-custom-pink-dark text-white text-xl font-bold py-4 mt-6 px-8 rounded-lg drop-shadow-2xl hover:drop-shadow-xl'>"+ topic.name +"</button>";
        // const topicButton = createElement('button', topic.name);
        function myFunction(){
          showStages(topic.stages);
        }
        // topicButton.addEventListener('click', async () => {
        //   await showStages(topic.stages); // Pass the stages array of the topic here
        // });
        // topicsContainer.appendChild(topicButton);
        htmlPage += buttonHTML;
      });
    }
    
    // Function to display stages for a topic
    async function showStages(stages) {
      // const topicsContainer = document.getElementById('topicsContainer');
      // topicsContainer.innerHTML = '';
      htmlPage = "";
      let count = 1;
      // Iterate over each stage
      for (const stageId of stages) {
        try {
          // const response = await fetch(`/api/stages/${stageId}`);
          const response = await axios.get(`http://localhost:3000/api/stages/${stageId}`, {});
          // const stage = await response.json();
    
          // Create a button for the stage
          let buttonHTML = "<button onclick='myFunction()' class='g-custom-pink hover:bg-custom-pink-dark text-white text-xl font-bold py-4 mt-6 px-8 rounded-lg drop-shadow-2xl hover:drop-shadow-xl'>"+ count +"</button>";
          function myFunction(){
            showQuestions(response.questions);
          }
          // const stageButton = createElement('button', `Stage ${stage.stageId}`);
          // stageButton.addEventListener('click', async () => {
          //   await showQuestions(stage.questions);
          // });
          // topicsContainer.appendChild(stageButton);
          htmlPage += buttonHTML;
        } catch (error) {
          console.error('Error fetching stage:', error);
        }
        count++;
      }
    }
    
    // Function to display questions for a stage
    async function showQuestions(questions) {
      // const topicsContainer = document.getElementById('topicsContainer');
      // topicsContainer.innerHTML = '';
      htmlPage = "";
      count = 1;
    
      // Iterate over each question
      for (const questionId in questions) {
        if (questions.hasOwnProperty(questionId)) {
          try {
            // const response = await fetch(`/api/questions/${questionId}`);
            const response = await axios.get(`http://localhost:3000/api/questions/${questionId}`, {});
            // const question = await response.json();
      
            // Create a button for the question
            // const questionButton = createElement('button', question.question);
            // questionButton.addEventListener('click', () => {
            //   showQuestionDetails(question);
            // });
            // topicsContainer.appendChild(questionButton);

            let buttonHTML = "<button onclick='myFunction()' class='g-custom-pink hover:bg-custom-pink-dark text-white text-xl font-bold py-4 mt-6 px-8 rounded-lg drop-shadow-2xl hover:drop-shadow-xl'>"+ count +"</button>";
          function myFunction(){
            showQuestionDetails(response);
          }
          htmlPage += buttonHTML;
          } catch (error) {
            console.error('Error fetching question:', error);
          }
        }
      }
      
    }
    
    // Function to display the details of a question
    function showQuestionDetails(question) {
      // const topicsContainer = document.getElementById('topicsContainer');
      // topicsContainer.innerHTML = '';
      htmlPage = "";
    
      // Create a container for the question details
      // const questionContainer = createElement('div', null, 'question-details-container');
      htmlPage += " <div class='question-details-container'>";
    
      // Create elements to display the question details
      // const questionText = createElement('p', question.question);
      htmlPage += "<p>"+ question.question +"</p>";
      // const optionsList = createElement('ul');
      htmlPage += "<ul>";
      question.options.forEach(option => {
        // const optionItem = createElement('li', option);
        // optionsList.appendChild(optionItem);
        htmlPage += "<li>"+ option +"</li>";
      });
      htmlPage += "</ul>";
      // const answer = createElement('p', `Answer: ${question.answer}`);
      htmlPage += "<p> Answer:"+ question.answer +"</p>";
      // const hint = createElement('p', `Hint: ${question.hint}`);
      htmlPage += "<p> Hint:"+ question.hint +"</p>";
      // const explanation = createElement('p', `Explanation: ${question.explanation}`);
      htmlPage += "<p> Explanation:"+ question.explanation +"</p>";
    
      // // Append the question details to the container
      // questionContainer.appendChild(questionText);
      // questionContainer.appendChild(optionsList);
      // questionContainer.appendChild(answer);
      // questionContainer.appendChild(hint);
      // questionContainer.appendChild(explanation);
    
      // topicsContainer.appendChild(questionContainer);

      htmlPage += "</div>"
    }
    
    // Retrieve the topics data from the server
    async function fetchTopics() {
      try {
        const response = await axios.get(`http://localhost:3000/api/topics`, {});
        // const topics = await response.json();
        showTopics(response.data);
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    }
    
    fetchTopics();
    let finalPage = html1 + htmlPage;

  return (
    <div dangerouslySetInnerHTML={{ __html: finalPage}} />
  )
}

export default topics
