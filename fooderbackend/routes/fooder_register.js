const fooder_registerouter = require('express').Router();
const FooderRegister = require('../models/fooder_register.model');
const {auth} = require('../models/fooder_auth');

fooder_registerouter.route('/').get((req,res)=>{
    FooderRegister.find()
        .then(FooderRegister => res.json(FooderRegister))
        .catch(err => res.status(400).json('Error: ' + err));
})

//fooder register authenticcation
fooder_registerouter.route('/add').post((req,res)=>{
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;
    const password_confirmation = req.body.password_confirmation;
 
    const newFoodRegister = new FooderRegister({
        first_name,
        last_name,
        email,
        password,
        password_confirmation
    });

    if(newFoodRegister.password!=newFoodRegister.password_confirmation)return res.status(400).json({message: "password not match"});
    
    FooderRegister.findOne({email:newFoodRegister.email},function(err,user){
        if(user) return res.status(400).json({ auth : false, message :"email exits"});
 
        newFoodRegister.save((err,doc)=>{
            if(err) {console.log(err);
                return res.status(400).json({ success : false});}
            res.status(200).json({
                succes:true,
                user : doc
            });
        });
    });
})

//fooder login authentication
fooder_registerouter.route('/login').post((req,res)=>{
    let token = req.cookies.auth;

    FooderRegister.findByToken(token,(err,user)=>{
        if(err) return  res(err);
        if(user) return res.status(400).json({
            error :true,
            message:"You are already logged in"
        });

        else{
            FooderRegister.findOne({'email':req.body.email},function(err,user){
                if(!user) return res.json({isAuth : false, message : ' Auth failed ,email not found'});
                user.comparepassword(req.body.password,(err,isMatch)=>{
                    if(!isMatch) return res.json({ isAuth : false, message : "password doesn't match"});
                    user.generateToken((err,user)=>{
                        if(err) return res.status(400).send(err);
                        res.cookie('auth',user.token).json({
                            isAuth : true,
                            id : user._id,
                            email : user.email
                        });
                    });  
                });
            });
        }
    });
});

//fooder profile authentication
fooder_registerouter.route('/profile').get(auth,(req,res)=>{
    res.json({ 
        isAuth:true,
        id:req.user._id,
        email:req.user.email,
        name:req.user.first_name+req.user.last_name
    })
});

//fooder profile logout
fooder_registerouter.route('/logout').get(auth,(req,res)=>{
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200);
    })
})


fooder_registerouter.route('/:id').get((req, res)=>{
    FooderRegister.findById(req.params.id)
        .then(FooderRegister => res.json(FooderRegister))
        .catch(err => res.status(400).json('Error: ' +err));
});

fooder_registerouter.route('/:id').delete((req, res)=>{
    FooderRegister.findByIdAndDelete(req.params.id)
        .then(FooderRegister => res.json('User Info Deleted'))
        .catch(err => res.status(400).json('Error: ' +err));
});

module.exports = fooder_registerouter;