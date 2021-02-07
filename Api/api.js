
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
 TUF_ValueObject.MODBUS["1-2: Flow Rate: "] = [TUF_ValueArray[1] + ' m3/h',  TUF_ValueArray[2] + ' m3/h'];
 TUF_ValueObject.MODBUS["3-4: Energy Flow Rate: "] = [TUF_ValueArray[3] + ' GJ/h',  TUF_ValueArray[4] + ' GJ/h'];
 TUF_ValueObject.MODBUS["5-6: Velocity: "] = [TUF_ValueArray[5], TUF_ValueArray[6]];
 TUF_ValueObject.MODBUS["7-8: Fluid sound speed: "] = [TUF_ValueArray[7] + ' m/s', TUF_ValueArray[8] + ' m/s'];
 TUF_ValueObject.MODBUS["9-10: positive accumulator:"] = [TUF_ValueArray[9], TUF_ValueArray[10]];
 TUF_ValueObject.MODBUS["11-12: Positive decimal fraction: "] = [TUF_ValueArray[11], TUF_ValueArray[12]];
 TUF_ValueObject.MODBUS["13-14: Negative accumulator: "] = [TUF_ValueArray[13], TUF_ValueArray[14]];
 TUF_ValueObject.MODBUS["15-16: Negative decimal fraction: "] = [TUF_ValueArray[15], TUF_ValueArray[16]];
 TUF_ValueObject.MODBUS["17-18: Positive energy accumulator: "] = [TUF_ValueArray[17], TUF_ValueArray[18]];
 TUF_ValueObject.MODBUS["19-20: Positive energy decimal fraction: "] = [TUF_ValueArray[19], TUF_ValueArray[20]];
 TUF_ValueObject.MODBUS["21-22: Negative energy accumulator: "] = parseInt(TUF_ValueArray[21]) - parseInt(TUF_ValueArray[22]);
 TUF_ValueObject.MODBUS["23-24: Negative energy decimal fraction:  "] = [TUF_ValueArray[23], TUF_ValueArray[24]];
 TUF_ValueObject.MODBUS["25-26: Accumulator LONG: "] = [TUF_ValueArray[25], TUF_ValueArray[26]];
 TUF_ValueObject.MODBUS["27-28: Net decimal fraction: "] = [TUF_ValueArray[27], TUF_ValueArray[28]];
 TUF_ValueObject.MODBUS["29-30: Net energy accumulator: "] = [TUF_ValueArray[29], TUF_ValueArray[30]];
 TUF_ValueObject.MODBUS["31-32: Net energy decimal fraction: "] = [TUF_ValueArray[31], TUF_ValueArray[32]];
 TUF_ValueObject.MODBUS["33-34: Temperature #1/inlet: "] = [(TUF_ValueArray[33]), TUF_ValueArray[34]];
 TUF_ValueObject.MODBUS["35-36: Temperature #2/outlet: "] = [TUF_ValueArray[35], TUF_ValueArray[36]];
 TUF_ValueObject.MODBUS["37-38: Analog input AI3: "] = [TUF_ValueArray[37], TUF_ValueArray[38]];
 TUF_ValueObject.MODBUS["39-40: Analog input AI4: "] = [TUF_ValueArray[39], TUF_ValueArray[40]];
 TUF_ValueObject.MODBUS["41-42: Analog input AI5: "] = [TUF_ValueArray[41], TUF_ValueArray[42]];
 TUF_ValueObject.MODBUS["43-44: Current input at AI3: "] = [TUF_ValueArray[43], TUF_ValueArray[44]];
 TUF_ValueObject.MODBUS["45-46: Current input at AI3: "] = [TUF_ValueArray[45], TUF_ValueArray[46]];
 TUF_ValueObject.MODBUS["47-48: Current input at AI3: "] = [TUF_ValueArray[47], TUF_ValueArray[48]];
 TUF_ValueObject.MODBUS["49-50: System password: "] = [TUF_ValueArray[49], TUF_ValueArray[50]];


 //comment so it is easier to actually follow, since it was really starting to blend together.
 TUF_ValueObject.MODBUS["51: Password for hardware: "] = [TUF_ValueArray[51], TUF_ValueArray[52]];
 TUF_ValueObject.MODBUS["53-55: Calendar (date and time): "] = [TUF_ValueArray[53], TUF_ValueArray[54], TUF_ValueArray[55]];
 TUF_ValueObject.MODBUS["56: Day+Hour for Auto-Save: "] = TUF_ValueArray[56];
 TUF_ValueObject.MODBUS["59: Key to input: "] = TUF_ValueArray[59];
 TUF_ValueObject.MODBUS["60: Go to Window #: "] = TUF_ValueArray[60];
 TUF_ValueObject.MODBUS["61: LCD Back-lit lights for number of seconds: "] = TUF_ValueArray[61];
 TUF_ValueObject.MODBUS["62: Times for the beeper: "] = TUF_ValueArray[62];
 TUF_ValueObject.MODBUS["62: Pulses left for OCT: "] = TUF_ValueArray[62];
 TUF_ValueObject.MODBUS["72: Error Code: "] = [TUF_ValueArray[72],  filter(TUF_ValueArray[72])];
 TUF_ValueObject.MODBUS["77-78: PT100 resistance of inlet: "] = [TUF_ValueArray[77], TUF_ValueArray[78]];
 TUF_ValueObject.MODBUS["79-80: PT100 resistance of outlet: "] = [TUF_ValueArray[79], TUF_ValueArray[80]];
 TUF_ValueObject.MODBUS["81-82: Total travel time: "] = [msToReadableTime(TUF_ValueArray[81]),   msToReadableTime(TUF_ValueArray[82])];
 TUF_ValueObject.MODBUS["83-84: Delta travel time: "] = [TUF_ValueArray[83], TUF_ValueArray[84]];
 TUF_ValueObject.MODBUS["85-86: Upstream travel time: "] = [msToReadableTime(TUF_ValueArray[85]), msToReadableTime(TUF_ValueArray[86])];
 TUF_ValueObject.MODBUS["87-88: Downstream travel time: "] = [msToReadableTime(TUF_ValueArray[87]), msToReadableTime(TUF_ValueArray[88])];
 TUF_ValueObject.MODBUS["89-90: Output current: "] = [TUF_ValueArray[89], TUF_ValueArray[90]];
 TUF_ValueObject.MODBUS["92: Working step and Signal Quality: "] = TUF_ValueArray[92];
 TUF_ValueObject.MODBUS["93: Upstream strength: "] = TUF_ValueArray[93];
 TUF_ValueObject.MODBUS["94: Downstream strength: "] = TUF_ValueArray[94];
 TUF_ValueObject.MODBUS["96: Language used in user interface "] = [TUF_ValueArray[96], language(TUF_ValueArray[96])];
 TUF_ValueObject.MODBUS["97-98: The rate of the measured travel: "] = [TUF_ValueArray[97], TUF_ValueArray[98]];
 TUF_ValueObject.MODBUS["99-100: Reynolds number: "] = [TUF_ValueArray[99], TUF_ValueArray[100]];
 



// console.log(TUF_ValueArray)

//  console.log(TUF_ValueObject.MODBUS)


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


//readable milliseconds function
function msToReadableTime(time){
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
  
    let hours = Math.floor(time / hour % 24);
    let minutes = Math.floor(time / minute % 60);
    let seconds = Math.floor(time / second % 60);
   
  
    return hours + ':' + minutes + ":" + seconds;
  }


  function speed(s){
    const speeds = 3.6;
  
    let fast = Math.floor(s * speeds)
   
  
    return fast;
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