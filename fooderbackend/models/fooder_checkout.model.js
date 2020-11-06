const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let foodcheckoutSchema = new Schema({
    maindish: {type:String, required:true},
    type: { type: String, required:true },
    addon: { type: [String] },
    quantity:{type: Number, required:true}, //auto
    totalprice: { type: Number }, //auto
    baseprice: { type: Number} //auto
});

foodcheckoutSchema.set('timestamps', true);

const FooderCheckout = mongoose.model('Foodercheckout',foodcheckoutSchema);

module.exports = FooderCheckout;