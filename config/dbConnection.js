var mysql = require('mysql');

// Função enviada para a variável(wrapper) para evitar problemas com o autoload 
// quando modulo for carregado via consign no server 
var connMySQL = function() {
    return mysql.createConnection({
        host: 'mysqllab.local',
        user: 'root',
        password: '1987@efs',
        database: 'portal_noticias'
    });
}

module.exports = function() {
    return connMySQL;
}