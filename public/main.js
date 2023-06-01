// Utility function to create an HTML element
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
    const topicsContainer = document.getElementById('topicsContainer');
    topicsContainer.innerHTML = '';
  
    // Iterate over each topic
    topics.forEach(topic => {
      // Create a button for the topic
      const topicButton = createElement('button', topic.name);
      topicButton.addEventListener('click', async () => {
        await showStages(topic.stages); // Pass the stages array of the topic here
      });
      topicsContainer.appendChild(topicButton);
    });
  }
  
  // Function to display stages for a topic
  async function showStages(stages) {
    const topicsContainer = document.getElementById('topicsContainer');
    topicsContainer.innerHTML = '';
  
    // Iterate over each stage
    for (const stageId of stages) {
      try {
        const response = await fetch(`/api/stages/${stageId}`);
        const stage = await response.json();
  
        // Create a button for the stage
        const stageButton = createElement('button', `Stage ${stage.stageId}`);
        stageButton.addEventListener('click', async () => {
          await showQuestions(stage.questions);
        });
        topicsContainer.appendChild(stageButton);
      } catch (error) {
        console.error('Error fetching stage:', error);
      }
    }
  }
  
  // Function to display questions for a stage
  async function showQuestions(questions) {
    const topicsContainer = document.getElementById('topicsContainer');
    topicsContainer.innerHTML = '';
  
    // Iterate over each question
    questions.forEach(questionId => {
      fetch(`/api/questions/${questionId}`)
        .then(response => response.json())
        .then(question => {
          // Create a button for the question
          const questionButton = createElement('button', question.question);
          questionButton.addEventListener('click', () => {
            showQuestionDetails(question);
          });
          topicsContainer.appendChild(questionButton);
        })
        .catch(error => {
          console.error('Error fetching question:', error);
        });
    });
  }
  
  // Function to display the details of a question
  function showQuestionDetails(question) {
    const topicsContainer = document.getElementById('topicsContainer');
    topicsContainer.innerHTML = '';
  
    // Create a container for the question details
    const questionContainer = createElement('div', null, 'question-details-container');
  
    // Create elements to display the question details
    const questionText = createElement('p', question.question);
    const optionsList = createElement('ul');
    question.options.forEach(option => {
      const optionItem = createElement('li', option);
      optionsList.appendChild(optionItem);
    });
    const answer = createElement('p', `Answer: ${question.answer}`);
    const hint = createElement('p', `Hint: ${question.hint}`);
    const explanation = createElement('p', `Explanation: ${question.explanation}`);
  
    // Append the question details to the container
    questionContainer.appendChild(questionText);
    questionContainer.appendChild(optionsList);
    questionContainer.appendChild(answer);
    questionContainer.appendChild(hint);
    questionContainer.appendChild(explanation);
  
    topicsContainer.appendChild(questionContainer);
  }
  
  // Retrieve the topics data from the server
  async function fetchTopics() {
    try {
      const response = await fetch('/api/topics');
      const topics = await response.json();
      showTopics(topics);
    } catch (error) {
      console.error('Error fetching topics:', error);
    }
  }
  
  fetchTopics();
  