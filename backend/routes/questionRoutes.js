const express = require('express');
const router = express.Router();
const Question = require('../models/question');

// Fetch all questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch questions' });
  }
});

// Fetch a specific question by ID
router.get('/:id', async (req, res) => {
  try {
    const questionId = req.params.id;
    const question = await Question.findById(questionId);

    if (question) {
      res.status(200).json(question);
    } else {
      res.status(404).json({ error: 'Question not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch question' });
  }
});

// Create a new question
router.post('/', async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create question' });
  }
});

// Update a question
router.put('/:id', async (req, res) => {
  try {
    const questionId = req.params.id;
    const updatedQuestion = await Question.findByIdAndUpdate(questionId, req.body, { new: true });

    if (updatedQuestion) {
      res.status(200).json(updatedQuestion);
    } else {
      res.status(404).json({ error: 'Question not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Unable to update question' });
  }
});

// Delete a question
router.delete('/:id', async (req, res) => {
  try {
    const questionId = req.params.id;
    const deletedQuestion = await Question.findByIdAndDelete(questionId);

    if (deletedQuestion) {
      res.status(200).json({ message: 'Question deleted successfully' });
    } else {
      res.status(404).json({ error: 'Question not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete question' });
  }
});

module.exports = router;
