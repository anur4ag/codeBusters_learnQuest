// Retrieve the topics data from the server
fetch('/api/topics')
  .then(response => response.json())
  .then(topics => {
    console.log(topics); // Log the topics array

    // Iterate over each topic
    topics.forEach(topic => {
      // Create a button for the topic
      const topicButton = document.createElement('button');
      topicButton.textContent = topic.name;
      topicButton.addEventListener('click', () => {
        // Clear the stages container
        stagesContainer.innerHTML = '';

        // Iterate over each stage in the topic
        topic.stages.forEach((stage, index) => {
          // Create a button for the stage
          const stageButton = document.createElement('button');
          stageButton.textContent = `Stage ${index + 1}`;
          stageButton.addEventListener('click', () => {
            // Clear the questions container
            questionsContainer.innerHTML = '';

            // Iterate over each question ID in the stage
            stage.questions.forEach(questionId => {
              // Fetch the question details using the question ID
              fetch(`/api/questions/${questionId}`)
                .then(response => response.json())
                .then(questionDetails => {
                  console.log(questionDetails); // Log the question details

                  // Create a button for the question
                  const questionButton = document.createElement('button');
                  questionButton.textContent = questionDetails.question;
                  questionButton.addEventListener('click', () => {
                    // Display the question details
                    // ...

                    // Example: Log the question text when the button is clicked
                    console.log(questionDetails.question);
                  });

                  // Append the question button to the questions container
                  questionsContainer.appendChild(questionButton);
                })
                .catch(error => {
                  console.error('Error fetching question details:', error);
                });
            });
          });

          // Append the stage button to the stages container
          stagesContainer.appendChild(stageButton);
        });
      });

      // Append the topic button to the topics container
      topicsContainer.appendChild(topicButton);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
