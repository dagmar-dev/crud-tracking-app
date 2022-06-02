const express = require('express')
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

app.listen(3000, function(){
     console.log('listening on 3000')
})
app.use(bodyParser.urlencoded( {extended: true } ) )




//Database connect



MongoClient.connect(connectionString)
    .then((client) => {
        const db = client.db('packages-tracker')
        const packagesCollection = db.collection('packages')
        app.post('/packages', (req, res) => {
            packagesCollection
                .insertOne(req.body)
                .then((result) => {
                    res.redirect(' /')
                })
                .catch((error) => console.error(error))
        })
        app.get('/', (req, res) => {
            db.collection('packages')
                .find()
                .toArray()
                .then((results) => {
                    console.log(results)
                     res.sendFile(__dirname + '/index.html')
                })
                .catch((error) => console.error(error))
        })

    
    })
    .catch((error) => console.error(error))

    