const express = require('express');
const model = require('../models/products');
const router = express.Router();

router
    .get('/', (req, res, next) => {
        model.getAll()
            .then(list => {
                const data = { data: list, total: list.length, isSuccess: true };
                res.send(data)
            }).catch(next);
    })

    .get('/search/:q', (req, res) => {
        const term = req.params.q;
        console.log({ term });
        const list = model.search(term);
        const data = { data: list, total: list.length, isSuccess: true };
        res.send(data)
    })

    .get('/:id', (req, res) => {
        const id = +req.params.id;
        const product = model.getById(id);
        const data = { data: product, isSuccess: true };
        res.send(data)
    })

    .post('/', (req, res) => {
        const product = req.body;

        console.log({ product });
        console.log( req.query );
        console.log( req.params );
        console.log( req.headers );

        model.add(product);
        const data = { data: product, isSuccess: true };
        res.send(data)
    })

    .patch('/:id', (req, res) => {
        const product = req.body;
        model.update(product);
        const data = { data: product, isSuccess: true };
        res.send(data)
    })

    .delete('/:id', (req, res) => {
        const id = +req.params.id;
        model.deleteItem(id);
        const data = { data: id, isSuccess: true };
        res.send(data)
    })

module.exports = router;

/*  Ways to pass information to the server:
    1. Query String Parameters
    2. Route Parameters
    3. Request Body
    4. Request Headers
    5. Cookies
*/