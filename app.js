var app = require('./config/server')

/* var rotaHome = require('./app/routes/home');
rotaHome(app); //Forma didática de executar a function que foi importada

var rotaNoticias = require('./app/routes/noticias')(app); //Forma direta de execução da function já no require

var rotaFormNoticias = require('./app/routes/form_inclu_noticia')(app); */


app.listen(3000, function(){
    console.log('server up with express')
});