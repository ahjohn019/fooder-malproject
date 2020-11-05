const router = require('express').Router();
let FoodMenu = require('../models/fooder_menu.model');

router.route('/').get((req,res)=>{
    FoodMenu.find()
        .then(foodmenu => res.json(foodmenu))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const maindish = req.body.maindish;
    const type = req.body.type;
    const addon = req.body.addon;
    const quantity = req.body.quantity;
    const totalprice = req.body.totalprice;
    const baseprice = req.body.baseprice;

    const newFoodMenu = new FoodMenu({maindish,type,addon, quantity,totalprice, baseprice});
    
    newFoodMenu.save()
      .then(() => res.json('Food Menu added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res)=>{
    FoodMenu.findById(req.params.id)
        .then(foodmenu => res.json(foodmenu))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    FoodMenu.findByIdAndDelete(req.params.id)
        .then(() => res.json('Food Menu Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    FoodMenu.findById(req.params.id)
        .then(foodmenu => {
            foodmenu.maindish = req.body.maindish;
            foodmenu.type = req.body.type;
            foodmenu.addon = req.body.addon;
            foodmenu.quantity = req.body.quantity;
            foodmenu.totalprice = req.body.totalprice;
            foodmenu.baseprice = req.body.baseprice;
            
            foodmenu.save()
                .then(() => res.json('Food Menu Updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});





module.exports = router;