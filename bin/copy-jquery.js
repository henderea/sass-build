const fs = require('fs-extra');
const path = require('path');

fs.copySync(path.join(__dirname, '../node_modules/jquery/dist'), path.join(__dirname, '../dist/jquery'));