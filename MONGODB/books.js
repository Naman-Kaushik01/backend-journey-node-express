const mongoose = require('mongoose');


main().then(()=>{
    console.log("Connection Successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}
const bookSchema = mongoose.Schema({
    title:{
        type : String,
        required : true,
        maxLength : 20 //title of book must be less than 20
    },
    author : {
        type : String,
    },
    price : {
        type : Number,
        min : [100, "Price is too low for amazon seller"] // price of book should be minimum 100 and we are giving a custom error . if user is entering price less than min
    },
    discount : {
        type : Number ,
        default : 0,
    },
    category : {
        type : String,
        enum : ["fiction","non-fiction"], // if the category of our book will not belongs to this array it will give an error 
    },
    genre : [String]

})

const Book = mongoose.model("Book",bookSchema);

// let book1 = new Book({
//     title : "Marvel Comics V2",
//     author : "Stan Lee",
//     price : 650,
//     discount : 150,
//     category : "fiction",
//     genre :["comics" , "Superheroes"],
// });
// book1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// Validation in Updation
Book.findByIdAndUpdate("68dd8b233f1806a0fa5ab2ae",
    {price : 500} ,
    {runValidators:true} // it will ensure that the updated price will not be less than minimum price
).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});