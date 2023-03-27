const express = require('express')
const app = express.Router();


// Actions
app
    .get('/', (req, res, next) => {

        console.log('1: Calling jokes.js')

           
                    
                const joke = fetch('https://v2.jokeapi.dev/joke/Any')
                .then(response => response.json())
                .then(x=>{
                    if(x.safe == false) {
                        throw new Error('Not safe for work');
                    }

                    res.send(x.joke)
                    console.log('2: that was the joke')              
                })
                .catch(err => { next(err) })
        
        console.log('3: already asked for the joke')

    })

module.exports = app;