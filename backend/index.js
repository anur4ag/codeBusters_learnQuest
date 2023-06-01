const express = require('express');
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const app = express();
const jwt = require('jsonwebtoken');
const Web3 = require('web3');
const secretKey = "avengers assemble"
var cors = require('cors');
 const web3 = new Web3('https://cloudflare-eth.com/')
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));
app.use(cors());
//functions 
function getSignInMessage(address, nounce) {
    return `please sign in from ${address} at ${nounce}`;
}


// Import routes
const questionRoutes = require('./routes/questionRoutes');
const topicRoutes = require('./routes/topicRoutes');
const stageRoutes = require('./routes/stageRoutes');
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');


// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes
app.get('/nounce', (req, res) => {
    // res.send("nounce");
    const nounce = new Date().getTime();  //16 digit current time 
    const address = req.query.address; //account id
    const tempToken = jwt.sign({ nounce, address }, secretKey, { expiresIn: '60s' }); //hashes the data we provided and converts as a token
    const message = getSignInMessage(address, nounce);  

    res.json({ tempToken, message });

});

app.post('/test',(req,res)=>{
    res.send("test approved");
    console.log("test approved")
})

app.post('/verify', async (req, res) => {
    
    const authHeader = req.headers['authorization']
    const tempToken = authHeader && authHeader.split(" ")[1]
  
    if (tempToken === null) return res.sendStatus(403)  // if no user token found
  
    const userData = await jwt.verify(tempToken, secretKey)
    const nounce = userData.nounce
    const address = userData.address
    const message = getSignInMessage(address, nounce)
    const signature = req.query.signature

    const verifiedAddress = await web3.eth.accounts.recover(message, signature) //decrypting data

    if (verifiedAddress.toLowerCase() == address.toLowerCase()) {
      const token = jwt.sign({ verifiedAddress }, secretKey, { expiresIn: '1d' })
      
      res.json({ token })
    } else {
      res.sendStatus(403)
    }

  })

  app.get('/secret', authenticateToken, async (req, res) => {
    res.send(`Welcom address ${req.authData.verifiedAddress}`)
  })
  
  function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, secretKey, (err, authData) => {
      console.log("error ",err)
  
      if (err) return res.sendStatus(403)
  
      req.authData = authData
  
      next()
    })
  }
  
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

//Routes
app.use('/api/topics', topicRoutes);
app.use('/api/stages', stageRoutes);
app.use('/signup', signupRoutes);
app.use('/login', loginRoutes);
app.use('/api/questions', questionRoutes);


// app.listen(3000, () => {
//     console.log("server started");

// });