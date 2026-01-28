const apple = require("./apple")  // collect data from app.js
const banana = require("./banana")  // collect data from banana.js
const orange = require("./orange")   //collect data from apple.js
let fruits = [apple,banana,orange];   // compile all the data

module.exports = fruits;           //exports the value 
