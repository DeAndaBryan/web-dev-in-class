const express = require('express');
const model = require('../models/products');
const router = express.Router();

router
    .get('/', (req, res) => {
        const list = model.getProducts();
        res.send(list)
    })

    .get('/search/:q', (req, res) => {
        const term = req.params.q;
        console.log({ term });
        const list = model.searchProducts(term);
        res.send(list);
    })

    .get('/:id', (req, res) => {
        const id = +req.params.id;
        const product = model.getProductById(id);
        res.send(product);
    })

    .post('/', (req, res) => {
        const product = req.body;

        console.log({ product });
        console.log( req.query );
        console.log( req.params );
        console.log( req.headers );

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
        res.send({id});
    })

module.exports = router;

/*  Ways to pass information to the server:
    1. Query String Parameters
    2. Route Parameters
    3. Request Body
    4. Request Headers
    5. Cookies
*/