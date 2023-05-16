const mongoose = require('mongoose')

const atlasURI = 'mongodb + srv://maeldredgepro:D0nn3rp05@bender.5udpvf0.mongodb.net/'
const localURI = 'mongodb://localhost:27017/airplanes'

mongoose.connect(localURI, {useNewUrlParser: true})

const db = mongoose.connection

db.once('open', _ => {
    console.log('Database connected:,')
})
