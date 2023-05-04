require('dotenv').config()
const express = require('express')
const path = require('path');
const jokes = require('./controllers/jokes');
const products = require('./controllers/products')
const users = require('./controllers/users')
const { requireLogin, parseAuthorizationHeader } = require('./middleware/authorization')
const app = express()

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

// Middleware
app
    .use(express.json())
    .use(express.static(path.join(__dirname, '../client/dist')))

    // CORS
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
        // Make sure OPTIONS request are always allowed
        // That way pre-flight requests don't fail
        if(req.method === 'OPTIONS') {
            return res.status(200).send({})
        }
        next()
    })

    .use(parseAuthorizationHeader)


// Actions
app
    .get('/api/v1/', (req, res) => {
        res.send('Hello World! From Express')
    })
    .use('/api/v1/products', requireLogin(), products)
    .use('/api/v1/users', users)
    .use('/api/v1/jokes', jokes)

// Catch all
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

// Error handling
app
    .use((err, req, res, next) => {
        console.error(err);
        const msg = {
            status: err.code || 500,
            error: err.message || 'Internal Server Error',
            isSuccess: false
        }
        res.status(msg.status).json(msg)
    })


console.log('1: About to start server')

app.listen(port, () => 
  console.log(`2: Server running at http://${hostname}:${port}/`)
);

console.log('3: Asked server to start')