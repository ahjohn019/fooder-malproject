const fooder_orderrouter = require('express').Router();
const FooderOrder = require('../models/fooder_order.model');
const FooderRegister = require('../models/fooder_register.model');

fooder_orderrouter.route('/').get((req,res)=>{
    FooderOrder.find()
        .then(FooderOrder=>res.json(FooderOrder))
        .catch(err => res.status(400).json('Error: ' + err));
});

//user profile with order
fooder_orderrouter.route('/order/add').post((req,res)=>{
    const {order_name,order_desc,order_addon,order_qty,order_price,order_status} = req.body;

    const newOrderMenu = new FooderOrder({
        order_name,
        order_desc,
        order_addon,
        order_qty,
        order_price,
        order_status
    })

    let token = req.cookies.auth;

    FooderRegister.findByToken(token, function(err,result){
        if(err){
            console.log(err);
        } else {                
            newOrderMenu._refprofile.push(result._id);
            newOrderMenu.save()
            .then(() => res.json('Order Menu Added!'))
            .catch(err => res.status(400).json('Error: ' + err));
        }
    })
});

//order => populate with reference keys
fooder_orderrouter.route('/:_refprofile').get((req,res)=>{
    FooderOrder
    .find({_refprofile:req.params._refprofile})
    .populate('_refprofile','first_name last_name email address')
    .exec(function(err,order){
        res.json(order);
    });
});


module.exports = fooder_orderrouter;

