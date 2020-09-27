const mongoose = require("mongoose");


const districtSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, "id required"]
    },
    districtName:{
        type:String,
        required: [true, "districtName required"]
    }
})

const districtModel = mongoose.model(districtSchema);
module.exports = districtModel;