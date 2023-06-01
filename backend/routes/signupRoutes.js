const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

// Conversion to Pascal case
function toPascalCase(str) {
  return str.replace(/\w+/g, function(w) {
    return w[0].toUpperCase() + w.slice(1).toLowerCase();
  });
}

router.post('/', async (req, res) => {
  let { firstName, lastName, password, username } = req.body;
  firstName = toPascalCase(firstName);
  lastName = toPascalCase(lastName);

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.send({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      username,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("Saved");
    console.log(newUser);
    return res.send({ message: "User created successfully" });
  } catch (error) {
    console.error("Error while creating user:", error);
    return res.status(500).send({ error: "Unable to create user" });
  }
});

module.exports = router;
