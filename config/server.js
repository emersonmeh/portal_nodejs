var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser')
var expressValidator = require('express-validator'); //deve estar na versão 5.3 para funcionar como no curso

var app = express();
app.set('view engine', 'ejs'); //altera o engine de view do express para o EJS
app.set('views', './app/views'); //informa o diretorio onde encontra-se as views

//Mapeamento dos arquivos estáticos
app.use(express.static('./app/public'));

//Body-parse age como middleware na recuperação de informações transitadas via metodo POST
app.use(bodyParser.urlencoded({extended:true}));

app.use(expressValidator());

// Faz o include do diretorio Routes para scan e passa todas as rotas por paramentro 
// para dentro do servidor, tambem carrega o modulo de conexão com banco de dados e
// demais modulos necessários.
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app); 

module.exports = app;