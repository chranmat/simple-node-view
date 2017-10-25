var express = require('express');
var view = require('../');

var app = express();

view.load( { dir: './views/', format: '.html' })


app.get('/:name', function(req, res){

    var indexpage = {
        title: 'My homepage',
        header: 'Welcome...',
        text: 'Welcome to my homepage',
        name: req.params.name
    }

    content = view.get('index', indexpage);

    res.send(content);

});

app.listen(3000, function(err) {
    if(err) throw err;
    console.log('Listening');
});