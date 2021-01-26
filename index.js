
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


// const url = "http://localhost:9000"
const url ="http://tuftuf.gambitlabs.fi/feed.txt"




let TUF_ValueArrays = []
let TUF_ValueObject = {};

let TUF_ValueArray = [];






axios.get(url).then(function (response) {

// console.log(response)
const TUF_ValueText = response.data




    TUF_ValueArrays = TUF_ValueText.split("\n");
    TUF_ValueArrays.forEach(function(v, i) {
         TUF_ValueArray[i] = v.split(":")[1];
            // console.log(TUF_ValueArray)
        });
    



 TUF_ValueObject.MODBUS = {};
 TUF_ValueObject.ERRORS = {};
 TUF_ValueObject.MODBUS["1-2: Flow Rate."] = [TUF_ValueArray[1], TUF_ValueArray[2]];
 TUF_ValueObject.MODBUS["3-4: Energy Flow Rate."] = [TUF_ValueArray[3], TUF_ValueArray[4]];
 TUF_ValueObject.MODBUS["5-6: Velocity."] = [TUF_ValueArray[5], TUF_ValueArray[6]];
 TUF_ValueObject.MODBUS["7-8: Fluid sound speed."] = [TUF_ValueArray[7], TUF_ValueArray[8]];
 TUF_ValueObject.MODBUS["9-10: positive accumulator."] = [TUF_ValueArray[9], TUF_ValueArray[10]];
 TUF_ValueObject.MODBUS["11-12: Positive decimal fraction."] = [TUF_ValueArray[11], TUF_ValueArray[12]];
 TUF_ValueObject.MODBUS["13-14: Negative accumulator."] = [TUF_ValueArray[13], TUF_ValueArray[14]];
 TUF_ValueObject.MODBUS["15-16: Negative decimal fraction."] = [TUF_ValueArray[15], TUF_ValueArray[16]];
 TUF_ValueObject.MODBUS["17-18: Positive energy accumulator. "] = [TUF_ValueArray[17], TUF_ValueArray[18]];
 TUF_ValueObject.MODBUS["19-20: Positive energy decimal fraction. "] = [TUF_ValueArray[19], TUF_ValueArray[20]];
 TUF_ValueObject.MODBUS["21-22: Negative energy accumulator. "] = [TUF_ValueArray[21], TUF_ValueArray[22]];
 TUF_ValueObject.MODBUS["23-24: Negative energy decimal fraction.  "] = [TUF_ValueArray[23], TUF_ValueArray[24]];
 TUF_ValueObject.MODBUS["25-26: Accumulator LONG."] = [TUF_ValueArray[25], TUF_ValueArray[26]];
 TUF_ValueObject.MODBUS["0027-0028: Net decimal fraction."] = [TUF_ValueArray[27], TUF_ValueArray[28]];
 TUF_ValueObject.MODBUS["0029-0030: Net energy accumulator."] = [TUF_ValueArray[29], TUF_ValueArray[30]];
 TUF_ValueObject.MODBUS["0031-0032: Net energy decimal fraction."] = [TUF_ValueArray[31], TUF_ValueArray[32]];
 TUF_ValueObject.MODBUS["0033-0034: Temperature #1/inlet."] = [TUF_ValueArray[33], TUF_ValueArray[34]];
 TUF_ValueObject.MODBUS["0035-0036: Temperature #2/outlet."] = [TUF_ValueArray[35], TUF_ValueArray[36]];
 TUF_ValueObject.MODBUS["0037-0038: Analog input AI3."] = [TUF_ValueArray[37], TUF_ValueArray[38]];
 TUF_ValueObject.MODBUS["0039-0040: Analog input AI4."] = [TUF_ValueArray[39], TUF_ValueArray[40]];
 TUF_ValueObject.MODBUS["0041-0042: Analog input AI5."] = [TUF_ValueArray[41], TUF_ValueArray[42]];
 TUF_ValueObject.MODBUS["0043-0044: Current input at AI3."] = [TUF_ValueArray[43], TUF_ValueArray[44]];
 TUF_ValueObject.MODBUS["0045-0046: Current input at AI3."] = [TUF_ValueArray[45], TUF_ValueArray[46]];
 TUF_ValueObject.MODBUS["0047-0048: Current input at AI3."] = [TUF_ValueArray[47], TUF_ValueArray[48]];
 TUF_ValueObject.MODBUS["0049-0050: System password."] = [TUF_ValueArray[49], TUF_ValueArray[50]];


 //comment so it is easier to actually follow, since it was really starting to blend together.
 TUF_ValueObject.MODBUS["0051: Password for hardware."] = [TUF_ValueArray[51], TUF_ValueArray[52]];
 TUF_ValueObject.MODBUS["0053-0055: Calendar (date and time)"] = [TUF_ValueArray[53], TUF_ValueArray[54], TUF_ValueArray[55]];
 TUF_ValueObject.MODBUS["0056: Day+Hour for Auto-Save."] = TUF_ValueArray[56];
 TUF_ValueObject.MODBUS["0059: Key to input."] = TUF_ValueArray[59];
 TUF_ValueObject.MODBUS["0060: Go to Window #."] = TUF_ValueArray[60];
 TUF_ValueObject.MODBUS["0061: LCD Back-lit lights for number of seconds."] = TUF_ValueArray[61];
 TUF_ValueObject.MODBUS["0062: Times for the beeper."] = TUF_ValueArray[62];
 TUF_ValueObject.MODBUS["0062: Pulses left for OCT."] = TUF_ValueArray[62];
 TUF_ValueObject.MODBUS["0072: Error Code BIT 16bits."] = TUF_ValueArray[72]
 TUF_ValueObject.MODBUS["0077-0078: PT100 resistance of inlet."] = [TUF_ValueArray[77], TUF_ValueArray[78]];
 TUF_ValueObject.MODBUS["0079-0080: PT100 resistance of outlet."] = [TUF_ValueArray[79], TUF_ValueArray[80]];
 TUF_ValueObject.MODBUS["0081-0082: Total travel time."] = [TUF_ValueArray[81], TUF_ValueArray[82]];
 TUF_ValueObject.MODBUS["0083-0084: Delta travel time."] = [TUF_ValueArray[83], TUF_ValueArray[84]];
 TUF_ValueObject.MODBUS["0085-0086: Upstream travel time."] = [TUF_ValueArray[85], TUF_ValueArray[86]];
 TUF_ValueObject.MODBUS["0087-0088: Downstream travel time."] = [TUF_ValueArray[87], TUF_ValueArray[88]];
 TUF_ValueObject.MODBUS["0089-0090: Output current."] = [TUF_ValueArray[89], TUF_ValueArray[90]];
 TUF_ValueObject.MODBUS["0092: Working step and Signal Quality."] = TUF_ValueArray[92];
 TUF_ValueObject.MODBUS["0093: Upstream strength."] = TUF_ValueArray[93];
 TUF_ValueObject.MODBUS["0094: Downstream strength."] = TUF_ValueArray[94];
 TUF_ValueObject.MODBUS["0096: Language English，1:Chinese."] = TUF_ValueArray[96];
 TUF_ValueObject.MODBUS["0097-0098: The rate of the measured travel."] = [TUF_ValueArray[97], TUF_ValueArray[98]];
 TUF_ValueObject.MODBUS["0099-0100: Reynolds number."] = [TUF_ValueArray[99], TUF_ValueArray[100]];
 


 





















console.log(TUF_ValueObject.MODBUS)
      
})







// app.listen(PORT,()=>{
   
// })