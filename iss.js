/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    // console.log(body)
    //console.log(data.ip)
    callback(null,ip);
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request('https://ipvigilante.com/8.8.8.8', (error, response, body)=>{
    if (error){
      return callback
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }

    const coords = {latittude: body.data.latittude, longitutde:body.data.longitutde}
    console.log(coords)
    
    
    callback(coords)
  })
}




module.exports = { fetchMyIP, fetchCoordsByIP };