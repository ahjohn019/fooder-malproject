const fooder_checkoutrouter = require('express').Router();
const FooderCheckout = require('../models/fooder_checkout.model');

fooder_checkoutrouter.route('/').get((req,res)=>{
    FooderCheckout.find()
        .then(FooderCheckout => res.json(FooderCheckout))
        .catch(err => res.status(400).json('Error: ' + err));
});

fooder_checkoutrouter.route('/add').post((req, res) => {
    const maindish = req.body.maindish; //nasilemak
    const type = req.body.type; //localfood
    const addon = req.body.addon; //peanut
    const quantity = req.body.quantity; 
    const totalprice = req.body.totalprice; 
    const baseprice = req.body.baseprice; 
    const remarks = req.body.remarks;

    const newFoodCheckout = new FooderCheckout({maindish,type,addon, quantity,totalprice, baseprice, remarks});
    
    newFoodCheckout.save()
      .then(() => res.json('Food Checkout added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

fooder_checkoutrouter.route('/:id').get((req,res)=>{
    FooderCheckout.findById(req.params.id)
        .then(FooderCheckout => res.json(FooderCheckout))
        .catch(err => res.status(400).json('Error: ' + err));
});

fooder_checkoutrouter.route('/:id').delete((req,res) => {
    FooderCheckout.findByIdAndDelete(req.params.id)
        .then(() => res.json('Food Checkout Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

fooder_checkoutrouter.route('/update/:id').post((req,res) => {
    FooderCheckout.findById(req.params.id)
        .then(FooderCheckout => {
            FooderCheckout.maindish = req.body.maindish;
            FooderCheckout.type = req.body.type;
            FooderCheckout.addon = req.body.addon;
            FooderCheckout.quantity = req.body.quantity;
            FooderCheckout.totalprice = req.body.totalprice;
            FooderCheckout.baseprice = req.body.baseprice;
            FooderCheckout.remarks = req.body.remarks;
            
            FooderCheckout.save()
                .then(() => res.json('Food Checkout Updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = fooder_checkoutrouter;