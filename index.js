const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors')
const fs = require('fs');

const PORT = process.env.PORT || 9000

const fetchData = require('./api/api.js');


app.use(cors())
app.get('/', function(req, res){
    const file = fs.readFileSync('./data.json');
    const jsonObject = JSON.parse(file);
    res.json(jsonObject);
  })

  app.use('/',  express.static(path.join(__dirname, 'public')))


app.listen(PORT,()=>{
   console.log(`Listening on port ${PORT}`)
})