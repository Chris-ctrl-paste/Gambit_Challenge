const express = require('express')
const router = express.Router()
const fs = require('fs');


router.get("/feed", function(req, res){
    fs.readFile("../feed.txt", 'utf8', function(err, data) {
      if (err) throw err;
      return res.json(textFile);
    })
  })

   

  




module.exports = router