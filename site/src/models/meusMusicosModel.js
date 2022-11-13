var database = require("../database/config");

function cadastrar(idOrquestra, nome, telefone, instrumento) {

    console.log(`ACESSEI O CADASTRAR MODEL \n \n\t\t 
    >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t 
    >> verifique suas credenciais de acesso ao banco\n \t\t 
    >> e se o servidor de seu BD está rodando corretamente. \n\n 
    function publicar(): ${idOrquestra},${nome},${telefone},${instrumento}`);

    var instrucao =
        `
        INSERT INTO musico (idMusico, nome, telefone, fkOrquestra, fkInstrumento)
            VALUES
                (
                    (
                        select
                            if (
                                count(m.idMusico) = 0,
                                1,
                                (
                                    select
                                        idMusico
                                    from
                                        Musico m
                                        join orquestra o on m.fkOrquestra = o.idOrquestra
                                    where
                                        o.idOrquestra = ${idOrquestra}
                                    order by
                                        m.idMusico desc
                                    limit 1
                                ) + 1
                            )
                        from
                            Musico m
                            join orquestra o on m.fkOrquestra = o.idOrquestra
                        where
                            o.idOrquestra = ${idOrquestra}
                    ),
                    '${nome}',
                    '${telefone}',
                    ${idOrquestra},
                    ${instrumento}
            );
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

function editar(idMusico, nome, telefone, instrumento) {
    console.log(`ACESSEI O EDITAR MODEL \n \n\t\t 
    >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t 
    >> verifique suas credenciais de acesso ao banco\n \t\t 
    >> e se o servidor de seu BD está rodando corretamente. \n\n 
    function editar(): " ${idMusico},${nome},${telefone},${instrumento}`);

    var instrucao = `
        UPDATE musico SET nome = '${nome}', telefone = '${telefone}', fkInstrumento = '${instrumento}' WHERE idMusico = ${idMusico};
`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function listarUm(idMusico) {
    console.log(`ACESSEI O LISTAR UM MODEL \n \n\t\t 
    >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t 
    >> verifique suas credenciais de acesso ao banco\n \t\t 
    >> e se o servidor de seu BD está rodando corretamente. \n\n 
    function listar()`);

    var instrucao = `
   select m.idMusico,
          m.nome,
          i.naipe,
          m.fkInstrumento as instrumento,
          m.telefone     
            from musico m join instrumento i 
                on fkInstrumento = idInstrumento 
                    where idMusico = ${idMusico}; 
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function pesquisarNome(idOrquestra, pesquisa) {
    console.log(`ACESSEI O PESQUISA NOME MODEL \n \n\t\t 
    >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t 
    >> verifique suas credenciais de acesso ao banco\n \t\t 
    >> e se o servidor de seu BD está rodando corretamente. \n\n 
    function pesquisarDescricao() ${idOrquestra}, ${pesquisa}`);

    var instrucao = `
    select m.idMusico,
    m.nome,
    i.nome as instrumento,
    m.telefone     
      from musico m join instrumento i 
          on fkInstrumento = idInstrumento 
              where fkOrquestra = ${idOrquestra} and m.nome = '${pesquisa}'; 
            
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function pesquisarInstrumento(idOrquestra, pesquisa) {
    console.log(`ACESSEI O PESQUISA INSTRUMENTO MODEL \n \n\t\t 
    >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t 
    >> verifique suas credenciais de acesso ao banco\n \t\t 
    >> e se o servidor de seu BD está rodando corretamente. \n\n 
    function pesquisarDescricao() ${idOrquestra}, ${pesquisa}`);

    var instrucao = `
    select m.idMusico,
    m.nome,
    i.nome as instrumento,
    m.telefone     
      from musico m join instrumento i 
          on fkInstrumento = idInstrumento 
              where fkOrquestra = ${idOrquestra} and i.nome = '${pesquisa}'; 
            
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function pesquisarNaipe(idOrquestra, pesquisa) {
    console.log(`ACESSEI O PESQUISA NAIPE MODEL \n \n\t\t 
    >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t 
    >> verifique suas credenciais de acesso ao banco\n \t\t 
    >> e se o servidor de seu BD está rodando corretamente. \n\n 
    function pesquisarDescricao() ${idOrquestra}, ${pesquisa}`);

    var instrucao = `
    select m.idMusico,
    m.nome,
    i.nome as instrumento,
    m.telefone     
      from musico m join instrumento i 
          on fkInstrumento = idInstrumento 
              where fkOrquestra = ${idOrquestra} and i.naipe = '${pesquisa}'; 
            
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function pesquisarTelefone(idOrquestra, pesquisa) {
    console.log(`ACESSEI O PESQUISA NOME MODEL \n \n\t\t 
    >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t 
    >> verifique suas credenciais de acesso ao banco\n \t\t 
    >> e se o servidor de seu BD está rodando corretamente. \n\n 
    function pesquisarDescricao() ${idOrquestra}, ${pesquisa}`);

    var instrucao = `
    select m.idMusico,
    m.nome,
    i.nome as instrumento,
    m.telefone     
      from musico m join instrumento i 
          on fkInstrumento = idInstrumento 
              where fkOrquestra = ${idOrquestra} and m.telefone = '${pesquisa}'; 
            
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrar,
    listar,
    deletar,
    editar,
    listarUm,
    pesquisarNome,
    pesquisarInstrumento,
    pesquisarNaipe,
    pesquisarTelefone
}
