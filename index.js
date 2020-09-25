const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
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
fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' },(error, data) => {
  if (error) {
    console.log(`C'mon Guy this didn't work, figure it out`, error);
    return;
  }
  console.log(`Blast off! You got the stuff kid, your really did it!`, data)
})
