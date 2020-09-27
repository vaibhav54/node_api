const express = require("express");
const mongoose = require("mongoose");

const userRoute = require('./routes/fruitsRoutes');
const districtRoute = require('./routes/districtRoute');

const app = express();
app.use(express.json());

app.use('/fruit',userRoute);
app.use('/district',districtRoute);

app.get('/', (req,res)=>{
    res.send('hello');
})
app.post('/', (req,res)=>{
    console.log(req.body);
})

// mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://vaibhav:1234567890@cluster0.8d27j.mongodb.net/db_demo?retryWrites=true&w=majority", 
    {useNewUrlParser: true, useUnifiedTopology: true}  
    ).then(() => {  console.log('Database connected')  },
      error =>   {  console.log('Database could not be connected : ' + error)  }
);

app.listen(3000, ()=>{
    console.log("listening....");
})