const express = require('express');
const router = express.Router();

router
    .get('/', (req, res) => {
        res.send({
            items: [
                { id: 1,
                    name: 'item1' 
                },
            ]
        })
    })
    .get('/:id', (req, res) => {
    })
    .post('/', (req, res) => {
        res.send('Thank you for your order')
    })
    .put('/:id', (req, res) => {
    })
    .delete('/:id', (req, res) => {
    })

    module.exports = router;