
const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
const uri = "mongodb+srv://ahrui123:ahrui123@myprojectcluster.9c5nh.mongodb.net/fooder-maindb?retryWrites=true&w=majority";

//connect to mongoose db
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
//create router
const FooderCheckoutRouter = require('./fooderbackend/routes/fooder_checkout');
const FooderMenuRouter = require('./fooderbackend/routes/fooder_menu');
app.use('/fooder_checkout', FooderCheckoutRouter);
app.use('/fooder_menu',FooderMenuRouter);


app.listen(process.env.PORT ||port, () => {
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