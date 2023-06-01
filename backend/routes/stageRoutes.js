const express = require('express');
const router = express.Router();
const Stage = require('../models/stage');

// Fetch all stages
router.get('/', async (req, res) => {
  try {
    const stages = await Stage.find();
    res.status(200).json(stages);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch stages' });
  }
});

// Fetch a specific stage by ID
router.get('/:id', async (req, res) => {
  try {
    const stageId = req.params.id;
    console.log(stageId);
    const stage = await Stage.findById(stageId);

    if (stage) {
      res.status(200).json(stage);
    } else {
      res.status(404).json({ error: 'Stage not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch stage' });
  }
});

module.exports = router;
