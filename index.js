const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
app.use(cors())

app.use(express.static('client'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/History', require('./api/route'))

const PORT = process.env.PORT || 4444;

app.listen(PORT,()=>{
    console.log('APP is running on PORT' + PORT);
    mongoose.connect(`mongodb+srv://Tanzim012:Tanzim111@cluster0.p8afodt.mongodb.net/?retryWrites=true&w=majority`, {useNewUrlParser:true},
    console.log('Database Connected'))
})
