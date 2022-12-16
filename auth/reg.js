const express = require('express')
const router = express.Router()
router.get('/register', (req, res) => {
    //TODO : register the user in the database
  res.send('you have been sucessfully registered in the system')
})

router.post('/login',(req,res)=>{
  const username = req.body.username;
  const password = req.body.password;

  if(username == 'admin' && password == 'admin'){
    res.send("success!")
  }else 
  {
    res.sendStatus(401);//("Login failed!")
  }

})
module.exports = router