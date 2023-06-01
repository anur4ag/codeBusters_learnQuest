const mongoose = require('mongoose');
const Topic = require('./topic'); // Import the Topic model, not the topicSchema

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter the firstname"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter the lastname"],
  },
  username: {
    type: String,
    required: [true, "Please enter the username"],
    unique: true, 
  },
  password: {
    type: String,
    required: [true, "Enter password"],
  },
  walletID: {
    type: String,
    required: [true, "Please enter the wallet ID"],
  },
  topics: [Topic.schema], // Embed the topics using the Topic schema
});

module.exports = mongoose.model('User', userSchema);
