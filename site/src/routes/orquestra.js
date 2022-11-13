var express = require("express");
var router = express.Router();

var orquestraController = require("../controllers/orquestraController");

router.get("/", function (req, res) {
    orquestraController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar_orquestra", function (req, res) {
    orquestraController.cadastrar_orquestra(req, res);
})

router.post("/autenticar", function (req, res) {
    orquestraController.entrar(req, res);
});

module.exports = router;