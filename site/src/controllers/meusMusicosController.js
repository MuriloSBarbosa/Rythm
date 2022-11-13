var meusMusicosModel = require("../models/meusMusicosModel");

function cadastrarMusico(req, res) {

    var idOrquestra = req.params.idOrquestra;
    var nome = req.body.nome;
    var telefone = req.body.telefone;
    var instrumento = req.body.instrumento;

    if (nome == undefined) {
        res.status(400).send("O nome está indefinido!");
    } else if (telefone == undefined) {
        res.status(400).send("O telefone está indefinido!");
    } else if (instrumento == undefined) {
        res.status(403).send("O instrumento está indefinido!");
    } else if (idOrquestra == undefined) {
        res.status(403).send("O id da Orquestra está indefinido!");
    } else {
        meusMusicosModel.cadastrar(idOrquestra, nome, telefone, instrumento)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req, res) {
    var idOrquestra = req.params.idOrquestra;

    meusMusicosModel.listar(idOrquestra).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum músico cadastrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function deletar(req, res) {
    var idMusico = req.params.idMusico;

    meusMusicosModel.deletar(idMusico)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o músico: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    cadastrarMusico,
    listar,
    deletar
}