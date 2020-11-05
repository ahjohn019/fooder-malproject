const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let foodmenuSchema = new Schema({
    maindish: {type:String, required:true},
    type: { type: String, required:true },
    addon: { type: [String] },
    quantity:{type: Number, required:true}, //auto
    totalprice: { type: Number }, //auto
    baseprice: { type: Number} //auto
});

foodmenuSchema.set('timestamps', true);

const Foodmenu = mongoose.model('Foodermenu',foodmenuSchema);

module.exports = Foodmenu;