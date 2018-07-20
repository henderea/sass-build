var express = require('express');
var router = express.Router();
var sass = require('node-sass');

router.get('/', function(req, res, next) {
  res.send('Please use POST');
})
router.post('/', function(req, res, next) {
  const input = req.body.sass;
  res.set('Content-Type',  'text/css; charset=utf-8');
  res.send(sass.renderSync({data: input}).css);
});

module.exports = router;
