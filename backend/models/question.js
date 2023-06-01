const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionId: {
    type: Number,
    unique: true,
    required: true,
  },
  question: String,
  options: [String],
  answer: Number,
  hint: String,
  explanation: String,
  status: {
    type: Number,
    enum: [-1, 0, 1],
    default: 0,
  },
});

module.exports = mongoose.model('Question', questionSchema);
