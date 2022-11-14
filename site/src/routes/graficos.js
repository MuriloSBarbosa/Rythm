var express = require("express");
var router = express.Router();

var graficosController = require("../controllers/graficosController");

router.get("/obterDados/:idOrquestra/:tipo", function (req, res) {
    graficosController.obterDados(req, res);
});

module.exports = router;