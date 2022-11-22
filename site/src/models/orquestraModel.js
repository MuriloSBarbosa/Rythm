var database = require("../database/config")

function listar() {
    console.log("ACESSEI A ORQUESTRA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM orquestra;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(login, senha) {
    console.log(`ACESSEI O USUARIO MODEL \n \n\t\t 
    >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t 
    >> verifique suas credenciais de acesso ao banco\n \t\t >> 
    e se o servidor de seu BD está rodando corretamente. \n\n 
    function entrar():${login}, ${senha}`)

    var instrucao = `
        SELECT * FROM orquestra WHERE login = '${login}' AND senha = SHA2('${senha}',256);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastroContato(insertid, email, telefone, celular) {
    console.log(`ACESSEI A MODEL cadastroOrquestra \n \n\t\t 
    >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t 
    >> verifique suas credenciais de acesso ao banco\n \t\t 
    >> e se o servidor de seu BD está rodando corretamente. \n\n 
    function cadastroOrquestra(): ${insertid},${email},${telefone},${celular}`);

    var instrucao = `
        INSERT INTO contato (emailContato, telefoneContato, celularContato,fkOrquestra) VALUES ('${email}','${telefone}', '${celular}', '${insertid}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastroOrquestra(nome, login, senha) {
    console.log(`ACESSEI A TESTE (tabela orquestra) MODEL \n \n\t\t 
    >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t 
    >> verifique suas credenciais de acesso ao banco\n \t\t 
    >> e se o servidor de seu BD está rodando corretamente. \n\n 
     function cadastrar():${nome}, ${login}, ${senha},`);

    var instrucao = `
        INSERT INTO orquestra (nome,login,senha) VALUES ('${nome}','${login}', SHA2('${senha}',256));
        `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    entrar,
    cadastroOrquestra,
    cadastroContato,
    listar,
};