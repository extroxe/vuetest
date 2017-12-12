require('../service/user.js');
var mongoose = require('mongoose');
var Test = mongoose.model('Test');
// var app = express();

module.exports = {
	list:function(req, res, next){
		Test.find({}, function(err, docs){
			if(err) return next(err);
			return res.json(docs);
			console.log('访问list');
		})
	},
	create:function(req, res, next){

	}
}




