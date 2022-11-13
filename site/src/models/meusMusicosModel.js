var database = require("../database/config");

function cadastrar(idOrquestra, nome, telefone, instrumento) {

    console.log(`ACESSEI O CADASTRAR MODEL \n \n\t\t 
    >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t 
    >> verifique suas credenciais de acesso ao banco\n \t\t 
    >> e se o servidor de seu BD está rodando corretamente. \n\n 
    function publicar(): ${idOrquestra},${nome},${telefone},${instrumento}`);

    var instrucao = `
        INSERT INTO musico (nome,telefone,fkOrquestra,fkInstrumento) VALUES ('${nome}','${telefone}',${idOrquestra},${instrumento}); 
    `;

    return database.executar(instrucao)
}

function listar(idOrquestra) {
    console.log(`ACESSEI O LISTAR MODEL \n \n\t\t 
    >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t 
    >> verifique suas credenciais de acesso ao banco\n \t\t 
    >> e se o servidor de seu BD está rodando corretamente. \n\n 
    function listar()`);

    var instrucao = `
   select m.idMusico,
          m.nome,
          i.nome as instrumento,
          m.telefone     
            from musico m join instrumento i 
                on fkInstrumento = idInstrumento 
                    where fkOrquestra = ${idOrquestra}; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(idMusico) {
    console.log(`ACESSEI O AVISO MODEL \n \n\t\t 
    >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t 
    >> verifique suas credenciais de acesso ao banco\n \t\t 
    >> e se o servidor de seu BD está rodando corretamente. \n\n 
    function deletar():", ${idMusico}`);

    var instrucao = `
        DELETE FROM musico WHERE idMusico = ${idMusico};
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    deletar
}
