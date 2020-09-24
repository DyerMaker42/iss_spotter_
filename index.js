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

fetchCoordsByIP('142.179.2.174', (error, data) => {
  console.log(error, data);
});