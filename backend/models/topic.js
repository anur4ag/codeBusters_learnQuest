const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stage',
  }],
});

module.exports = mongoose.model('Topic', topicSchema);
