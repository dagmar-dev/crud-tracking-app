const express = require('express')
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

app.listen(3000, function(){
     console.log('listening on 3000')
})
app.use(bodyParser.urlencoded( {extended: true } ) )

//Handlers
app.get('/', (req,res)=> {
    res.sendFile(__dirname +'/index.html')
})

app.post('/packages', (req, res) => {
    console.log(req.body)
})

//Database connect



MongoClient.connect(connectionString)
    .then((client) => {
        console.log('Connected to Database')
    })
    .catch((error) => console.error(error))