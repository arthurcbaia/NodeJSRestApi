const express = require('express');
const router = express.Router();




router.get('/', (req, res, next) => {

    res.status(200).send(
        { mensagem: 'ta muito barato' }
    );

});

// cria pedido
router.post('/', (req, res, next) => {

    const pedido = {
        nome: req.body.nome,
        preco: req.body.preco,
        id_client: req.body.id_client

    }

    res.status(201).send(
        { mensagem: 'post' }
    );



});


// lista pedido especifico
router.get('/:id_pedidos', (req, res, next) => {
    const id = req.params.id_pedidos
    res.status(200).send(
        { msg: 'pedido: ${id} ' + id }
    )

})

// atualiza pedido
router.patch('/:id_pedidos', (req, res, next) => {
    const id = req.params.id_pedidos
    res.status(204).send(
    { msg: 'pedido: ${id} ' + id }
    );
});

// deleta pedido
router.delete('/:id_pedidos', (req, res, next) => {
    const id = req.params.id_pedidos
    res.status(204).send(
    { msg: 'pedido: ${id} ' + id }
    );
});


module.exports = router;