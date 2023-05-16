
const mongoose = require('mongoose')

const atlasURI = 'mongodb+srv://maeldredgepro:D0nn3rp05@bender.5udpvf0.mongodb.net/airplanes'
const localURI = 'mongodb://127.0.0.1:27017/airplanes'

const uri = localURI
console.log(uri)
mongoose.connect(uri, {useNewUrlParser: true})

const db = mongoose.connection

db.once('open', _ => {
    console.log(`Database connected: ${uri}`)
})

db.on('error', err => {
    console.error(`connection error:${err}`)
})
