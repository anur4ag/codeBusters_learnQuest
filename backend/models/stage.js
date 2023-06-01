const mongoose = require('mongoose');
const Question = require('./question'); 

const stageSchema = new mongoose.Schema({
  stageId: {
    type: Number,
  },
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
  }],
  points: {
    type: Number,
    default: 0,
    validate: {
      validator: function (value) {
        const maxPoints = this.questions.length;
        return value <= maxPoints;
      },
      message: function (props) {
        const maxPoints = this.questions.length;
        return `Max points can be ${maxPoints}. Received: ${props.value}`;
      },
    },
  },
});

module.exports = mongoose.model('Stage', stageSchema);
