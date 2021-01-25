const express = require('express')
const app = express()
// const mongoose  = require('mongoose')
const PORT = process.env.PORT || 9000


// require('dotenv').config();




app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  })






app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})