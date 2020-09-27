const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, "id required"]
    },
    stateName:{
        type:String,
        required: [true, "stateName required"]
    }
})

const stateModel = mongoose.model(stateSchema);
module.exports = stateModel;