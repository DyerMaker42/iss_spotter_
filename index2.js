//const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, } = require('./iss_promised');
const {nextISSTimesForMyLocation} = require('./iss_promised');
// fetchMyIP()
// .then(fetchCoordsByIP)
// .then(fetchISSFlyOverTimes)
// .then(body => console.log(body))
// .catch (res => console.log(res, "this error"));

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });