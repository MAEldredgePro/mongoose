import mongoose from 'mongoose'
import Airplane from './model/Airplane.js'

const atlasURI = 'mongodb+srv://maeldredgepro:D0nn3rp05@bender.5udpvf0.mongodb.net/airplanes'
const localURI = 'mongodb://127.0.0.1:27017/airplanes'
const uri = localURI

mongoose.connect(uri);

const airplane = new Airplane({
    name: 'DC-3',
    source: 'Douglas Aircraft',
})

await airplane.save()

const firstAirplane = await Airplane.find({});
console.log(firstAirplane);
