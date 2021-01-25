
const fs = require('fs');
const path = require('path');
const http = require('http');

const staticBasePath = './feed.txt';

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
httpServer.listen(9000);
console.log("server is running on 9000")




const axios = require("axios")


const url = "http://localhost:9000"





let TUF_ValueArrays = []
let TUF_ValueObject = {};

let TUF_ValueArray = [];






axios.get(url).then(function (response) {


const TUF_ValueText = response.data




    TUF_ValueArrays = TUF_ValueText.split("\r\n");
    TUF_ValueArrays.forEach(function(v, i) {
        if(i == 0)
            TUF_ValueArray[i] = v;
           
        else 
            TUF_ValueArray[i] = v.split(":")[1];
            // console.log(TUF_ValueArray)
        });
    


//  TUF_ValueObject.date = TUF_ValueArray[0];
 TUF_ValueObject.MODBUS = {};
 TUF_ValueObject.ERRORS = {};
 TUF_ValueObject.MODBUS["1-2: Flow Rate"] = [TUF_ValueArray[1], TUF_ValueArray[2]];
 TUF_ValueObject.MODBUS["3-4: Energy Flow Rate"] = [TUF_ValueArray[3], TUF_ValueArray[4]];
 TUF_ValueObject.MODBUS["5-6: Velocity"] = [TUF_ValueArray[5], TUF_ValueArray[6]];
 TUF_ValueObject.MODBUS["7-8: Fluid sound speed"] = [TUF_ValueArray[7], TUF_ValueArray[8]];
 TUF_ValueObject.MODBUS["9-10: positive accumulator"] = [TUF_ValueArray[9], TUF_ValueArray[10]];
 TUF_ValueObject.MODBUS["11-12: Positive decimal fraction"] = [TUF_ValueArray[11], TUF_ValueArray[12]];
 TUF_ValueObject.MODBUS["13-14: Negative accumulator"] = [TUF_ValueArray[13], TUF_ValueArray[14]];
 TUF_ValueObject.MODBUS["15-16: Negative decimal fraction"] = [TUF_ValueArray[15], TUF_ValueArray[16]];
 TUF_ValueObject.MODBUS["17-18: Positive energy accumulator "] = [TUF_ValueArray[17], TUF_ValueArray[18]];
 TUF_ValueObject.MODBUS["19-20: Positive energy decimal fraction "] = [TUF_ValueArray[19], TUF_ValueArray[20]];
 TUF_ValueObject.MODBUS["21-22: Negative energy accumulator "] = [TUF_ValueArray[21], TUF_ValueArray[22]];




// 0023-0024 2 Negative energy decimal fraction 
// 0025-0026 2 Net accumulator LONG
// 0027-0028 2 Net decimal fraction REAL4
// 0029-0030 2 Net energy accumulator LONG
// 0031-0032 2 Net energy decimal fraction REAL4
// 0033-0034 2 Temperature #1/inlet REAL4 Unit: C
// 0035-0036 2 Temperature #2/outlet REAL4 Unit: C
// 0037-0038 2 Analog input AI3 REAL4
// 0039-0040 2 Analog input AI4 REAL4
// 0041-0042 2 Analog input AI5 REAL4
// 0043-0044 2 Current input at AI3 REAL4 In unit mA
// 0045-0046 2 Current input at AI3 REAL4 In unit mA
// 0047-0048 2 Current input at AI3 REAL4 In unit mA
// 0049-0050 2 System password 
// 0051 Password for hardware BCD Writable。
// 0053-0055 3 Calendar (date and time) BCD Writable。6 Bytes of
// 0056  Day+Hour for Auto-Save BCD Writable。For
// 0059  Key to input INTEGER Writable
// 0060  Go to Window # INTEGER Writable。
// 0061  LCD Back-lit lights for number of
// 0062  Times for the beeper INTEGER Writable。Max 255
// 0062  Pulses left for OCT INTEGER Writable。Max 65535
// 0072  Error Code BIT 16bits, see note 4
// 0077-0078 2 PT100 resistance of inlet REAL4 In unit Ohm
// 0079-0080 2 PT100 resistance of outlet REAL4 In unit Ohm
// 0081-0082 2 Total travel time REAL4 In unit Micro-second
// 0083-0084 2 Delta travel time REAL4 In unit Nino-second
// 0085-0086 2 Upstream travel time REAL4 In unit Micro-second
// 0087-0088 2 Downstream travel time REAL4 In unit Micro-second
// 0089-0090 2 Output current REAL4 In unit mA
// 0092 Working step and Signal Quality 
// 0093  Upstream strength INTEGER Range 0-2047
// 0094  Downstream strength INTEGER Range 0-2047
// 0096  Language used in user interface INTEGER 0 : English，1:Chinese
// 0097-0098 2 The rate of the measured travel
// 0099-0100 2 Reynolds number REAL4 






console.log(TUF_ValueObject.MODBUS)
      
})







// app.listen(PORT,()=>{
   
// })