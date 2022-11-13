console.log('Estou no orquestraController!')
var orquestraModel = require("../models/orquestraModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA orquestraController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    orquestraModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var login = req.body.loginServer;
    var senha = req.body.senhaServer;

    if (login == undefined) {
        res.status(400).send("Seu login está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        orquestraModel.entrar(login, senha)
            .then(
                function (resultado) {
                    console.log('Login deu certo!');
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Login e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de uma orquestra com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar_orquestra(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var telefone = req.body.telefoneServer;
    var celular = req.body.celularServer;
    var login = req.body.loginServer;
    var senha = req.body.senhaServer;


    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else if (celular == undefined) {
        res.status(400).send("Seu celular está undefined!");
    } else if (login == undefined) {
        res.status(400).send("Seu login está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        orquestraModel.cadastroOrquestra(nome, login, senha).then(
            function (resultado) {
                console.log('Orquestra Cadastrada com sucesso');
                console.log('esse é o Id do resultado: ' + resultado.insertId);
                var insertId = resultado.insertId;

                console.log('indo para os Contatos');
                orquestraModel.cadastroContato(insertId, email, telefone, celular)
                    .then(
                        function (resultado) {
                            console.log('contato cadastrado com sucesso');
                            res.json(resultado);
                        }
                    ).catch(
                        function (erro) {
                            console.log('erro:');
                            console.log(erro);
                            console.log(
                                "\nHouve um erro ao cadastrar o contato! Erro: ",
                                erro.sqlMessage
                            );

                            res.status(500).json(erro.sqlMessage);
                        }
                    );
            }
        ).catch(
            function (erro) {
                console.log(erro);

                if (erro.code == 'ER_DUP_ENTRY') {
                    res.status(500).send('Esse Login Já Existe! <br> Por favor, troque.')
                } else {
                    console.log(
                        "\nHouve um erro ao cadastrar a Orquestra! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            }
        )
    }
}

module.exports = {
    entrar,
    cadastrar_orquestra,
    listar,
    testar
}