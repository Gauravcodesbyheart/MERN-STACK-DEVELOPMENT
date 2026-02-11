const express = require("express");  //express set up 
const app = express();               //express set up
const mongoose = require("mongoose");                //Mongoose set-up 
const path = require("path");
const Chat = require("./models/chat.js");     // to take chat from models folder that is exported from chat.js 
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));  //  ejs set-up for view 
app.set("view engine", "ejs");                     // ejs set-up for view
app.use(express.static(path.join(__dirname, "public")));   // for linking css design that is written in the public folder
app.use(express.urlencoded({extended: true}));    // to parse the document information  when submitted
app.use(methodOverride("_method"));

main ()
.then(()=>{
    console.log("connection successful");        // thenable for mongoose
})
.catch(err=>console.log(err));
async function main (){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');  //Async function for mongoose
}

// Index route
app.get("/chats",async (req,res)=>{
    let chats = await Chat.find();            // conditon written to get all data from the DB
    console.log(chats);
    res.render("index.ejs",{chats});
});

// new route for adding new chat pn clicking button 
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

// create route 
app.post("/chats",(req,res)=>{
    let { from , to , msg} = req.body;
    let newChat = new Chat ({
        from : from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    newChat.save()    // save etc is already a async function 
    .then((res)=>{
        console.log("Chat was saved");
    })
    .catch((err)=>{
        console.log(err);
    });
    res.redirect("/chats");
});

// edit route
app.get("/chats/:id/edit", async (req,res)=>{   // finding the data in the db is asynchronous function so written inside the async function
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{ chat });
});
//update route
app.put("/chats/:id",async (req,res)=>{
    let { id } = req.params;
    let {msg : newMsg} = req.body;
    console.log(newMsg);
    let updatedChat = await  Chat.findByIdAndUpdate(
        id,
        {msg: newMsg},
        {runValidators: true, new: true});
    console.log(updatedChat);
    res.redirect("/chats");
});

// destroty route
app.delete("/chats/:id", async(req,res)=>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});

app.get("/",(req,res)=>{
    res.send("root is working");  //Root route
});

app.listen(8080,()=>{
    console.log("app is listening in port 8080");
});
