const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let foodmenuSchema = new Schema({
    maindish: {type:String, required:true},
    type: {type:String, required:true}, 
    description:{type: String},
    baseprice:{type:Number},
    addon:{type:String}, //addon
    price_addon:{type:Number} //price
});

foodmenuSchema.set('timestamps', true);

const FooderMenu = mongoose.model('Foodermenu',foodmenuSchema);

module.exports = FooderMenu;