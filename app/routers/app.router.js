var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var controllers = require('../controller/user')

module.exports = function(){
	app.use(bodyParser.urlencoded({ extended:false }));
	app.use(bodyParser.json());

	// app.use(express.static('./public', {'index':'test.html'}));
	app.use(express.static('./public'));

	app.route('/news')
	.get(controllers.list)
	.post(controllers.create)

	return app;
}

