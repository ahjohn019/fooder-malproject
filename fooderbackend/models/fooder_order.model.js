const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let foodorderSchema = new Schema({
    order_title:{type:String},
    order_type:{type:String},
    order_addon:{type:[String]},
    order_qty:{type:Number}, 
    order_price:{type:Number},
    order_baseprice:{type:Number},
    order_remarks:{type:String},
    order_status:{type:String},
    _refprofile:[{type:Schema.Types.ObjectId, ref:'FooderRegister'}]
});

foodorderSchema.set('timestamps', true);

const FooderOrder = mongoose.model('FooderOrder',foodorderSchema);

module.exports = FooderOrder;