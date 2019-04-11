let mongoose = require('mongoose')

  mongoose.connect('mongodb://localhost:27017/travel');
  mongoose.connection.on('open',()=>{
      console.log('chenggong')
     })
    mongoose.connection.on('error',function (err) {    
    console.log('Mongoose connection error: ' + err);  
}); 
module.exports = mongoose;