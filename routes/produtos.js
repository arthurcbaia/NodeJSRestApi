const express = require('express');
const router = express.Router();


// lista produto
router.get('/', (req, res, next) => {

    res.status(200).send(
        { mensagem: 'ta muito barato' }
    );

});

// cria produto
router.post('/', (req, res, next) => {


    const produto = {
        nome: req.body.nome,
        preco: req.body.preco

    }

    res.status(201).send(
        { mensagem: 'post',
            produto: produto }
    );



});


// lista produto especifico
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
    res.status(200).send(
        { msg: 'produto: ${id} ' + id }
    )

})

// atualiza produto
router.patch('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
    res.status(204).send(
    { msg: 'produto: ${id} ' + id }
    );
});

// deleta produto
router.delete('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
    res.status(204).send(
    { msg: 'produto: ${id} ' + id }
    );
});



module.exports = router;
