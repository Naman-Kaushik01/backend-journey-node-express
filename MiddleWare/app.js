const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

//middleware -> response send
// app.use((req,res,next)=>{
//     console.log("Hii I am middleware");
//     next();
//     //we can write code after next it will execute but it is not a good practice
// })

//Logger -morgan
// app.use((req,res,next)=>{
//     req.time =new Date(Date.now()).toString();
//     console.log(req.method , req.hostname , req.time);
//     next();
// })
// app.get("/" ,(req , res)=>{
//     res.send("Hii I am root");
// })
// app.get("/random" ,(req,res)=>{
//     res.send("this is a random page");
// });

// app.get("/api" ,(req,res)=>{
//     res.send("data");
// })
//Error -404
app.use("/api" ,(req,res,next)=>{
    let {token} =req.query;
    if(token =="giveaccess"){
        next();
    }
    throw new ExpressError(401,"Access Denied");
})

app.get("/err",(req,res,next)=>{
    abcd=abcd;
});
app.get("/admin", (req , res)=>{
    throw new ExpressError(403 ,"Access for admin is denied");
})
app.use((err,req,res,next)=>{
    let {status =500 , message ="Some Error Occured"} = err;
    res.status(status).send(message);   
});
app.use((req,res)=>{
   res.status(404).send("Page not found");
})
app.listen(8080 , ()=>{
    console.log("server is running to port 8080");
});