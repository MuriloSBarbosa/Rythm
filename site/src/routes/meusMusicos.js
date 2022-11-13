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
module.exports = router;
