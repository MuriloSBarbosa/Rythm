var database = require("../database/config");

function obterDadosGerais(idOrquestra) {
    console.log(`ACESSEI O OBTER DADOS GERAIS  MODEL \n \n\t\t 
        >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t 
        >> verifique suas credenciais de acesso ao banco\n \t\t 
        >> e se o servidor de seu BD está rodando corretamente. \n\n 
        function obterDados() ${idOrquestra}`);

    var instrucao = `
    select  count(i.nome) as qtdInstrumento,
            i.nome,
            i.idInstrumento
                from musico m 
                join instrumento i on m.fkInstrumento = i.idInstrumento
                join orquestra o on o.idOrquestra = m.fkOrquestra
            where o.idOrquestra = ${idOrquestra}
            group by i.nome order by i.nome;
   `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function obterDadosTipo(idOrquestra, tipo) {
    console.log(`ACESSEI O OBTER DADOS TIPO MODEL \n \n\t\t 
        >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t 
        >> verifique suas credenciais de acesso ao banco\n \t\t 
        >> e se o servidor de seu BD está rodando corretamente. \n\n 
        function obterDados() ${idOrquestra}`);

    var instrucao = `
    select  count(i.nome) as qtdInstrumento,
            i.nome,
            i.idInstrumento
                from musico m 
                join instrumento i on m.fkInstrumento = i.idInstrumento
                join orquestra o on o.idOrquestra = m.fkOrquestra
            where o.idOrquestra = ${idOrquestra} and i.naipe = '${tipo}'
            group by i.nome order by i.nome;
   `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterDadosNaipe(idOrquestra) {
    console.log(`ACESSEI O OBTER DADOS NAIPE MODEL \n \n\t\t 
        >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t 
        >> verifique suas credenciais de acesso ao banco\n \t\t 
        >> e se o servidor de seu BD está rodando corretamente. \n\n 
        function obterDados() ${idOrquestra}`);

    var instrucao = `
        select  count(i.nome) as qtdInstrumento,
        i.naipe
            from musico m 
            join instrumento i on m.fkInstrumento = i.idInstrumento
            join orquestra o on o.idOrquestra = m.fkOrquestra
        where o.idOrquestra = ${idOrquestra}
        group by i.naipe;
   `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    obterDadosGerais,
    obterDadosTipo,
    obterDadosNaipe,
}