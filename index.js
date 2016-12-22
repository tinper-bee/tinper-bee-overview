var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'build')));

var server = app.listen(9011, function () {
    console.log('server start');
});
