const mongoose = require ("mongoose");
main()
.then(()=>{
    console.log("Connection successful.");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');  // to handle asynchronoud operation we use this fucntion 

}

const userSchema = new mongoose.Schema({    // creating schemas- to define the shape of the document 
    name: String,
    email: String,
    age : Number
});
const User = mongoose.model("User",userSchema);  // creating models-- helps to create the doucments  where model name is usr and follow the userSchema that is definded above
// // const Employee = mongoose.model("Employee",userSchema);
User.find().then(res=>{console.log(res)})
.catch((err)=>{
    console.log(err);
});

// suppose we want to find age of all users whose age is greater than 47 
User.find({age:{$gte: 48}})
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    });
// User.insertMany([
//     {name: "Tony",email: "Tony@gmail.com",age:50},
//     {name: "Peter",email: "peter@gmail.com",age: 30},
//     {name: "Bruce", email: "bruce@gmail.com", age: 47},
// ])
// .then((data)=>{
//     console.log(data);
// });

// const user2 = new User({
//     name: "eve",
//     email: "eve@gmail.com",
//     age: 45,
// });
// user2.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.updateMany({name:"Bruce"},{age:49})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });
User.deleteOne({name: "Bruce"})
.then((res)=>{
    console.log(res);
});