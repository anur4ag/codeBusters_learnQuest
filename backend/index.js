const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const cors = require('cors');


// Import routes
const questionRoutes = require('./routes/questionRoutes');
const topicRoutes = require('./routes/topicRoutes');
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');

// Create express app
const app = express();

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Connected to the database");

    // Start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

// Routes
app.use('/api/topics', topicRoutes);
app.use('/signup', signupRoutes);
app.use('/login', loginRoutes);
app.use('/api/questions', questionRoutes);
