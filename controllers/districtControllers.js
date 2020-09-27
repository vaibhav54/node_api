const districtModel = require("../models/districtModel");
const placesJson = require("../assets/places.json");


const demoCreate= (req,res)=>{

    for (i in placesJson){
        let sno = placesJson[i].sno;
        let district = placesJson[i].district;
        console.log(sno,district);

        const tempId = "0__"+sno;
        console.log(tempId); 

        inputData = {
            _id:tempId,
            districtName:district
        }

        districtModel.create(inputData, function(err,outputData){
            if(err) throw err;
            console.log(outputData);
        })

    }
}

module.exports = demoCreate;