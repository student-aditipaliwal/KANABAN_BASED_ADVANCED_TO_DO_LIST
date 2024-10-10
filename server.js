const express = require('express')
const mongoose = require('mongoose')

const app = express()

const PORT = process.env.PORT || 3000




mongoose.connect('mongodb://127.0.0.1:27017/urlshort')

const db = mongoose.connection;

db.on('error',() =>{
    console.log('Error ');
})
db.once('open',() => {
    console.log("connection established");
})




app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// linking router 
const urlRouter = require('./routes/urlRoute')
app.use('/',urlRouter)



app.listen(PORT, () => {
    console.log("Server is running");
})