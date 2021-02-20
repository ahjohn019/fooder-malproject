const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let foodorderSchema = new Schema({
    order_name:{type:String},
    order_desc:{type:String},
    order_addon:{type:String},
    order_qty:{type:Number}, 
    order_price:{type:Number},
    order_status:{type:String},
    _refprofile:[{type:Schema.Types.ObjectId, ref:'FooderRegister'}]
});

foodorderSchema.set('timestamps', true);

const FooderOrder = mongoose.model('FooderOrder',foodorderSchema);

module.exports = FooderOrder;