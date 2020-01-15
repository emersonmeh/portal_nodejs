module.exports = function(app) {

    //método render é nativo do EJS e não do Express
    app.get('/', function(req, res){
        app.app.controllers.home.home(app, req, res);
    });
}
    

