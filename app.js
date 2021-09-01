const express = require('express');
const app = express();
const morgan = require('morgan');


const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');


app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/produtos', rotaProdutos);

app.use('/pedidos', rotaPedidos)

app.use((req, res, next) => {
    const erro = new Error('Not Found');
    erro.status = 404;
    next(erro);
});


app.use((req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*');
    res.header(
        'Acess-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Author'
    );

    if (req.method == 'OPTIONS') {
        res.header('Acess-Control-Allow-Methods', 'PUT', 'GET', 'POST', 'PATCH', 'DELETE');
        return res.status(200).send({})
    }

    next();
}
)

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        error: {
            mensagem: error.message
        }
    }

    )
})

module.exports = app;