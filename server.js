const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})
