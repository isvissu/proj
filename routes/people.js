var express = require('express');
var router = express.Router();

/* GET people page. */
router.get('/people',function(req , res) {
  res.render('people',{ title: 'People'});
});
module.exports = router;


