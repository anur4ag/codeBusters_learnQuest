const mongoose = require('mongoose');
const Stage = require('./stage'); 

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stages: [Stage.schema], // Use the schema property of the Stage model
});

module.exports = mongoose.model('Topic', topicSchema);
