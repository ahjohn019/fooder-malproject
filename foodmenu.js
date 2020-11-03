
const express = require('express');

const app = express();

const port = 5000;

app.get('/api/foodmenu',(req, res) => {
    const foodmenu = [
        {label: 'Peanut', type:'peanut', price:1},
        {label: 'Fried Chicken', type: 'fried_chicken', price:2},
        {label: 'Salty Egg', type: 'salty_egg', price:3},
        {label: 'Rice', type: 'rice', price:1}
    ];

    res.json(foodmenu);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});