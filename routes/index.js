var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/test',function(req, res){
	console.log('start');
	res.render('screen/lib1/test');
});

router.get('/test1',function(req, res){
	console.log('start');
	res.render('screen/lib1/test1');
});


module.exports = router;
