var sass = require('sass');
var bodyParser = require('body-parser');

const jsonBody = bodyParser.json(); // for parsing application/json
const urlBody = bodyParser.urlencoded({ extended: true }); // for parsing application/x-www-form-urlencoded

module.exports = function(req, res) {
    jsonBody(req, res, () => urlBody(req, res, () => {
        const input = req.body.sass;
        res.setHeader('Content-Type',  'text/css; charset=utf-8');
        res.end(sass.renderSync({data: input}).css);
    }))
  }