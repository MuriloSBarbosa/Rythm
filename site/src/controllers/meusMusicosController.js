var meusMusicosModel = require("../models/meusMusicosModel");

// ----------------- cadastrar -------------------- //
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
                    console.log("Houve um erro ao cadastra o músico: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
// ----------------- fim cadastrar -------------------- //


// ----------------- listar -------------------- //
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
        console.log("Houve um erro ao buscar os músicos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
// ----------------- fim listar -------------------- //


// ----------------- deletar -------------------- //
function deletar(req, res) {
    var idOrquestra = req.params.idOrquestra;
    var idMusico = req.params.idMusico;

    meusMusicosModel.deletar(idOrquestra, idMusico)
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
// ----------------- fim deletar -------------------- //


// ----------------- editar -------------------- //
function editar(req, res) {

    var idOrquestra = req.params.idOrquestra;
    var idMusico = req.params.idMusico;
    var nome = req.body.nomeServer;
    var telefone = req.body.telefoneServer;
    var instrumento = req.body.instrumentoServer;

    meusMusicosModel.editar(idOrquestra,idMusico, nome, telefone, instrumento)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a edição: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
// ----------------- fim editar -------------------- //




// ----------------- listarUm -------------------- //
function listarUm(req, res) {
    var idOrquestra = req.params.idOrquestra;
    var idMusico = req.params.idMusico;
    meusMusicosModel.listarUm(idOrquestra,idMusico).then(function (resultado) {
        if (resultado.length > 0) {
            console.log(`Listando o Músico ${idMusico}`);
            console.log(resultado);
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Não foi encontrado esse Músico!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os músicos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
// ----------------- fim listarUm -------------------- //



// ----------------- Pesquisar nome -------------------- //
function pesquisarNome(req, res) {
    var idOrquestra = req.params.idOrquestra;
    var pesquisa = req.params.pesquisa;

    meusMusicosModel.pesquisarNome(idOrquestra, pesquisa)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
// ----------------- FimPesquisar nome -------------------- //





// ----------------- Pesquisar Instrumento -------------------- //
function pesquisarInstrumento(req, res) {
    var idOrquestra = req.params.idOrquestra;
    var pesquisa = req.params.pesquisa;

    meusMusicosModel.pesquisarInstrumento(idOrquestra, pesquisa)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
// ----------------- FimPesquisar Instrumento -------------------- //




// ----------------- Pesquisar Naipe -------------------- //
function pesquisarNaipe(req, res) {
    var idOrquestra = req.params.idOrquestra;
    var pesquisa = req.params.pesquisa;

    meusMusicosModel.pesquisarNaipe(idOrquestra, pesquisa)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
// ----------------- FimPesquisar Naipe -------------------- //




// ----------------- Pesquisar Telefone -------------------- //
function pesquisarTelefone(req, res) {
    var idOrquestra = req.params.idOrquestra;
    var pesquisa = req.params.pesquisa;

    meusMusicosModel.pesquisarTelefone(idOrquestra, pesquisa)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
// ----------------- FimPesquisar Telefone -------------------- //





module.exports = {
    cadastrarMusico,
    listar,
    deletar,
    editar,
    listarUm,
    pesquisarNome,
    pesquisarInstrumento,
    pesquisarNaipe,
    pesquisarTelefone,
}