const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json')
}

const fetchCoordsByIP = function(ip){
  const IP = JSON.parse(ip)["ip"]
  console.log(IP)
}
module.exports = {fetchMyIP, fetchCoordsByIP}