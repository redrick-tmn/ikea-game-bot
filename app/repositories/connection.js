"use strict";

let mongoose = require('mongoose'); 
let botConfig = require('./../bot-config.js');

mongoose.connect(botConfig.db); 

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + botConfig.db);
}); 

mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});
 
process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 