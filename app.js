var express = require('express');
var app = express();

app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views/')

app.get('/', function(req, res) {
    // res.send('Hello Express');
    res.render('default', {
        title: 'Home',
        users: ['Ray', 'Ryan']
    });
});

app.get('/me', function(req, res) {
    res.send('2nd Api');
});

app.get('/who/:name?', function(req, res) {
    res.send(req.params.name);
});

var server = app.listen(3000, function() {
    console.log('Listening on port 3000');
});