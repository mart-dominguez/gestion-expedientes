var express = require('express')
var rutasExpediente = require('routes/expedientes');

var app = express()

app.use(express.static(__dirname + '/public'));
app.use('/api/expediente', rutasExpediente);

app.listen(3000);