const fruitModel = require("../models/fruitsModel");

const create = (req,res, next)=>{
    const inputData = req.body;
    // console.log("from controlllers  ",inputData );
    fruitModel.create(inputData, function(err,tempBody){
        if(err) throw err;
        console.log(tempBody);
    })
}
const read = (req,res)=>{
    fruitModel.find((err,tempBody)=>{
        if(err) throw err;
        console.log(tempBody);
    })
}

module.exports = {create, read};