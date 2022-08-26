var express = require('express');
var router = express.Router();

let opt = {
  title:'hello'
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('question', opt);
});

module.exports = router;