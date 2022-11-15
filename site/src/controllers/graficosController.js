var graficosModel = require("../models/graficosModel");

function obterDados(req, res) {

    var idOrquestra = req.params.idOrquestra;
    var tipo = req.params.tipo;
    console.log(tipo);


    if (tipo == 'geral') {
        graficosModel.obterDadosGerais(idOrquestra).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum instrumento cadastrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    } else if (tipo == 'naipes') {
        graficosModel.obterDadosNaipe(idOrquestra).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum instrumento cadastrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    } else {
        graficosModel.obterDadosTipo(idOrquestra, tipo).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send(`Nenhuma ${tipo} cadastrada!`)
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
}

module.exports = {
    obterDados
}