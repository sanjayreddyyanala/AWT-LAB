const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Schema } = require("mongoose");

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/student")
.then((res)=> {
    console.log("connected to mongo succesfully");
})
.catch((err)=> {
    console.log("Failed to connect to the mongo server");
})


const schema =  new mongoose.Schema({
    name : String,
    roll : String,
    branch : String
})


const Student = mongoose.model("Student",schema);

// let std1 = new Student( {
//     name : "Sanjay",
//     roll : "12b2",
//     branch : "IT"
// })

// std1.save();

app.get("/students",(req,res) => {
    Student.find().then((result) => {
        res.send(result);
    });
})

app.post("/student",(req,res)=> {
    let {name,roll,branch} = req.body;
    let newstd = new Student({
        name,
        roll,
        branch
    });
    newstd.save().then(()=>{
        res.send("data updated to db succesfully");
    }).catch(()=>{
        res.send("")
    })
})

app.delete("/student",(req,res)=> {
    let {roll} = req.body;
    Student.findOneAndDelete({roll}).then((result)=> {
        if(result == null){
            res.send("Student doesnt exist");
        }
        res.send("data deleted succesfully");
    }).catch(()=> {
        res.send("couldnt delete student from the db");
    })
})

app.patch("/student",(req,res)=> {
    let {name,roll,branch} = req.body;
    let result = {};
    if(name != undefined) {
        result.name = name;
    }
    if(branch != undefined) {
        result.branch = branch;
    }
    result.roll = roll;
    Student.updateOne({roll},result)
    .then(()=> {
        res.send("updated succesfully");
    })
    .catch(()=> {
        res.send("error in updating data");
    })
})

app.listen(8080,()=> {
    console.log("Server Started ... ");
})
