const express = require("express");
const app = express();
const path = require("path");



const port=8080;
app.use(express.static(path.join(__dirname ,"public/css")));
app.use(express.static(path.join(__dirname ,"public/js")));
//By setting this we will not get error even if we run our server from parent directory or outside
app.set("views",path.join(__dirname ,"/views"));
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("home.ejs");
})
app.get("/hello", (req, res)=>{
    res.send("Hello how are you ?");
})
app.get("/rolldice", (req, res)=>{
    let diceVal =Math.floor(Math.random()*6) +1;
    res.render("rolldice.ejs",{diceVal});
})
app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs", {data })
    }else{
        res.render("error.ejs");
    }
})
app.listen(port,()=>{
    console.log(`Server is running fine on ${port}`)
})