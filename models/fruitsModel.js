const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
    name: String,
    color:String,
    weight:Number,
    availability:Boolean
});

const fruitModel = mongoose.model("fruit", fruitSchema);
module.exports = fruitModel;

