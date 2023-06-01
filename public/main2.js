// Retrieve the topics data from the server
fetch('/api/topics')
  .then(response => response.json())
  .then(topics => {
    // Iterate over each topic
    topics.forEach(topic => {
      console.log(topic);
      // Create a container element for the topic
      const topicContainer = document.createElement('div');
      topicContainer.classList.add('topic');

      // Create and append the topic name and description elements
      const topicName = document.createElement('h2');
      topicName.textContent = topic.name;
      topicContainer.appendChild(topicName);

      const topicDescription = document.createElement('p');
      topicDescription.textContent = topic.description;
      topicContainer.appendChild(topicDescription);

      // Iterate over each stage in the topic
      topic.stages.forEach(stage => {
        // Create a container element for the stage
        const stageContainer = document.createElement('div');
        stageContainer.classList.add('stage');

        // Create and append the stage ID element
        const stageId = document.createElement('h3');
        stageId.textContent = `Stage ${stage.stageId}`;
        stageContainer.appendChild(stageId);

        // Iterate over each question in the stage
        stage.questions.forEach(questionId => {
          // Fetch the question details using the question ID
          fetch(`/api/questions/${questionId}`)
            .then(response => response.json())
            .then(question => {
              // Create and append the question elements
              const questionElement = document.createElement('div');
              questionElement.classList.add('question');

              const questionText = document.createElement('p');
              questionText.textContent = question.question;
              questionElement.appendChild(questionText);

              const options = document.createElement('ul');
              question.options.forEach(option => {
                const optionItem = document.createElement('li');
                optionItem.textContent = option;
                options.appendChild(optionItem);
              });
              questionElement.appendChild(options);

              const answer = document.createElement('p');
              answer.textContent = `Answer: ${question.answer}`;
              questionElement.appendChild(answer);

              const hint = document.createElement('p');
              hint.textContent = `Hint: ${question.hint}`;
              questionElement.appendChild(hint);

              stageContainer.appendChild(questionElement);
            })
            .catch(error => {
              console.error('Error fetching question:', error);
            });
        });

        // Append the stage container to the topic container
        topicContainer.appendChild(stageContainer);
      });

      // Append the topic container to the questions container
      const questionsContainer = document.getElementById('questionsContainer');
      questionsContainer.appendChild(topicContainer);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
