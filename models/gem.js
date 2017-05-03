var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

//field names
var gemSchema = new Schema ({
  name: String,
  gemType: {type: String},
  estimatedValue: Number,
  rare: Boolean,
  date: Date

});

var Gem = mongoose.model('gems', gemSchema);

module.exports = Gem;
