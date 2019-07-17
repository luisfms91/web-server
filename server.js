const express = require('express');

const app = express();

const hbs = require('hbs');

//variable heroku
//const port = process.env.PORT;

app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

hbs.registerHelper('getAnio', ()=>{
    return new Date().getFullYear();    
});

app.get('/', function(req, res){
    res.render('pagina1',{
        fecha: new Date().getFullYear()
    });
});

app.get('/pagina2', function(req, res){
    res.render('pagina2',{
        fecha: new Date().getFullYear()
    });
});

app.listen(3000, ()=>{
    console.log("server");
});