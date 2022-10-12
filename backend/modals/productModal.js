const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

 name: String,

 primaryImg: String,

 descImg: [String],
 
 stars:Number,
 ratings: Number,

 desc: String,

 styles: [String],
 
 color: String,

 condition: {
  type:String,
  enum: ['New', 'New - Open Box','Used - Like New'],
  default:'New'
 },
 
})

module.exports = mongoose.model('Product', productSchema)