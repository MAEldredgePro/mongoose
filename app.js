import mongoose from 'mongoose'
import Airplane from './model/Airplane.js'

const atlasURI = process.env.MONGO_ATLAS
const localURI = process.env.MONGO_LOCAL
const uri = localURI

console.log(`connecting to ${uri}`);
mongoose.connect(uri)

const airplane = new Airplane({
    name: 'DC-3',
    source: 'Douglas Aircraft',
})

await airplane.save()

const firstAirplane = await Airplane.find({});
console.log(firstAirplane);
