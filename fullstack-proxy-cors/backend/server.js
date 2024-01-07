// Require
const express = require('express')
const cors = require('cors')
// Express App
const app = express()

// Middlewares
app.use(cors())

// Route
app.get('/jokes' , (req,res) => {
    const jokes = [
        { id: 1, saying: "Actions speak louder than words." },
        { id: 2, saying: "The early bird catches the worm." },
        { id: 3, saying: "Fortune favors the brave." },
        { id: 4, saying: "Where there's a will, there's a way." },
        { id: 5, saying: "Don't count your chickens before they hatch." }
    ]

    res.send(jokes)
})

// Listen 
app.listen(4001 , () => {
    console.log('listening at http://localhost:4001')
})