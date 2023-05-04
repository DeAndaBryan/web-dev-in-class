const express = require('express');
const model = require('../models/products');
const router = express.Router();

router
    .get('/', (req, res, next) => {
        model.getAll(+req.query.page, +req.query.pageSize)
            .then(list => {
                const data = { data: list.items, total: list.total, isSuccess: true };
                res.send(data)
            }).catch(next);
    })

    .get('/search/:q', (req, res, next) => {

        model.search(req.params.q, +req.query.page, +req.query.pageSize)
            .then(list => {
                const data = { data: list.items, total: list.total, isSuccess: true };
                res.send(data)
            }).catch(next);
    })

    .get('/:id', (req, res, next) => {

        model.getById(req.params.id)
            .then(x => {
                const data = { data: x, isSuccess: true };
                res.send(data)
            }).catch(next);
    })

    .post('/', (req, res, next) => {

        model.add(req.body)
            .then(x => {
                const data = { data: x, isSuccess: true };
                res.send(data)
            }).catch(next);
    })

    .patch('/:id', (req, res, next) => {

        model.update(req.body)
            .then(x => {
                const data = { data: x, isSuccess: true };
                res.send(data)
            }).catch(next);
    })

    .delete('/:id', (req, res, next) => {

        model.deleteItem(req.params.id)
            .then(x => {
                const data = { data: x, isSuccess: true };
                res.send(data)
            }).catch(next);
    })

module.exports = router;

/*  Ways to pass information to the server:
    1. Query String Parameters
    2. Route Parameters
    3. Request Body
    4. Request Headers
    5. Cookies
*/