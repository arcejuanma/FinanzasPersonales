const express = require('express')
const bodyParser = require("body-parser")
const db = require("./db")
const path = require('path')
var fs = require('fs')
var morgan = require('morgan')
var cors = require('cors')
const api = require('./routes/api')

const app = express()
app.use(cors())
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('tiny', { stream: accessLogStream }))
app.use(morgan('tiny'))

app.use(express.static(path.join(__dirname, 'build')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/api", api);


db.sync()
.then(()=>{
    app.listen(process.env.PORT || 8080, ()=>{
        fs.appendFile(path.join(__dirname, 'access.log'), `Server Restarted at ${new Date()} \n`, (err) => {
            if (err) throw err
        })
        console.log(`Express Listening on port ${process.env.port || 8080}`)
    })
})