const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });

  // If user not found
  if (!user) {
    res.send({ message: "User not found" });
    return;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (isPasswordValid) {
    res.send({ message: "Logged in successfully", user: user });
    console.log("👍");
  } else {
    res.send({ message: "Invalid username or password" });
  }
});

module.exports = router;
