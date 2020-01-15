var http = require('http');

var server = http.createServer(function(req,res){

    var categoria = req.url;
        console.log("Requisição de URL ", categoria);
    
    if (categoria == '/tecnologia') {
        res.end("<html><body><h1>Portal de Tecnologia</h1></body></html>");

    }else if (categoria == '/moda') {
        res.end("<html><body><h1>Portal de Moda</h1></body></html>");

    }else if (categoria == '/beleza') {
        res.end("<html><body><h1>Portal de Beleza</h1></body></html>");

    }else {
        res.end("<html><body><h1>Portal de Notícias</h1></body></html>");
    }
});

server.listen(3000);