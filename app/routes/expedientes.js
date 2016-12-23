var express = require('express');
var bodyParser = require('body-parser');
var listaExpedientes = [];
 
var router = express.Router();
router.use(bodyParser.json());
 
router.route('/')
    .get(function (req, res, next) {
        console.log("GET");
        console.log(req.body);
        res.end("lista ");
    })
    .post(function (req, res, next) {
        console.log("POST ");
        console.log(req.body);
        listaExpedientes.push(req.body);
        console.log("=====================================");
        res.end("crearproducto ");
 
    })
    .put(function (req, res, next) {
        console.log("PUT");
        console.log(req.body);
        res.end("actualizar ");
    })
    .delete(function (req, res, next) {
        console.log("DELETE");
        console.log(req.body);
        res.end("borrar");
    });
router.route('/:id')
    .get(function (req, res, next) {
    var id = req.params['id'];
    if (id){
        console.log("buscar por id");
        console.log(req.body);
        res.end("buscar por id "+id);
    }
    else {
        res.send(404, { status: 'Not found' });
    }
})
.all(function (req, res, next) {  /// para todos los demás no implementado
    res.send(501, { status: 'Not implemented' });
});
 
module.exports = router;