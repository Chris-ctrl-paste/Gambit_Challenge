const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000

const cors = require('cors')
const fs = require('fs');

const fetchData = require('./api/api.js');



app.use(cors())
// app.get('/', function(req, res){
//     const file = fs.readFileSync('./data.json');
//     const jsonObject = JSON.parse(file);
//     res.json(jsonObject);
//   })

app.use('/', (req, res) => {



  fs.readFile('./feed.txt', (e, data) => {
     
      res.send(data);
  });
});

app.listen(PORT,()=>{
   console.log(`Listening on port ${PORT}`)
})