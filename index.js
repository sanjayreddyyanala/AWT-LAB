const express = require("express");
const app = express();
let port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.set("views",__dirname+"/views");

let students = [
    {
        name : "Sanjay",
        age : 20,
        id : "12b2"
    },
    {
        name : "Varshith",
        age : 20,
        id : "12b1"
    },
    {
        name : "Sathvik",
        age : 20,
        id : "12b3"
    }
];

app.get("/students",(req,res) => {
    res.send(students);
})


// npm config --global https.proxy https://172.16.34.250:3128
app.get("/students/:id",(req,res)=> {
    let {id} = req.params;
    let student = students.find( (std) => std.id === id);
    if(student) {
        res.status(200).send(student);
    }else {
        res.status(404).send("Student not found");
    }
})

app.delete("/students/:id",(req,res)=> {
    let {id} = req.params;
    students = students.filter( (std) => std.id != id);
    res.status(200).send(students);
})

app.get("/students/add/new",(req,res)=> {
    res.render("new.ejs");
})

app.post("/students",(req,res) => {
    let {name,age,id} = req.body;
    students.push({name,age,id});
    res.send(students);
})

app.patch("/students/:id",(req,res)=> {
    let {id} = req.params;
    let {name,age} = req.body;
    let student = students.find((std)=> std.id == id);
    if(student) {
        if(name){
            student.name = name;
        }
        if(age) {
            student.age = age;
        }
        res.status(200).send(students);
    }else {
        res.status(404).send("Student not found");
    }
})

app.put("/students/:id",(req,res)=> {
    let {id} = req.params;
    let {name,age} = req.body;
    let student = students.find((std)=> std.id == id);
    if(student) {
        student.name = name;
        student.age = age;
        res.status(200).send(students);
    }else {
        res.status(404).send("Student not found");
    }
})

app.listen(port,()=> {
    console.log("Server started at port " + port);
})
