
const fs = require('fs');
const axios = require("axios")






async function fetch() {

const url = "http://localhost:9000"
// const url ="http://tuftuf.gambitlabs.fi/feed.txt"

let TUF_ValueArrays = []
let TUF_ValueObject = {};

let TUF_ValueArray = [];

axios.get(url).then(function (response) {

// console.log(response)
const TUF_ValueText = response.data

// If it is a text file and not straight from website
TUF_ValueArrays = TUF_ValueText.split("\r\n"); 


    // TUF_ValueArrays = TUF_ValueText.split("\n");
    TUF_ValueArrays.forEach(function(v, i) {
         TUF_ValueArray[i] = v.split(":")[1];
       
            // console.log(TUF_ValueArray[i])
            
        });
    
 TUF_ValueObject.MODBUS = {};
 TUF_ValueObject.MODBUS["1-2: Flow Rate: "] = test(TUF_ValueArray[1], TUF_ValueArray[2]); //REAL4
 TUF_ValueObject.MODBUS["3-4: Energy Flow Rate: "] = [TUF_ValueArray[3],  TUF_ValueArray[4] ]; //REAL4
 TUF_ValueObject.MODBUS["5-6: Velocity: "] = [TUF_ValueArray[5] , TUF_ValueArray[6] ]; //REAL4
 TUF_ValueObject.MODBUS["7-8: Fluid sound speed: "] = [TUF_ValueArray[7] , TUF_ValueArray[8]]; //REAL4
 TUF_ValueObject.MODBUS["9-10: positive accumulator:"] = parseInt(TUF_ValueArray[9]) +  parseInt(TUF_ValueArray[10]); //LONG
 TUF_ValueObject.MODBUS["11-12: Positive decimal fraction: "] = [TUF_ValueArray[11], TUF_ValueArray[12]]; //REAL4
 TUF_ValueObject.MODBUS["13-14: Negative accumulator: "] = parseInt(TUF_ValueArray[13]) - parseInt(TUF_ValueArray[14]); //LONG
 TUF_ValueObject.MODBUS["15-16: Negative decimal fraction: "] = [TUF_ValueArray[15], TUF_ValueArray[16]]; //REAL4
 TUF_ValueObject.MODBUS["17-18: Positive energy accumulator: "] = parseInt(TUF_ValueArray[17]) + parseInt(TUF_ValueArray[18]); //LONG
 TUF_ValueObject.MODBUS["19-20: Positive energy decimal fraction: "] = [TUF_ValueArray[19], TUF_ValueArray[20]]; //REAL4
 TUF_ValueObject.MODBUS["21-22: Negative energy accumulator: "] = parseInt(TUF_ValueArray[21]) - parseInt(TUF_ValueArray[22]); //LONG
 TUF_ValueObject.MODBUS["23-24: Negative energy decimal fraction:  "] = [TUF_ValueArray[23], TUF_ValueArray[24]]; //REAL4
 TUF_ValueObject.MODBUS["25-26: Net Accumulator "] = parseInt(TUF_ValueArray[25]) + parseInt(TUF_ValueArray[26]); //LONG
 TUF_ValueObject.MODBUS["27-28: Net decimal fraction: "] = [TUF_ValueArray[27], TUF_ValueArray[28]]; //REAL4 
 TUF_ValueObject.MODBUS["29-30: Net energy accumulator: "] = parseInt(TUF_ValueArray[29]) + parseInt(TUF_ValueArray[30]); //LONG
 TUF_ValueObject.MODBUS["31-32: Net energy decimal fraction: "] = [TUF_ValueArray[31], TUF_ValueArray[32]]; //REAL4
 TUF_ValueObject.MODBUS["33-34: Temperature #1/inlet: "] = test(TUF_ValueArray[33], TUF_ValueArray[34]); //REAL4
 TUF_ValueObject.MODBUS["35-36: Temperature #2/outlet: "] = [TUF_ValueArray[35], TUF_ValueArray[36]]; //REAL4
 TUF_ValueObject.MODBUS["37-38: Analog input AI3: "] = [TUF_ValueArray[37] ,TUF_ValueArray[38]] ; //REAL4
 TUF_ValueObject.MODBUS["39-40: Analog input AI4: "] = [TUF_ValueArray[39] , TUF_ValueArray[40]] ; //REAL4
 TUF_ValueObject.MODBUS["41-42: Analog input AI5: "] = [TUF_ValueArray[41] , TUF_ValueArray[42]] ; //REAL4
 TUF_ValueObject.MODBUS["43-44: Current input at AI3: "] = [TUF_ValueArray[43],  TUF_ValueArray[44]] ; //REAL4
 TUF_ValueObject.MODBUS["45-46: Current input at AI3: "] = [TUF_ValueArray[45], TUF_ValueArray[46]] ; //REAL4
 TUF_ValueObject.MODBUS["47-48: Current input at AI3: "] = [TUF_ValueArray[47] , TUF_ValueArray[48]]; //REAL4
 TUF_ValueObject.MODBUS["49-50: System password: "] = [TUF_ValueArray[49], TUF_ValueArray[50]]; //BCD


 //comment so it is easier to actually follow, since it was really starting to blend together.
 TUF_ValueObject.MODBUS["51: Password for hardware: "] = [TUF_ValueArray[51], TUF_ValueArray[52]]; //BCD
 TUF_ValueObject.MODBUS["53-55: Calendar (date and time): "] = [TUF_ValueArray[53], TUF_ValueArray[54], TUF_ValueArray[55]]; //BCD
 TUF_ValueObject.MODBUS["56: Day+Hour for Auto-Save: "] = TUF_ValueArray[56]; //BCD
 TUF_ValueObject.MODBUS["59: Key to input: "] = integer(TUF_ValueArray[59]); //INTEGER
 TUF_ValueObject.MODBUS["60: Go to Window #: "] = integer(TUF_ValueArray[60]); //INTEGER
 TUF_ValueObject.MODBUS["61: LCD Back-lit lights for number of seconds: "] = integer(TUF_ValueArray[61]); //INTEGER
 TUF_ValueObject.MODBUS["62: Times for the beeper: "] = integer(TUF_ValueArray[62]); //INTEGER
 TUF_ValueObject.MODBUS["62: Pulses left for OCT: "] = integer(TUF_ValueArray[62]); //INTEGER
 TUF_ValueObject.MODBUS["72: Error Code: "] = [TUF_ValueArray[72],  filter(TUF_ValueArray[72])]; //BIT
 TUF_ValueObject.MODBUS["77-78: PT100 resistance of inlet: "] = [TUF_ValueArray[77] , TUF_ValueArray[78]]; //REAL4
 TUF_ValueObject.MODBUS["79-80: PT100 resistance of outlet: "] = [TUF_ValueArray[79], TUF_ValueArray[80]]; //REAL4
 TUF_ValueObject.MODBUS["81-82: Total travel time: "] = [TUF_ValueArray[81],  TUF_ValueArray[82]]; //REAL4
 TUF_ValueObject.MODBUS["83-84: Delta travel time: "] = [TUF_ValueArray[83], TUF_ValueArray[84]]; //REAL4
 TUF_ValueObject.MODBUS["85-86: Upstream travel time: "] = [TUF_ValueArray[85], TUF_ValueArray[86]]; //REAL4
 TUF_ValueObject.MODBUS["87-88: Downstream travel time: "] = [TUF_ValueArray[87],TUF_ValueArray[88]]; //REAL4
 TUF_ValueObject.MODBUS["89-90: Output current: "] = [TUF_ValueArray[89], TUF_ValueArray[90]]; //REAL4
 TUF_ValueObject.MODBUS["92: Working step and Signal Quality: "] =  integer(TUF_ValueArray[92]);  //INTEGER
 TUF_ValueObject.MODBUS["93: Upstream strength: "] = integer(TUF_ValueArray[93]); //INTEGER
 TUF_ValueObject.MODBUS["94: Downstream strength: "] = integer(TUF_ValueArray[94]); //INTEGER
 TUF_ValueObject.MODBUS["96: Language used in user interface "] = [TUF_ValueArray[96], language(TUF_ValueArray[96])]; //INTEGER
 TUF_ValueObject.MODBUS["97-98: The rate of the measured travel: "] = [TUF_ValueArray[97], TUF_ValueArray[98]]; //REAL4
 TUF_ValueObject.MODBUS["99-100: Reynolds number: "] = [TUF_ValueArray[99], TUF_ValueArray[100]]; //REAL4
 

// console.log(dectohex(TUF_ValueArray[92]))
// console.log(hope([TUF_ValueArray[93]]))


const json = JSON.stringify( TUF_ValueObject.MODBUS, null, " ")






 fs.writeFile("data.json", json, function(err) {
    if (err) {
        console.log(err);
    }
});

})

}

const CronJob = require('cron').CronJob;
const job = new CronJob('0 0 1 */6 *', function() {

fetch()

  console.log('This runs every 6 months');
}, null, true, 'America/Los_Angeles');
job.start();


// fetch()
// 

// value1 = '15568', value2 = '16611'

function test (value1, value2  )  {

 
const dog = parseInt(value2).toString(16)
const dog2 = parseInt(value1).toString(16)


const hex = dog + dog2


var str = '0x' + hex;


    var float = 0, sign, order, mantissa, exp,
    int = 0, multi = 1;
    if (/^0x/.exec(str)) {
        int = parseInt(str, 16);
    }
    else {
        for (var i = str.length -1; i >=0; i -= 1) {
            if (str.charCodeAt(i) > 255) {
                return false;
            }
            int += str.charCodeAt(i) * multi;
            multi *= 256;
        }
    }
    sign = (int >>> 31) ? -1 : 1;
    exp = (int >>> 23 & 0xff) - 127;
    mantissa = ((int & 0x7fffff) + 0x800000).toString(2);
    for (i=0; i<mantissa.length; i+=1) {
        float += parseInt(mantissa[i]) ? Math.pow(2, exp) : 0;
        exp--;
    }
    // console.log(float*sign)
    return float*sign;


}







function integer(dec) {
    const c = parseInt(dec).toString(16).substr(-2)
   
    return parseInt(c, 16)
}



  //Makes it easier to add more languages in the future
function language (lang) {
    switch(lang) {
        case '0':
            lang ='English'
            break;
        case '1':
            lang= 'Chinese'
            break;
    } 
    return lang;   
}


// error function
function filter(value) {
    switch (value) {
    case '0':
        value = 'no received signal';
        break;
    case '1':
        value = 'low received signal';   
        break;
    case '2':
        value = 'poor received signal';
        break;
    case '3':
        value = 'pipe empty';
        break;
    case '4':
        value= 'hardware failure';
        break;
    case '5':
        value = 'receiving circuits gain in adjusting ';
        break;
    case '6':
        value = 'frequency at the frequency output over flow ';   
        break;
    case '7':
        value = 'current at 4-20mA over flow ';
        break;
    case '8':
        value = 'RAM check-sum error';
        break;
    case '9':
        value= 'main clock or timer clock error';
        break;

    case '10':
        value= 'parameters check-sum error ';
        break;
    case '11':
        value= 'ROM check-sum error';
        break;
    case '12':
        value= 'temperature circuits error ';
        break;
    case '13':
        value= 'reserved ';
        break;
    case '14':
        value= 'internal timer over flow';
        break;
    case '15':
        value= 'analog input over range';
        break;
    }   
    
    return value;
}
