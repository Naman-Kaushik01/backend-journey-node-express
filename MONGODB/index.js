const mongoose = require('mongoose');


main().then(()=>{
    console.log("Connection Successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});
//creating a new collection User
const User = mongoose.model("User",userSchema);
 

//INSERT OPERATION - INSERT ONE
// const user1 = new User({
//     name:"Adam",
//     email:"adam@gaml.com",
//     age:23,
// });
// user1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


//INSERTING MULTIPLE ELEMENTS AT SAME TIME

// User.insertMany([
//     {name:"Tony",email:"tony@gmail.com",age:26},
//     {name:"Peter",email:"peter@gmail.com",age:36},
//     {name:"Bruce",email:"bruce@gmail.com",age:26},
// ]).then((res)=>{
//     console.log(res);
// })

// User.find({age :{$gt:30}}).then((data)=>{
//     console.log(data.name);
// }).catch((err)=>{
//     console.log(err);
// })

//If we want only one user

User.findOne({age :{$gt:20}}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

//If we want to findByID

User.findById("68dccbb8079b8de94316d4e4").then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});

//Update Operation
//UpdateOne
User.updateOne({name :"Adam"},{email:"adam@yahoo.in"}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

//Update Many

User.updateMany({age : {$gt :25}},{age:30}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

//Delete
User.deleteOne({name :"Adam"}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})