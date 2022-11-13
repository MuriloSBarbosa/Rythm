var express = require("express");
var router = express.Router();

var meusMusicosController = require("../controllers/meusMusicosController");

router.post("/cadastrarMusico/:idOrquestra", function (req, res) {
    meusMusicosController.cadastrarMusico(req, res);
});

router.get("/listar/:idOrquestra", function (req, res) {
    console.log('rotes');
    meusMusicosController.listar(req, res);
});

module.exports = router;
