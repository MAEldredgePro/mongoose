import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const airplaneSchema = new Schema({
    name: String,
    source: String,
})


const Airplane = model('Airplane', airplaneSchema);
export default Airplane
