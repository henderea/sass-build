const sass = require('sass');
const bodyParser = require('body-parser');
const cors = require('cors');
const Handler = require('@henderea/middleware-handler');

const handler = new Handler();
handler.use(cors());
handler.use(bodyParser.json()); // for parsing application/json
handler.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
handler.handle((req, res) => {
    const input = req.body.sass;
    res.setHeader('Content-Type', 'text/css; charset=utf-8');
    res.end(sass.renderSync({ data: input }).css);
});

module.exports = handler.handler;