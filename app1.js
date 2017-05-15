var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('',function(req, res) {
    res.render('default1', {
        title: 'Home',
        users: ['Ray', 'Ryan']
    });
});

app.get('*', function(req, res) {
    res.send('Bad Request');
})

var server = app.listen(3000, function() {
    console.log('Listening on port 3000');
})