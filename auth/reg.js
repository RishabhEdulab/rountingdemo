const express = require('express')
const router = express.Router()
router.get('/register', (req, res) => {
    //TODO : register the user in the database
  res.send('you have been sucessfully registered in the system')
})
module.exports = router