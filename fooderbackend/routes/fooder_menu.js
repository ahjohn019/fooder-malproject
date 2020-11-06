const fooder_menurouter = require('express').Router();
const FooderMenu = require('../models/fooder_menu.model');


fooder_menurouter.route('/').get((req,res)=>{
    FooderMenu.find()
        .then(FooderMenu => res.json(FooderMenu))
        .catch(err => res.status(400).json('Error: ' + err));
});

fooder_menurouter.route('/add').post((req,res) => {
    const maindish = req.body.maindish;
    const type = req.body.type;
    const description = req.body.description;
    const baseprice = req.body.baseprice;
    const addon = req.body.addon;
    const price_addon = req.body.price_addon;

    const newFooderMenu = new FooderMenu({
        maindish,
        type,
        description,
        baseprice,
        addon,
        price_addon
    });

    newFooderMenu.save()
    .then(() => res.json('Food Menu added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

fooder_menurouter.route('/:id').get((req,res)=>{
    FooderMenu.findById(req.params.id)
        .then(FooderMenu => res.json(FooderMenu))
        .catch(err => res.status(400).json('Error: ' + err));
});

fooder_menurouter.route('/:id').delete((req,res) => {
    FooderMenu.findByIdAndDelete(req.params.id)
        .then(() => res.json('Food Menu Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

fooder_menurouter.route('/update/:id').post((req,res) => {
    FooderMenu.findById(req.params.id)
        .then(FooderMenu => {
            FooderMenu.maindish = req.body.maindish;
            FooderMenu.type = req.body.type;
            FooderMenu.description = req.body.description;
            FooderMenu.baseprice = req.body.baseprice; //base price
            FooderMenu.addon = req.body.addon; //label
            FooderMenu.price_addon = req.body.price_addon; //price addon
            
            FooderCheckout.save()
                .then(() => res.json('Food Menu Updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = fooder_menurouter;