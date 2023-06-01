// Function to create an HTML element
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
  function showTopics(topics) {
    const topicsContainer = document.getElementById('topicsContainer');
    topicsContainer.innerHTML = '';
  
    // Iterate over each topic
    topics.forEach(topic => {
      // Create a button for the topic
      const topicButton = createElement('button', topic.name);
      topicButton.addEventListener('click', () => {
        showStages(topic.stages);
      });
      topicsContainer.appendChild(topicButton);
    });
  }
  
  // Function to display stages for a topic
  function showStages(stages) {
    const topicsContainer = document.getElementById('topicsContainer');
    topicsContainer.innerHTML = '';
  
    // Iterate over each stage
    stages.forEach(stage => {
      // Create a button for the stage
      const stageButton = createElement('button', `Stage ${stage.stageId}`);
      stageButton.addEventListener('click', () => {
        fetch(`/api/questions?stageId=${stage._id}`)
          .then(response => response.json())
          .then(questions => {
            showQuestions(questions);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      });
      topicsContainer.appendChild(stageButton);
    });
  }
  
  // Function to display questions for a stage
  // Function to display questions for a topic
function showQuestions(questions) {
    const topicsContainer = document.getElementById('topicsContainer');
    topicsContainer.innerHTML = '';
  
    // Iterate over each question
    questions.forEach(question => {
      // Create a button for the question
      const questionButton = createElement('button', question.question);
      questionButton.addEventListener('click', () => {
        // Display the question details
        const questionDetails = document.getElementById('questionDetails');
        questionDetails.innerHTML = '';
        const questionText = createElement('p', `Question: ${question.question}`);
        const optionsList = createElement('ul');
        question.options.forEach(option => {
          const optionItem = createElement('li', option);
          optionsList.appendChild(optionItem);
        });
        const answerText = createElement('p', `Answer: ${question.answer}`);
        questionDetails.appendChild(questionText);
        questionDetails.appendChild(optionsList);
        questionDetails.appendChild(answerText);
      });
      topicsContainer.appendChild(questionButton);
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
  fetch('/api/topics')
    .then(response => response.json())
    .then(topics => {
      showTopics(topics);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  