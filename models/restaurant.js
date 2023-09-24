const mongoose = require('mongoose')
const Schema = mongoose.Schema
const restaurantSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    require: true
  },
  name_en: {
    type: String,
    require: true
  },
  category: {
    type: String
  },
  image: {
    type: String
  },
  location: {
    type: String,
    require: true
  },
  phone: {
    type: String
  },
  google_map: {
    type: String,
    require: true
  },
  rating: {
    type: Number
  },
  description: {
    type: String
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true 
  }
})
module.exports = mongoose.model('Restaurant', restaurantSchema)