const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');
// used for testing fetch my IP
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   } else if (ip) {
//     console.log('It worked! Returned IP:', ip);
//   }
// });

//fetch coords test code
// fetchCoordsByIP('142.179.2.174', (error, data) => {
//   if(error){
//     console.log("It didn't work dumbass!", error);
//     return;
//   }
//   console.log('It worked! Returned Coords:',data);
// });

//used to test pass finder
// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' },(error, data) => {
//   if (error) {
//     console.log(`C'mon Guy this didn't work, figure it out`, error);
//     return;
//   }
//   console.log(`Blast off! You got the stuff kid, your really did it!`, data)
// })


// used to test final function




// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   // success, print out the deets!
//   console.log(passTimes);
// });

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});