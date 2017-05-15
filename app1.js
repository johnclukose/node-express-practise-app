var express = require('express');
var app = express();
var routes = require('./routes');

app.set('view engine', 'ejs');

// locals data is shared across all templates/pages
app.locals.pagetitle = "Page Title";

app.get('',function(req, res) {
    res.render('default1', {
        title: 'Home',
        users: ['Ray', 'Ryan']
    });
});

app.get('/about',routes.about);

app.get('*', function(req, res) {
    res.send('Bad Request');
})

var server = app.listen(3000, function() {
    console.log('Listening on port 3000');
})