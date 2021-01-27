const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000


const fs = require('fs');
const path = require('path');
const http = require('http');

const staticBasePath = './test.json';

const staticServe = function(req, res) {
    let fileLoc = path.resolve(staticBasePath);
    fileLoc = path.join(fileLoc, req.url);
    
        const stream = fs.createReadStream(fileLoc);

        stream.on('error', function(error) {
            res.writeHead(404, 'Not Found');
            res.end();
        });

        stream.pipe(res);
};

var httpServer = http.createServer(staticServe);
httpServer.listen(9001);
console.log("server is running on 9001")





// const url = "http://localhost:9001"
const url ="http://tuftuf.gambitlabs.fi/feed.txt"





app.locals.errors = null;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

 

app.use(require('./routes/feed'))

app.listen(PORT,()=>{
   console.log(`Listening on port ${PORT}`)
})