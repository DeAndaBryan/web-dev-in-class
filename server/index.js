const express = require('express')
const products = require('./controllers/products')
const app = express()

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app
    .get('/', (req, res) => {
      res.send('Hello World! From Express')
    })   
    .get('/products', (req, res) => { 
      })       
      .use('/products', products)                                  

app.listen(port, () => 
  console.log(`Server running at http://${hostname}:${port}/`)
);

