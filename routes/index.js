var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'KrupaTrust' });
});
/*Getting people page */
router.get('/people', function(req, res) {
  res.render('people', { title: 'People' });
});
/* Getting Vision page */
router.get('/vision', function(req, res) {
  res.render('vision', { title: 'Vision' });
});

module.exports = router;
