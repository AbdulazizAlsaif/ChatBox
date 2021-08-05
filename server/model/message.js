const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  user: {type: String, required:true},
  msg: {type: String, required:true},
  room:{type: String, required:true},
  date: {type : String },


})

module.exports = mongoose.model('message' , MessageSchema);