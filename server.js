
const express = require('express');
const app = express();
const port = 6000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());

const uri = "mongodb+srv://ahrui123:ahrui123@myprojectcluster.9c5nh.mongodb.net/fooder-maindb?retryWrites=true&w=majority";

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));


//connect to mongoose db
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
//create router
const FooderMainDishRouter = require('./fooderbackend/routes/fooder_maindish');
const FooderCheckoutRouter = require('./fooderbackend/routes/fooder_checkout');
const FooderAddOnRouter = require('./fooderbackend/routes/fooder_addon');
const FooderTypeRouter = require('./fooderbackend/routes/fooder_type');

app.use('/api/fooder_maindish', FooderMainDishRouter)
app.use('/api/fooder_checkout', FooderCheckoutRouter);
app.use('/api/fooder_addon',FooderAddOnRouter);
app.use('/api/fooder_type',FooderTypeRouter);

app.get('*', function (req, res){
  res.sendFile(path.join(__dirname+'/build/index.html'));
})


app.listen((process.env.PORT || port), function(){
    console.log(`Example app listening at http://localhost:${port}`)
});


//sample to get foodmenu list api
// app.get('/api/foodmenu',(req, res) => {
//     const foodmenu = [
//         {label: 'Peanut', type:'peanut', price:1},
//         {label: 'Fried Chicken', type: 'fried_chicken', price:2},
//         {label: 'Salty Egg', type: 'salty_egg', price:3},
//         {label: 'Rice', type: 'rice', price:1}
//     ];

//     res.json(foodmenu);
// });