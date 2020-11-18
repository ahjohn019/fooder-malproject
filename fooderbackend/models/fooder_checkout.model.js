const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let foodcheckoutSchema = new Schema({
    maindish: {type:String},
    type: { type: String },
    addon: { type: [String] },
    quantity:{type: Number}, //auto
    totalprice: { type: Number }, //auto
    baseprice: { type: Number}, //auto
    remarks: {type: String},
});

foodcheckoutSchema.set('timestamps', true);

const FooderCheckout = mongoose.model('Foodercheckout',foodcheckoutSchema);

module.exports = FooderCheckout;