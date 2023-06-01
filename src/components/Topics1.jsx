import {useState, React} from 'react'
import Button from './Button'
import axios from "axios"

function topics() {
    // const [allTopics,setAllTopics] = useState("");
    let allTopics = "";
    async function fetchTopics() {
        try {
        //   const response = await fetch('/api/topics');
          const response = await axios.get(`http://localhost:3000/api/topics`, {});
          console.log(response);
          allTopics = response;
          console.log("ALL TOPICS");
          console.log(allTopics);
        //   setAllTopics(response);
        //   const topics = await response.json();
        //   showTopics(response);
        } catch (error) {
          console.error('Error fetching topics:', error);
        }
    }
    
    async function showTopics(topics) {
        // const topicsContainer = document.getElementById('topicsContainer');
        // topicsContainer.innerHTML = '';
      
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
    fetchTopics();

  return (
    <div>
      <h1 className='text-6xl text-black font-semibold'>LET THE BATTLE BEGIN</h1>
      <h2>{allTopics.data[0].name}</h2>
    </div>
  )
}

export default topics
