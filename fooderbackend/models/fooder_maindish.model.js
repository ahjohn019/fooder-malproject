const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let foodmainSchema = new Schema({
    maindish: {type:String},
    description: {type:String},
    type: {type: String},
    baseprice: {type:Number},
    category: {type:String},
    origin: {type: String},
    status: {type:String}
});

foodmainSchema.set('timestamps', true);

const FooderMainDish = mongoose.model('FooderMainDish',foodmainSchema);

module.exports = FooderMainDish;