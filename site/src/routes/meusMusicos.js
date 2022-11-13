var express = require("express");
var router = express.Router();

var meusMusicosController = require("../controllers/meusMusicosController");

router.post("/cadastrarMusico/:idOrquestra", function (req, res) {
    meusMusicosController.cadastrarMusico(req, res);
});

router.get("/listar/:idOrquestra", function (req, res) {
    meusMusicosController.listar(req, res);
});

router.delete("/deletar/:idMusico", function (req, res) {
    meusMusicosController.deletar(req, res);
});

router.put("/editar/:idMusico", function (req, res) {
    console.log('poura');
    meusMusicosController.editar(req, res);
});

router.get("/listarUm/:idMusico", function (req, res) {
    meusMusicosController.listarUm(req, res);
});

router.get("/pesquisarNome/:idOrquestra/:pesquisa", function (req, res) {
    meusMusicosController.pesquisarNome(req, res);
});

router.get("/pesquisarInstrumento/:idOrquestra/:pesquisa", function (req, res) {
    meusMusicosController.pesquisarInstrumento(req, res);
});

router.get("/pesquisarNaipe/:idOrquestra/:pesquisa", function (req, res) {
    meusMusicosController.pesquisarNaipe(req, res);
});

router.get("/pesquisarTelefone/:idOrquestra/:pesquisa", function (req, res) {
    meusMusicosController.pesquisarTelefone(req, res);
});
module.exports = router;
