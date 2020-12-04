const fooder_menurouter = require('express').Router();
const FooderAddOn = require('../models/fooder_addon.model');
const FooderMainDish = require('../models/fooder_maindish.model');

fooder_menurouter.route('/').get((req,res)=>{
    FooderAddOn.find()
        .then(FooderAddOn => res.json(FooderAddOn))
        .catch(err => res.status(400).json('Error: ' + err));
});

fooder_menurouter.route('/add').post((req,res) => {
    const addon_maindish = req.body.addon_maindish;
    const addon = req.body.addon;
    const price_addon = req.body.price_addon;

    //create new food__addon
    const newFooderMenu = new FooderAddOn({
        addon_maindish,
        addon,
        price_addon
    });

    //2nd method test
    FooderMainDish.find({}, function(err,result){
        if(err){
            console.log(err);
        } else{
            //get maindish by id
            for(i=0; i<=result.length-1; i++){
                if(addon_maindish == result[i]["maindish"]){
                    console.log("true");
                    newFooderMenu._refmaindish.push(result[i]);
                } else{
                    console.log("false");
                }
            }
            newFooderMenu.save()
            .then(() => res.json('Food Menu added!'))
            .catch(err => res.status(400).json('Error: ' + err));
        }
    });

    //previous method
    //creat foodmaindish
    // const FoodDish = new FooderMainDish({
    //     maindish: req.body.maindish,
    //     description: req.body.description,
    //     type:req.body.type,
    //     baseprice:req.body.baseprice,
    //     category:req.body.category,
    //     origin:req.body.origin,
    //     status:req.body.status
    // })

    // FoodDish.save()
    // newFooderMenu._refmaindish.push(FoodDish);
    
    // //save the foodaddon
    // newFooderMenu.save()
    // .then(() => res.json('Food Menu added!'))
    // .catch(err => res.status(400).json('Error: ' + err));
});

fooder_menurouter.route('/:id').get((req,res)=>{
    FooderAddOn.findById(req.params.id)
        .then(FooderAddOn => res.json(FooderAddOn))
        .catch(err => res.status(400).json('Error: ' + err));
});

fooder_menurouter.route('/:id').delete((req,res) => {
    FooderAddOn.findByIdAndDelete(req.params.id)
        .then(() => res.json('Food Menu Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

fooder_menurouter.route('/update/:id').put(function(req,res) {

    FooderAddOn.findById(req.params.id, function(err,foodupdate){
        if(!foodupdate)
            res.status(404).send("data is not found");
        else
            foodupdate.maindish = req.body.maindish;
            foodupdate.type = req.body.type;
            foodupdate.description = req.body.description;
            foodupdate.baseprice = req.body.baseprice; //base price
            foodupdate.addon = req.body.addon; //label
            foodupdate.price_addon = req.body.price_addon; //price addon

            foodupdate.save().then(foodupdate => {
                res.json('Food Menu Updated');
            })
            .catch(err => {
                res.status(400).json('Error: ' + err);
            });
    });
});



module.exports = fooder_menurouter;