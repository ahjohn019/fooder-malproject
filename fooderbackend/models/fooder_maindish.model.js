const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let foodmainSchema = new Schema({
    maindish: {type:String, required:true},
    description: {type:String},
    type: {type: String},
    baseprice: {type:Number, required:true},
    category: {type:String},
    origin: {type: String},
    status: {type:String},
    _refadddon :[
        {type: Schema.Types.ObjectId, ref: 'FooderMenu'}
    ]
});

foodmainSchema.set('timestamps', true);

const FooderMainDish = mongoose.model('FooderMainDish',foodmainSchema);

module.exports = FooderMainDish;