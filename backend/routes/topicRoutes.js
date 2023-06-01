const express = require('express');
const router = express.Router();
const Topic = require('../models/topic');

// Fetch all topics
router.get('/', async (req, res) => {
  try {
    const topics = await Topic.find();
    res.status(200).json(topics);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch topics' });
  }
});

// Create a new topic
router.post('/', async (req, res) => {
  try {
    const topic = new Topic(req.body);
    await topic.save();
    res.status(201).json(topic);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create topic' });
  }
});

// Define other topic routes as needed

module.exports = router;
