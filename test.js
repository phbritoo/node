//Aquivo de teste de conexao 
const Sequelize = require("sequelize");
const sequelize = new Sequelize('test', 'paulo', 'SemSenha@123@', {
    host: "localhost",
    dialect: 'mysql'
});
/*
sequelize.authenticate().then(function () {
    console.log("Conectado ao banco!")
}).catch(function (erro) {
    console.log("Falha ao se conectar: " + erro)
})
*/
//Cria uma tabela no banco chamado postagens
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
});
// Executa a criacao da tabela - EXECUTA SOMENTE UMA VEZ
//Postagem.sync({force: true});

//Inserir dados na tabela
/*Postagem.create({
    titulo: "Um titulo de teste",
    conteudo: "um conteudo qualquer"

});
*/

//Cria uma tabela no banco chamado usuarios
const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
});
// Executa a criacao da tabela - EXECUTA SOMENTE UMA VEZ
//Usuario.sync({force: true});

/*Usuario.create({
    nome: "Paulo",
    sobrenome: "Brito",
    idade: 23,
    email:"teste@teste.com"
});
*/

