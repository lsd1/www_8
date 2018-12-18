const express = require('express');
const path = require('path');
var history= require("connect-history-api-fallback");
const port = process.env.PORT || 8080;
const app = express();
app.use(history({verbose: true}))
.use(express.static(path.join(__dirname + '/dist')))
.listen(port);