const express = require('express');
const router = express.Router();
const model = require('../models/products');

router
    .get('/', (req, res) => {
        const list = model.getProducts();
        res.send({
            items: [
                { id: 1,
                    name: 'item1' 
                },
            ]
        })
    })
    .get('/:id', (req, res) => {
        const id = +req.params.id;
        const product = model.getProductById(id);
        res.send(product);
    })
    .post('/', (req, res) => {
        const product = req.body;

        console.log({ product }});
        console.log({ req.query }});
        console.log({ req.params }});
        console.log({ req.headers }});

        model.addProduct(product);
        res.send(product);
    })
    .patch('/:id', (req, res) => {
        const product = req.body;
        model.updateProduct(product);
        res.send(product);
    })
    .delete('/:id', (req, res) => {
        const id = +req.params.id;
        model.deleteProduct(id);
        res.send({ id });
    })

    module.exports = router;

    /* Ways to pass information to the server:
    1. Query string: http://localhost:3000/products?name=abc
    2. Route parameters: http://localhost:3000/products/1
    3. Request body: http://localhost:3000/products
    4. Headers: http://localhost:3000/products
    */