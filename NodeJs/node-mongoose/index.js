const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:2626/conFusion';

const connect = mongoose.connect(url);

connect.then((db)=>{
    console.log("Connected correctly server");

    var newDish = Dishes({
        name:"Pizza",
        description:'test'
    });
    newDish.save()
        .then((dish)=>{
            console.log(dish);
           return Dishes.find({});
        })
        .then((dishes)=>{
            console.log(dishes);
            return Dishes.remove({});
        })
        .then(()=>{
            return mongoose.connection.close();
        })
        .catch((err)=>{
            console.log(err);
        });
});