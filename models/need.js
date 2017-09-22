const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const CoordinateSchema = new Schema({
  latitude: Number,
  longitude: Number,
})


const NeedSchema = new Schema({
  address: String,
  carMake:  String,
  carModel: String,
  carColor: String,
  timeLeft: String,
  reward: String,
  coordinate: CoordinateSchema
})

const Need = mongoose.model('need', NeedSchema)

module.exports = Need;
