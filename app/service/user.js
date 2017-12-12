var mongodb = require("mongoose");

var url = "mongodb://localhost:27017/vuejs";

mongodb.connection.openUri(url);

/**
  * 连接成功
  */
mongodb.connection.on('connected', function () {    
    console.log('Mongoose connection open to ');  
});    

/**
 * 连接异常
 */
mongodb.connection.on('error',function (err) {    
    console.log('Mongoose connection error: ' + err);  
}); 

var testModel = mongodb.Schema({
	name:String,
	author:String,
})

var Test = mongodb.model('Test', testModel);


