var express = require('express')
var rutasExpediente = require('./routes/expedientes.js');

var app = express()

app.use(express.static(__dirname + '/public'));
app.use('/api/expedientes', rutasExpediente);

app.listen(3000);