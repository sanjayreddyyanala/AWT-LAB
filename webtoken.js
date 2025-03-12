const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const mongoose = require("mongoose");

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/insta")
.then((res)=> {
    console.log("connected to mongo succesfully");
})
.catch((err)=> {
    console.log("Failed to connect to the mongo server");
})

const schema =  new mongoose.Schema({
    username : String,
    password : String
})


const User = mongoose.model("User",schema);

app.post("/login",(req,res)=> {
    let {username, password} = req.body;
    User.findOne({username,password}).then((result)=> {
        if(result == null) {
            res.send("invalid username or password");
        }else {
            const token = jwt.sign({username,password},"myinstagram");
            res.json({"token": token});
        }
        
    })
})

app.get("/sensitiveinfo",(req,res)=> {
    const token = req.headers['authorization'];
    const bearerToken = token.split(' ')[1];
    console.log(token);
    jwt.verify(bearerToken, "myinstagram", (err, decoded) => {
        if (err) {
            return console.error('Token verification failed:', err);
        }
    
        res.json({"Decoded token": decoded});
    });
})


app.listen(8080,()=> {
    console.log("Server started ..");
})
