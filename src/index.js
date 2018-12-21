var sass = require('sass');
var bodyParser = require('body-parser');
var cors = require('cors');

const jsonBody = bodyParser.json(); // for parsing application/json
const urlBody = bodyParser.urlencoded({ extended: true }); // for parsing application/x-www-form-urlencoded
const main = (req, res) => () => {
    const input = req.body.sass;
    res.setHeader('Content-Type',  'text/css; charset=utf-8');
    res.end(sass.renderSync({data: input}).css);
}
const body = (req, res) => () => jsonBody(req, res, () => urlBody(req, res, main(req, res)));
const corsHandler = (req, res) => () => cors()(req, res, body);

module.exports = (req, res) => corsHandler(req, res)();