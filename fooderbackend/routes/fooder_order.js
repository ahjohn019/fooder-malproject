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
    const {order_title,order_type,order_addon,order_qty,order_price,order_baseprice,order_remarks,order_status} = req.body;

    const newOrderMenu = new FooderOrder({
        order_title,
        order_type,
        order_addon,
        order_qty,
        order_price,
        order_baseprice,
        order_remarks,
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

fooder_orderrouter.route('/:id').put((req,res) => {
    const {order_title,order_type,order_addon,order_qty,order_price,order_baseprice,order_remarks,order_status} = req.body;
    
    FooderOrder.findById(req.params.id)
        .then(FooderOrder => {
            FooderOrder.order_title = order_title;
            FooderOrder.order_type = order_type;
            FooderOrder.order_addon = order_addon;
            FooderOrder.order_qty = order_qty;
            FooderOrder.order_price = order_price;
            FooderOrder.order_baseprice = order_baseprice;
            FooderOrder.order_remarks = order_remarks;
            FooderOrder.order_status = order_status;
            
            FooderOrder.save()
                .then(() => res.json('Food Checkout Updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


fooder_orderrouter.route('/:id').get((req,res)=>{
    FooderOrder.findById(req.params.id)
        .then(FooderOrder => res.json(FooderOrder))
        .catch(err => res.status(400).json('Error: ' + err));
});

fooder_orderrouter.route('/:id').delete((req,res) => {
    FooderOrder.findByIdAndDelete(req.params.id)
        .then(() => res.json('Food Checkout Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = fooder_orderrouter;

