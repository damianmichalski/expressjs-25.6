var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');


app.use('/store',function(req, res, next){
    console.log('Hej, jestem pośrednikiem żądaniu do /store!');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/store', function (req, res) {
    res.send('To jest sklep');
});

app.get('/first-template', function(req, res){
    res.render('first-template');
});

app.get('/dynamic-view', function(req, res){
    res.render('dynamic', {
        name: "Moja dynamiczna strona",
        url: "http://www.google.com"
    });
});

app.get('/content', function(req, res){
    res.render('content');
});

app.get('/signup', function(req, res){
    res.render('signup');
});

app.get('/userform', function (req, res) {
        const response = {
            name: req.query.name,
            password: req.query.password
        };
        if (response.name == 'admin' && response.password == 'admin') {
            res.render('welcome2');
        }
        
    });

app.get('/auth/google', function(req, res){
    res.render('welcome');
});

var server = app.listen(2000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});