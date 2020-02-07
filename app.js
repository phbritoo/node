const express = require("express");
const app = express;
const handlebars = require('handlebars');
const Sequelize = require("sequelize");
const sequelize = new Sequelize('test', 'paulo', 'SemSenha@123@', {
    host: "localhost",
    dialect: 'mysql'
});

//Config
    //Template Engine
    app.engine('handlebars', handlebars({
        defaultLayout: 'main'
    }));
    app.set('view engine', 'handlebars');


app.listen(8081, function(){
    console.log("Servidor rodado! porta 8081");
});