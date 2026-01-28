// Establish mongoose connection
const mongoose = require ("mongoose");
main()
.then(()=>{
    console.log("Connection successful.");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
};

//defining the schema named bookschema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type:Number,
    },
    discount:{
        type:Number,
        default:0,
    },
    genre:[String],
    category: {
        type:String,
        enum:["fiction","non-fiction"],
    },
});

// creating a model named book having collection books (as book colection stored as books) and name of the schema followed is bookschema

const Book = mongoose.model("Book",bookSchema); // Book model is a class basically 
let book2 = new Book({                        // make a object book2 then save and print result either throw error
    title: "Mathematics VIII", 
    Price: 1200
});
book2.save().then(res=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});