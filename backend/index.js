const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const Web3 = require('web3');
const secretKey = "avengers assemble"
var cors = require('cors');
 const web3 = new Web3('https://cloudflare-eth.com/')
app.use(express.static('public'));
app.use(cors());
//functions 
function getSignInMessage(address, nounce) {
    return `please sign in from ${address} at ${nounce}`;
}


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
  



app.listen(3000, () => {
    console.log("server started");

});