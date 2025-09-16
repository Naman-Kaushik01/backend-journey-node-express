const express = require("express");
const app = express();

// console.dir(app);

let port = 3000;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
})
// app.use((req,res)=>{
//     console.log("Request Recieved");
//     res.send("This is a basic response");
// })

app.get("/" ,(req,res) =>{
    res.send("this is a root path");
})
app.get("/apple" ,(req,res) =>{
    res.send("Do you want to eat apple");
})

//Agar path match nahi kiya to ye response aa jaayega 
// app.get("*", (req,res)=>{
//     res.send("this path does not exist");
// })

//Path parameter

// app.get("/:username", (req,res)=>{
//     let {username} = req.params;
//     res.send(`welcome to the page of ${username}`)
// })

//Query String

app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("No results found!!")
})