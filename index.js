const { fetchMyIP, fetchCoordsByIP } = require('./iss');
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